import { createSlice } from '@reduxjs/toolkit';

const pcSensorSlice = createSlice({
    name: 'pcSensorSlice',
    initialState: {
        pcSensors: []
    },
    reducers: {
        savePCSensorData(state, action) {
            state.pcSensors = action.payload;
        },
    },
});
export const { savePCSensorData } = pcSensorSlice.actions;

export default pcSensorSlice.reducer;
