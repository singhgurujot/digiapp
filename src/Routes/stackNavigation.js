import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import DrawerNav from './drawerNavigation';
import { DataManager } from '../Helper/dataManager';
import { useDispatch, useSelector } from 'react-redux';
import { saveLoginData } from '../Redux/slices/loginSlice';
import { saveUserInfo } from '../Redux/slices/dashBoardSlice';
import { Auth } from 'aws-amplify';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const [time, setTime] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    // getCurrentSession()
    getDataFromStorage();
    setTimeout(() => {
      setTime(true);
    }, 2000);
  }, []);

  const getCurrentSession = async () => {
    const res = await Auth.currentSession();
    let token = res?.idToken?.jwtToken;
    let userId = res?.accessToken?.payload?.username;

    DataManager.setAccessToken(token);
    DataManager.set_UserId(userId);

    dispatch(
      saveLoginData({
        key: 'access_Token',
        data: token,
      }),
    );
    dispatch(
      saveLoginData({
        key: 'user_Id',
        data: userId,
      }),
    );
  }

  const getDataFromStorage = async () => {
    const accessToken = await DataManager.getAccessToken();
    const userId = await DataManager.get_UserId();
    const userInfo = await DataManager.getUserInfo();
    dispatch(saveUserInfo(JSON.parse(userInfo)));
    dispatch(
      saveLoginData({
        key: 'access_Token',
        data: accessToken,
      }),
    );
    dispatch(
      saveLoginData({
        key: 'user_Id',
        data: userId,
      }),
    );
  };

  const { access_Token, user_Id } = useSelector(
    data => data.loginData.loginrespons,
  );

  return (
    <>
      {time && (
        <Stack.Navigator
          initialRouteName={access_Token ? 'DrawerNav' : 'Login'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="DrawerNav" component={DrawerNav} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default StackNavigation;
