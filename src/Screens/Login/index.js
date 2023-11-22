import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  Alert,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import uuid from "react-native-uuid";
import { styles } from "./styles";
import AppConstant from "../../Themes/appConstant";
import CustomTextInput from "../../Components/CustomTextInput";
import AppImages from "../../Themes/appImages";
import appColors from "../../Themes/colors";
import Button from "../../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { signIn } from "../../AWS/auth";
import { useDispatch, useSelector } from "react-redux";
import { saveAccessToken, saveLoginData } from "../../Redux/slices/loginSlice";
import { DataManager } from "../../Helper/dataManager";
import { apiMethods } from "../../Helper/api";
import { Loader } from "../../Components";
import { setLoader } from "../../Redux/slices/commonSlice";
import { updateData } from "../../Redux/slices/dashBoardSlice";
import useAccount, { handleSignInError, handleSignInSuccess } from "../../Utils/account.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [seePass, setSeePass] = useState(false);
  // const [rememberMe, setRememberMe] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { onLoad } = useSelector((data) => data.commonData);
  // const { userInfo } = useSelector((data) => data.dashBoardData);
  const { access_Token } = useSelector((data) => data.loginData.loginrespons);

  // const [apiCall, setApiCall] = useState(false);

  const { signIn } = useAccount();

  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    setScrollPosition(y);
  };
  // const navigation = useNavigation();
  // const dispatch = useDispatch();

  // const getSensorData = async () => {
  //   dispatch(setLoader(true));
  //   const responsedata = await apiMethods.getSensorsData(
  //     access_Token,
  //     userInfo,
  //     dispatch,
  //     navigation
  //   );
  //   if (responsedata) {
  //     dispatch(setLoader(false));
  //     dispatch(updateData({ data: responsedata, key: "sensorListData" }));
  //     dispatch(
  //       updateData({ data: responsedata, key: "sensorListDataForSearch" })
  //     );
  //     navigation.navigate("DrawerNav");
  //   }
  // };

  // useEffect(() => {
  //   if (access_Token && apiCall) {
  //     setApiCall(false);
  //     getSensorData();
  //   }
  // }, [access_Token, apiCall]);

  // const handleSignIn = async () => {
  //   dispatch(setLoader(true));
  //   try {
  //     const user = await Auth.signIn(email, pass);
  //     let token = user?.signInUserSession?.idToken?.jwtToken;
  //     let userId = user?.signInUserSession?.accessToken?.payload?.username;
  //     DataManager.setAccessToken(token);
  //     DataManager.set_UserId(userId);
  //     dispatch(setLoader(false));
  //     dispatch(
  //       saveLoginData({
  //         key: "access_Token",
  //         data: token,
  //       })
  //     );
  //     setApiCall(true);
  //     dispatch(
  //       saveLoginData({
  //         key: "user_Id",
  //         data: userId,
  //       })
  //     );
  //     apiMethods.getUserData(token, userId, dispatch, navigation);
  //     setEmail("");
  //     setPass("");
  //     console.log("User logged in:", user);
  //   } catch (error) {
  //     dispatch(setLoader(false));
  //     console.log("Error signing in:", error);
  //     Alert.alert(error.message);
  //   }
  // };

  //Refactor the handleSignIn function
  // const handleSignIn = async () => {
  //   dispatch(setLoader(true));
  //   try {
  //     const user = await Auth.signIn(email, pass);
  //     await handleSignInSuccess(user, dispatch, navigation);
  //     // setEmail("");
  //     // setPass("");
  //   } catch (error) {
  //     handleSignInError(error, dispatch);
  //   } finally {
  //     dispatch(setLoader(false));
  //   }
  // };

  const handleSubmit = useCallback(
    (data) => {
      console.log('data::::', data);
      signIn(data);
    },
    [signIn]
  );


  const handleLogin = async () => {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.length == 0) {
      Alert.alert(AppConstant.pleaseEnterEmail);
    } else if (!emailRegex.test(email)) {
      Alert.alert(AppConstant.invalidEmailAddress);
    } else if (pass.length == 0) {
      Alert.alert(AppConstant.pleaseEnterPass);
    } else {
      let data = { email, pass }
      handleSubmit(data)
    }
  };

  const dottedLine = (data) => {
    return (
      <View style={styles.dottedMainView}>
        <View style={styles.itmes}>
          <Text
            style={
              data == AppConstant.privacyPolicy
                ? styles.privacyPolicy
                : styles.termsAndCondition
            }
          >
            {data}
          </Text>
        </View>
      </View>
    );
  };

  const lineAndLogin = () => {
    return (
      <View style={styles.lineAndLoginView}>
        <View style={styles.line} />
        <Text style={styles.loginAccount}>{AppConstant.loginAccount}</Text>
        <View style={styles.line} />
      </View>
    );
  };
  return (
    <>
      <Loader loading={onLoad} />
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <StatusBar
          animated={true}
          backgroundColor={appColors.appBlueColor}
          barStyle={"light-content"}
        />
        <Text style={styles.heading}>
          <Text style={styles.health}>{AppConstant.health}</Text>
          <Text style={styles.care}>{AppConstant.care}</Text>
        </Text>
        <Text style={styles.solutions}>{AppConstant.solutions}</Text>
        {lineAndLogin()}
        <View style={styles.inputs}>
          <CustomTextInput
            value={email}
            onChange={(data) => setEmail(data)}
            icon1={AppImages.email}
            inputMode={"email"}
            placeholderText={AppConstant.enterYourEmail}
            placeholderTextColor={appColors.lightGrey}
          />
          <CustomTextInput
            value={pass}
            onChange={(data) => setPass(data)}
            icon1={AppImages.lock}
            placeholderText={AppConstant.enterPass}
            placeholderTextColor={appColors.lightGrey}
            seePass={seePass}
            setSeePass={setSeePass}
            icon2={AppImages.eye}
            icon3={AppImages.closedEye}
            visible={!seePass}
          />
        </View>
        {/* <View style={styles.rememberMeView}>
          <TouchableOpacity
            style={styles.checkButton}
            delayPressIn={0}
            onPress={() => {
              setRememberMe(!rememberMe);
            }}>
            {rememberMe && (
              <Image source={AppImages.check} style={styles.checkIcon} />
            )}
          </TouchableOpacity>
          <Text style={styles.rememberMeText}>{AppConstant.rememberMe}</Text>
        </View> */}
        <View style={styles.buttonwrappedView}>
          <Button
            title={AppConstant.login}
            onPress={() => {
              handleLogin();
            }}
          />
        </View>
        <View style={styles.belowTextView}>
          <Text style={styles.byContinue}>{AppConstant.byContinue}</Text>
          <View style={styles.termsAndConditionView}>
            {dottedLine(AppConstant.termsOfSerVices)}
            {dottedLine(AppConstant.privacyPolicy)}
            {dottedLine(AppConstant.contentPolicies)}

            {/* <Text style={styles.termsAndCondition}>
      {AppConstant.termsOfSerVices}
    </Text> */}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;
