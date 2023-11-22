import { createSlice } from '@reduxjs/toolkit';

const superClientsSlice = createSlice({
    name: 'superClientsSlice',
    initialState: {
        superClient: [],
        clientNameList: [],
        clientFloorsList: [{ label: "All", value: "All" }],
        selectedClientName: 'All',
        selectedClientFloors: 'All'
    },
    reducers: {
        saveSuperClientData(state, action) {
            state.superClient = action.payload;
        },
        saveSuperClientNameList(state, action) {
            state.clientNameList = action.payload;
        },
        saveSuperClientFloorsList(state, action) {
            state.clientFloorsList = action.payload;
        },
        selectedClientNameAction(state, action) {
            state.selectedClientName = action.payload;
        },
        selectedClientFloorsAction(state, action) {
            state.selectedClientFloors = action.payload;
        },
    },
});
export const {
    saveSuperClientData,
    saveSuperClientNameList,
    saveSuperClientFloorsList,
    selectedClientNameAction,
    selectedClientFloorsAction
} = superClientsSlice.actions;

export default superClientsSlice.reducer;
