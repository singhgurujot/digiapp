import { View } from 'react-native';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import Route from './Routes/route';
import store from './Redux/store/store';
import {  Auth } from 'aws-amplify';
import AppConstant from './Themes/appConstant';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3000);
    // Initialize Amplify
    Auth.configure({
      region: AppConstant.REACT_APP_AMPLIFY_REGION,
      userPoolId: AppConstant.REACT_APP_AMPLIFY_USER_POOL_ID,
      userPoolWebClientId: AppConstant.REACT_APP_AMPLIFY_USER_POOL_WEBCLIENTID,
    });
  }, []);

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Route />
      </View>
    </Provider>
  );
};

export default App;
