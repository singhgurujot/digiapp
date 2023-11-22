import {createSlice} from '@reduxjs/toolkit';

const commonDataSlice = createSlice({
  name: 'commonSlice',
  initialState: {
    onLoad:false
  },
  reducers: {
    setLoader(state, action) {
      state.onLoad = action.payload;
    },
  },
});
export const {setLoader} = commonDataSlice.actions;

export default commonDataSlice.reducer;
