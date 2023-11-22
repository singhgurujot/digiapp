import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
    name: 'clientSlice',
    initialState: {
        client: null
    },
    reducers: {
        saveClientData(state, action) {
            state.client = action.payload;
        },
    },
});
export const { saveClientData } = clientSlice.actions;

export default clientSlice.reducer;
