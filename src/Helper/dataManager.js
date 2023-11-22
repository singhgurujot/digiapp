import AsyncStorage from '@react-native-async-storage/async-storage';
import {DataManagersKeys} from './dataManagerKeys';
export const DataManager = {
  async setAccessToken(token) {
    return await AsyncStorage.setItem(DataManagersKeys.access_token, token);
  },
  async getAccessToken() {
    return await AsyncStorage.getItem(DataManagersKeys.access_token);
  },
  async set_UserId(user_Id) {
    return await AsyncStorage.setItem(DataManagersKeys.user_Id, user_Id);
  },
  async get_UserId() {
    return await AsyncStorage.getItem(DataManagersKeys.user_Id);
  },
  async set_UserId(user_Id) {
    return await AsyncStorage.setItem(DataManagersKeys.user_Id, user_Id);
  },
  async get_UserId() {
    return await AsyncStorage.getItem(DataManagersKeys.user_Id);
  },
  async setUserInfo(userInfo) {
    return await AsyncStorage.setItem(DataManagersKeys.userInfo, userInfo);
  },
  async getUserInfo() {
    return await AsyncStorage.getItem(DataManagersKeys.userInfo);
  },

  async removeData() {
    const keys = [
      DataManagersKeys.access_token,
      DataManagersKeys.user_Id,
      DataManagersKeys.userInfo,
    ];
    await AsyncStorage.multiRemove(keys);
  },
};
