import { pickerSelectStyles, styles } from "./styles";
import CustomTextInput from "../CustomTextInput";
import AppConstant from "../../Themes/appConstant";
import appColors from "../../Themes/colors";
import AppImages from "../../Themes/appImages";
import { useDispatch, useSelector } from "react-redux";
import { updateFilteredPCSensorData, updateFilteredSensorData, updateSearchedValue, updateSelectedFilterValue } from "../../Redux/slices/dashBoardSlice";
import { Image, Platform, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";
import { saveSuperClientFloorsList, selectedClientFloorsAction, selectedClientNameAction } from "../../Redux/slices/superUserClientsSlice";

const SuperuserFilterView = ({ sensorListData, pcSensors }) => {
    const {
        searchValue,
        filteredSensorData,
        filteredPCSensorData
    } = useSelector((data) => data.dashBoardData);


    const {
        superClient,
        clientNameList,
        clientFloorsList,
        selectedClientName,
        selectedClientFloors
    } = useSelector((data) => data.superClients);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSearch = (searchText) => {
        dispatch(updateSearchedValue(searchText));
        // searching sensor data
        let results = [];
        let pcSensorResults = [];
        if (searchText.trim().length == 0) {
            if (selectedClientName !== 'All' && selectedClientFloors !== 'All') {
                const filterSensorData = sensorListData.filter(
                    (item) =>
                        item.clientId.S === selectedClientName &&
                        item.location.S === selectedClientFloors
                );
                const filterPCSensorData = pcSensors.filter(
                    (item) =>
                        item.clientId.S === selectedClientName &&
                        item.location.S === selectedClientFloors
                );
                dispatch(updateFilteredSensorData(filterSensorData));
                dispatch(updateFilteredPCSensorData(filterPCSensorData));
            } else {
                const filterSensorData = sensorListData.filter(
                    (item) => item.clientId.S === selectedClientName
                );
                const filterPCSensorData = pcSensors.filter(
                    (item) => item.clientId.S === selectedClientName
                );
                dispatch(updateFilteredSensorData(filterSensorData));
                dispatch(updateFilteredPCSensorData(filterPCSensorData));
            }

        } else {

            if (selectedClientName !== 'All' || selectedClientFloors !== 'All') {
                results = filteredSensorData.filter(item => {
                    if (item.name && item.name.S) {
                        return item.name.S.toLowerCase().includes(searchText.toLowerCase());
                    }
                    return false;
                });
                // searching particular-sensor data
                pcSensorResults = filteredPCSensorData.filter(item => {
                    if (item.name && item.name.S) {
                        return item.name.S.toLowerCase().includes(searchText.toLowerCase());
                    }
                    return false;
                });
            } else {
                results = sensorListData.filter(item => {
                    if (item.name && item.name.S) {
                        return item.name.S.toLowerCase().includes(searchText.toLowerCase());
                    }
                    return false;
                });
                // searching particular-sensor data
                pcSensorResults = pcSensors.filter(item => {
                    if (item.name && item.name.S) {
                        return item.name.S.toLowerCase().includes(searchText.toLowerCase());
                    }
                    return false;
                });

            }
            dispatch(updateFilteredSensorData(results));
            dispatch(updateFilteredPCSensorData(pcSensorResults));
        }


    };

    const handleNameFilterData = async (data) => {
        let selectedData = Platform.OS == "android" ? data : selectedClientName;
        // filter sensor and pc-sensor data based on client name(first filter)
        console.log('handleNameFilterData', selectedData, pcSensors);
        if (selectedData == 'All') {
            let data = [{ label: "All", value: "All" }];
            dispatch(saveSuperClientFloorsList(data));
        } else {
            const filterSensorData = sensorListData.filter(
                (item) => item.clientId.S === selectedData
            );
            const filterPCSensorData = pcSensors.filter(
                (item) => item.clientId.S === selectedData
            );
            dispatch(updateFilteredSensorData(filterSensorData));
            dispatch(updateFilteredPCSensorData(filterPCSensorData));

            // populating floors list array(second filter) based on client names(first floors)
            const matchedArray = superClient.reduce((result, item) => {
                if (item.clientId.S.toLowerCase().includes(selectedData.toLowerCase())) {
                    item.floors.SS.forEach((floor) => {
                        result.push({ label: floor, value: floor });
                    });
                }
                return result;
            }, []);
            matchedArray.unshift({ label: "All", value: "All" });
            matchedArray.sort((a, b) => a.label.localeCompare(b.label));
            dispatch(saveSuperClientFloorsList(matchedArray));
        }
    };

    const handleFloorsFilter = async (data) => {
        let selectedData = Platform.OS == "android" ? data : selectedClientName;
        // filter sensor and pc-sensor data based on floors name(second filter)

        if (selectedData == 'All') {
            const filterSensorData = sensorListData.filter(
                (item) => item.clientId.S === selectedClientName
            );
            const filterPCSensorData = pcSensors.filter(
                (item) => item.clientId.S === selectedClientName
            );
            dispatch(updateFilteredSensorData(filterSensorData));
            dispatch(updateFilteredPCSensorData(filterPCSensorData));
        } else {
            const filterSensorData = sensorListData.filter(
                (item) =>
                    item.location.S === selectedData &&
                    item.clientId.S === selectedClientName
            );
            const filterPCSensorData = pcSensors.filter(
                (item) =>
                    item.location.S === selectedData &&
                    item.clientId.S === selectedClientName
            );
            dispatch(updateFilteredSensorData(filterSensorData));
            dispatch(updateFilteredPCSensorData(filterPCSensorData));
        }

    };

    const FirstPicker = () => {
        return (
            <View style={styles.pickerView}>
                <RNPickerSelect
                    onValueChange={(value) => {
                        dispatch(selectedClientNameAction(value));
                        dispatch(updateSearchedValue(""));
                        // handleNameFilterData(value);
                        if (Platform.OS == "android") {
                            handleNameFilterData(value);
                        }
                    }}
                    titleText={"Client Names"}
                    items={clientNameList}
                    style={pickerSelectStyles}
                    placeholder={{}}
                    value={selectedClientName}
                    useNativeAndroidPickerStyle={Platform.OS == "ios" ? false : true}
                    placeholderStyle={{ display: "none" }}
                    labelStyle={{ display: "none" }}
                    onClose={handleNameFilterData}
                    Icon={() => {
                        return (
                            <Image
                                source={AppImages.dropdownIcon}
                                resizeMode="contain"
                                style={{ height: 14, width: 14 }}
                            />
                        );
                    }}
                />
            </View>
        )
    }

    const SecondPicker = () => {
        return (
            <View style={styles.pickerView}>
                <RNPickerSelect
                    onValueChange={(value) => {
                        dispatch(selectedClientFloorsAction(value));
                        dispatch(updateSearchedValue(""));
                        // handleNameFilterData(value);
                        if (Platform.OS == "android") {
                            handleFloorsFilter(value);
                        }
                    }}
                    titleText={"Client Names"}
                    items={clientFloorsList}
                    style={pickerSelectStyles}
                    placeholder={{}}
                    value={selectedClientFloors}
                    useNativeAndroidPickerStyle={Platform.OS == "ios" ? false : true}
                    placeholderStyle={{ display: "none" }}
                    labelStyle={{ display: "none" }}
                    onClose={handleFloorsFilter}
                    Icon={() => {
                        return (
                            <Image
                                source={AppImages.dropdownIcon}
                                resizeMode="contain"
                                style={{ height: 14, width: 14 }}
                            />
                        );
                    }}
                />
            </View>
        )
    }


    return (
        <>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 15,
                    marginHorizontal: 25,
                }}
            >
                <FirstPicker />
                <SecondPicker />
            </View>
            <CustomTextInput
                searchBar={true}
                placeholderText={AppConstant.searchSensor}
                placeholderTextColor={appColors.lightGrey}
                icon1={AppImages.search}
                value={searchValue}
                width={"87.4%"}
                onChange={handleSearch}
            />
        </>
    );
};
export default SuperuserFilterView;
