import { useState, useEffect, useCallback, useMemo } from 'react';
import { Alert, ScrollView, StatusBar, View } from 'react-native';
import { useMount, useTimeoutFn } from 'react-use';
import useClients from '../../Utils/superUserClients';
import { ConfirmationPopup, FilterComponent, Loader, PCSensorCard, SensorCard, StopAlarmPopup } from '../../Components';
import { Header } from "../../Components/Header";
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import appColors from '../../Themes/colors';
import { useIsFocused } from '@react-navigation/native';
import api from '../../Utils/AxiosSetup';
import { filterAndSortSensors } from '../../Helper/senser';
import { updateData, updateSearchedValue, updateSelectedFilterValue } from '../../Redux/slices/dashBoardSlice';
import { savePCSensorData } from '../../Redux/slices/pcSensorSlice';
import { RefreshControl } from 'react-native-gesture-handler';
import { selectedClientFloorsAction, selectedClientNameAction } from '../../Redux/slices/superUserClientsSlice';
import NoDataFound from '../../Components/NoDatFound';
import useSensorInfo from '../../Utils/sensorInfo';
const REFRESH_TIME_MS = 5 * 60 * 1000;

function SuperuserDashboard() {
    const dispatch = useDispatch();
    const isFocused = useIsFocused();

    const { clients, getClients, loading: clientLoading } = useClients();
    const [loading, setLoading] = useState();
    const [data, setData] = useState([]);
    const [pcData, setPcData] = useState([]);
    const [firstLoad, setFirstLoad] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const [selectedSensorItem, setSelectedSensorItem] = useState(null);
    const [confirmationPopupVisible, setConfirmationPopupVisible] =
        useState(false);
    const [stopAlarmPopupVisible, setStopAlarmPopupVisible] = useState(false);
    const [description, setDescription] = useState("");

    const {
        firstFilterArray,
        searchValue,
        sensorListData,
        filteredSensorData,
        pcListData,
        filteredPCSensorData,
        userInfo,
    } = useSelector((data) => data.dashBoardData);
    const {
        superClient,
        clientNameList,
        clientFloorsList,
        selectedClientName,
        selectedClientFloors
    } = useSelector((data) => data.superClients);
    const {
        pcSensors,
    } = useSelector((data) => data.pcSensor);

    const { closeAlarm, stopAlarm } = useSensorInfo();

    const getAllSensors = useCallback(async () => {
        setLoading(true);
        try {
            const response = await api.get('/sensors/all');
            dispatch(updateData({ data: filterAndSortSensors(response.data.Items), key: "sensorListData" }));

            const pcResponse = await api.get('/sensors/pc/all');
            dispatch(savePCSensorData(filterAndSortSensors(pcResponse.data.Items)))
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, []);

    useMount(() => {
        getAllSensors();
        getClients();
    });
    // eslint-disable-next-line no-unused-vars
    const [isReady, cancel, reset] = useTimeoutFn(getAllSensors, REFRESH_TIME_MS);

    const resetTimeout = isReady();

    useEffect(() => {
        reset();
    }, [resetTimeout, reset]);

    // callling api's on screen pull from top
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        dispatch(updateSearchedValue(''));
        getClients();
        getAllSensors();
        dispatch(selectedClientNameAction('All'));
        dispatch(selectedClientFloorsAction('All'));
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
            stopAlarm(selectedSensorItem, description, userInfo)
            getAllSensors();
        }
    };


    return (
        <View style={styles.mainView}>
            <Loader loading={loading} />
            <StatusBar backgroundColor={appColors.white} barStyle={"dark-content"} />
            <Header dispatch={dispatch} clientName={selectedClientName} />
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
                    clientNameList={clientNameList}
                    clientFloorsList={clientFloorsList}
                />
                <SensorCard
                    data={(searchValue.length > 0 || selectedClientName !== 'All') ? filteredSensorData : sensorListData}
                    setSelectedSensorItem={setSelectedSensorItem}
                    setConfirmationPopupVisible={setConfirmationPopupVisible}
                />
                <PCSensorCard data={(searchValue.length > 0 || selectedClientName !== 'All') ? filteredPCSensorData : pcSensors} />
                {
                    searchValue.length > 0 || selectedClientName !== 'All' || selectedClientFloors !== 'All' ?
                        filteredSensorData.length == 0 && filteredPCSensorData.length == 0 &&
                        <NoDataFound />
                        :
                        sensorListData?.length == 0 && pcSensors?.length == 0 &&
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
}

export default SuperuserDashboard;
