import {
    View,
    StatusBar,
    Animated,
    Alert,
    RefreshControl,
    ScrollView,
} from "react-native";
import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
} from "react";
import { styles } from "./styles";
import { Header } from "../../Components/Header";
import appColors from "../../Themes/colors";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import {
    ConfirmationPopup,
    FilterComponent,
    Loader,
    PCSensorCard,
    SensorCard,
    StopAlarmPopup,
} from "../../Components";
import {
    updateSearchedValue,
    updateFilterListData,
    updateSelectedFilterValue,
} from "../../Redux/slices/dashBoardSlice";
import NoDataFound from "../../Components/NoDatFound";
import useClient from "../../Utils/client";
import useSensorInfo from "../../Utils/sensorInfo";
import { CLIENTS_WITH_PC } from "../../Utils/constant";
import useParticleCounter from "../../Utils/PCSensor";


const REFRESH_TIME_MS = 5 * 60 * 1000;
const DashBoard = () => {
    const dispatch = useDispatch();
    const isFocused = useIsFocused();

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [selectedSensorItem, setSelectedSensorItem] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [confirmationPopupVisible, setConfirmationPopupVisible] =
        useState(false);
    const [stopAlarmPopupVisible, setStopAlarmPopupVisible] = useState(false);
    const [description, setDescription] = useState("");
    const { onLoad } = useSelector((data) => data.commonData);
    const {
        firstFilterArray,
        firstFilterSelectedvalue,
        searchValue,
        userInfo,
        sensorListData,
        filteredSensorData,
        pcListData,
        filteredPCSensorData,
    } = useSelector((data) => data.dashBoardData);
    const { access_Token } = useSelector((data) => data.loginData.loginrespons);
    const { getClient, client } = useClient();
    const { getAllSensors, closeAlarm, stopAlarm } = useSensorInfo();
    const { getAllPCSensors, pcSensors } = useParticleCounter();

    useEffect(() => {
        if (userInfo) {
            const clientId = userInfo?.Items[0]?.clientId?.S;
            getClient(clientId)
        }
    }, [userInfo])

    useEffect(() => {
        if (client) {
            const clientData = client.floors.SS.map((floor) => ({ label: floor, value: floor }))
            clientData.unshift({ label: "All", value: "All" });
            clientData.sort((a, b) => a.label.localeCompare(b.label));
            dispatch(
                updateFilterListData({ data: clientData, key: "firstFilterArray" })
            );
        }

    }, [client])

    const getSensorInfo = useCallback(() => {
        if (client) {
            const { clientId } = client;
            getAllSensors(clientId);
            if (CLIENTS_WITH_PC.includes(client.clientId)) {
                getAllPCSensors(client.clientId);
            }
        }
    }, [getAllSensors, getAllPCSensors, client]);

    useEffect(() => {
        getSensorInfo();
    }, [client]);

    useEffect(() => {
        startAnimation();
        let interval = setInterval(() => {
            const clientId = userInfo?.Items[0]?.clientId?.S;
            getClient(clientId)
            getSensorInfo();
            dispatch(updateSelectedFilterValue({ data: '', key: 'firstFilterSelectedvalue' }))
            dispatch(updateSearchedValue(''))
        }, REFRESH_TIME_MS);
        return () => clearInterval(interval);
    }, [isFocused]);

    // callling api's on screen pull from top
    const onRefresh = useCallback(() => {
        const clientId = userInfo?.Items[0]?.clientId?.S;
        setRefreshing(true);
        dispatch(updateSearchedValue(''));
        getClient(clientId)
        getSensorInfo();
        dispatch(
            updateSelectedFilterValue({
                data: "All",
                key: "firstFilterSelectedvalue",
            })
        );
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const handleStopAlarm = async () => {
        if (description.trim().length == 0) {
            Alert.alert("Please enter description.");
        } else {
            setStopAlarmPopupVisible(false);
            await closeAlarm(selectedSensorItem, true)
            getSensorInfo()
            stopAlarm(selectedSensorItem, description, userInfo)
        }
    };

    const startAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };


    return (
        <View style={styles.mainView}>
            <Loader loading={onLoad} />
            <StatusBar backgroundColor={appColors.white} barStyle={"dark-content"} />
            <Header dispatch={dispatch} clientName={firstFilterSelectedvalue} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                contentContainerStyle={{
                    flex: sensorListData.length > 0 || pcListData.length > 0 ? 0 : 1,
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor="transparent"
                        progressViewOffset={300}
                    />
                }
            >
                <FilterComponent
                    sensorListData={sensorListData}
                    pcSensors={pcSensors}
                    filterList={firstFilterArray}
                />
                <SensorCard
                    data={(searchValue.length > 0 || firstFilterSelectedvalue !== 'All') ? filteredSensorData : sensorListData}
                    setSelectedSensorItem={setSelectedSensorItem}
                    setConfirmationPopupVisible={setConfirmationPopupVisible}
                />
                <PCSensorCard data={(searchValue.length > 0 || firstFilterSelectedvalue !== 'All') ? filteredPCSensorData : pcSensors} />

                {
                    searchValue.length > 0 || firstFilterSelectedvalue !== 'All' ?
                        filteredSensorData.length == 0 && filteredPCSensorData.length == 0 &&
                        <NoDataFound />
                        :
                        sensorListData.length == 0 && pcSensors.length == 0 &&
                        <NoDataFound />
                }

            </ScrollView>
            <ConfirmationPopup
                visible={confirmationPopupVisible}
                onRequestClose={() => setConfirmationPopupVisible(false)}
                onPressNoButton={() => setConfirmationPopupVisible(false)}
                onPressYesButton={() => {
                    setConfirmationPopupVisible(false);
                    setStopAlarmPopupVisible(true);
                }}
            />
            <StopAlarmPopup
                visible={stopAlarmPopupVisible}
                onRequestClose={() => setStopAlarmPopupVisible(false)}
                onPressCrossIcon={() => setStopAlarmPopupVisible(false)}
                value={description}
                handleOnChangeDescription={(e) => setDescription(e)}
                handleStopAlarm={handleStopAlarm}
            />
        </View>
    );
};

export default DashBoard;
