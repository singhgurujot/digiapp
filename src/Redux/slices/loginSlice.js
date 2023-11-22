import {createSlice} from '@reduxjs/toolkit';

const loginDataSlice = createSlice({
  name: 'loginSlice',
  initialState: {
    loginrespons: {
      access_Token: null,
      user_Id: null,
    },
  },
  reducers: {
    saveLoginData(state, action) {
      const {data, key} = action.payload;
      state.loginrespons[key] = data;
    },
  },
});
export const {saveLoginData, saveAccessToken} = loginDataSlice.actions;

export default loginDataSlice.reducer;
