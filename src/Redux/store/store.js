import loginSlice from '../slices/loginSlice';
import dashBoardSlice from '../slices/dashBoardSlice';
import commonSlice from '../slices/commonSlice';
import { configureStore } from '@reduxjs/toolkit';
import clientSlice from '../slices/clientSlice';
import pcSensorSlice from '../slices/pcSensorSlice';
import superClientsSlice from '../slices/superUserClientsSlice';
const store = configureStore({
  reducer: {
    loginData: loginSlice,
    dashBoardData: dashBoardSlice,
    commonData: commonSlice,
    client: clientSlice,
    pcSensor: pcSensorSlice,
    superClients: superClientsSlice,
  },
});

export default store;
