import { createSlice } from "@reduxjs/toolkit";
import appColors from "../../Themes/colors";

const dashBoardDataSlice = createSlice({
  name: "dashBoardSlice",
  initialState: {
    userInfo: null,
    firstFilterArray: [
      { label: "All", value: "All", color: appColors.appBlueColor },
    ],
    secondFilterArray: [
      { label: "All", value: "All", color: appColors.appBlueColor },
    ],
    firstFilterSelectedvalue: "All",
    secondFilterSelectedvalue: "",
    searchValue: "",
    sensorListData: [],
    searchSensorDataList: null,
    pcListData: [], // particle-counter list data
    sensorListDataForSearch: [],
    pcListDataForSearch: [], // particle-counter list data
    filteredSensorData: [],
    filteredPCSensorData: [],
  },
  reducers: {
    saveUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    updateFilterListData(state, action) {
      const { data, key } = action.payload;
      state[key] = data;
    },
    updateSelectedFilterValue(state, action) {
      const { data, key } = action.payload;
      state[key] = data;
    },
    updateSearchedValue(state, action) {
      state.searchValue = action.payload;
    },
    updateData(state, action) {
      const { data, key } = action.payload;
      state[key] = data;
    },
    updateFilteredSensorData(state, action) {
      state.filteredSensorData = action.payload;
    },
    updateFilteredPCSensorData(state, action) {
      state.filteredPCSensorData = action.payload;
    },

  },
});
export const {
  saveUserInfo,
  updateFilterListData,
  updateSelectedFilterValue,
  updateSearchedValue,
  updateData,
  updateFilteredSensorData,
  updateFilteredPCSensorData
} = dashBoardDataSlice.actions;

export default dashBoardDataSlice.reducer;
