import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { DataManager } from '../Helper/dataManager';
import { setLoader } from '../Redux/slices/commonSlice';
import { saveUserInfo } from '../Redux/slices/dashBoardSlice';
import { useNavigation } from '@react-navigation/native';
import api from './AxiosSetup';

const useUser = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const getUser = useCallback(
        (userId) => {
            api
                .get('/user', {
                    params: {
                        userId,
                    },
                })
                .then((response) => {
                    dispatch(setLoader(false));
                    dispatch(setLoader(false));
                    DataManager.setUserInfo(JSON.stringify(response.data));
                    dispatch(saveUserInfo(response.data));
                    navigation.navigate("DrawerNav");
                })
                .catch((err) => {
                    dispatch(setLoader(false));
                    console.log('getUser Error::::', err);
                });
        },
        [dispatch]
    );


    return {
        getUser,
    };
};

export default useUser;
