import { Auth } from 'aws-amplify';
import useUser from './user';
import { useDispatch } from 'react-redux';
import { DataManager } from '../Helper/dataManager';
import { saveLoginData } from '../Redux/slices/loginSlice';
import { updateSelectedFilterValue } from '../Redux/slices/dashBoardSlice';
import { Alert } from 'react-native';
import { setLoader } from '../Redux/slices/commonSlice';

const useAccount = () => {
    const { getUser } = useUser();
    const dispatch = useDispatch()

    const signIn = ({ email, pass }) => {
        dispatch(setLoader(true));
        Auth.signIn(email, pass)
            .then((res) => {
                const token = res?.signInUserSession?.idToken?.jwtToken;
                const userId = res?.signInUserSession?.accessToken?.payload?.username;
                let tokenData = { key: "access_Token", data: token }
                let userIdData = { key: "user_Id", data: userId }
                dispatch(saveLoginData(tokenData));
                dispatch(saveLoginData(userIdData));
                DataManager.setAccessToken(token);
                DataManager.set_UserId(userId);
                if (userId) {
                    getUser(userId);
                }
            })
            .catch((err) => {
                dispatch(setLoader(false));
                Alert.alert(err.message)
                console.log('signIn Error', err)
            });
    };

    const signOut = () => {
        dispatch(setLoader(true));
        DataManager.removeData();
        dispatch(
            saveLoginData({
                key: "access_Token",
                data: null,
            })
        );
        // dispatch(
        //     updateSelectedFilterValue({
        //       data: "",
        //       key: "firstFilterSelectedvalue",
        //     })
        //   );
        //   dispatch(
        //     updateSelectedFilterValue({
        //       data: "",
        //       key: "secondFilterSelectedvalue",
        //     })
        //   );

        Auth.signOut()
            .then(() => {
                console.log('signOut sucees::::');
                dispatch(setLoader(false));
            })
            .catch((err) => {
                dispatch(setLoader(false));
                console.log('signOut Error::::', err)
            });
    };

    return {
        signIn,
        signOut,
    };
};

export default useAccount;

