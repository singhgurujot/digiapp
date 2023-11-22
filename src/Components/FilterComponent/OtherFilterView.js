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

const OtherFilterView = ({ sensorListData, pcSensors, filterList, }) => {
    const {
        searchValue,
        firstFilterSelectedvalue
    } = useSelector((data) => data.dashBoardData);
    const dispatch = useDispatch();
    const navigation = useNavigation();


    const handleSearch = (searchText) => {
        dispatch(updateSearchedValue(searchText));
        // searching sensor sada
        const results = sensorListData.filter(item => {
            if (item.name && item.name.S) {
                return item.name.S.toLowerCase().includes(searchText.toLowerCase());
            }
            return false;
        });
        dispatch(updateFilteredSensorData(results));
        // searching particular-sensor data
        const pcSensorResults = pcSensors.filter(item => {
            if (item.name && item.name.S) {
                return item.name.S.toLowerCase().includes(searchText.toLowerCase());
            }
            return false;
        });
        dispatch(updateFilteredPCSensorData(pcSensorResults));
    };

    const handleFilterSensorsData = async (data) => {
        let selectedData = Platform.OS == "android" ? data : firstFilterSelectedvalue;
        if (selectedData == 'All') {
        } else {
            const filterSensorData = sensorListData.filter(
                (item) => item.location.S === selectedData
            );
            const filterPCSensorData = pcSensors.filter(
                (item) => item.location.S === selectedData
            );
            dispatch(updateFilteredSensorData(filterSensorData));
            dispatch(updateFilteredPCSensorData(filterPCSensorData));
        }
    };

    return (
        <View
            style={[
                styles.dropdownAndSearchBar,
                {
                    width: "100%",
                },
            ]}
        >
            <View style={styles.pickerView}>
                <RNPickerSelect
                    onValueChange={(value) => {
                        // filterArrayWithSelectedData(value);
                        dispatch(
                            updateSelectedFilterValue({
                                data: value,
                                key: "firstFilterSelectedvalue",
                            })
                        );
                        dispatch(updateSearchedValue(""));
                        if (Platform.OS == "android") {
                            handleFilterSensorsData(value);
                        }
                    }}
                    titleText={"Client Names"}
                    items={filterList}
                    style={pickerSelectStyles}
                    placeholder={{}}
                    value={firstFilterSelectedvalue}
                    useNativeAndroidPickerStyle={Platform.OS == "ios" ? false : true}
                    placeholderStyle={{ display: "none" }}
                    labelStyle={{ display: "none" }}
                    onClose={handleFilterSensorsData}
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
            <CustomTextInput
                searchBar={true}
                placeholderText={AppConstant.searchSensor}
                placeholderTextColor={appColors.lightGrey}
                icon1={AppImages.search}
                value={searchValue}
                width={"42%"}
                onChange={handleSearch}
            />
        </View>
    );
};
export default OtherFilterView;
