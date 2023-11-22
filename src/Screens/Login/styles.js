import {Dimensions, StyleSheet, Platform} from 'react-native';
import appColors from '../../Themes/colors';
const {height, width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: appColors.appBlueColor,
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    marginTop: Platform.OS === 'android' ? height * 0.05 : height * 0.08,
    alignSelf: 'center',
  },
  health: {
    color: appColors.darkGold,
    fontSize: 42,
    fontWeight: '500',
  },
  care: {
    color: appColors.white,
    fontSize: 42,
    fontWeight: '500',
  },
  solutions: {
    color: appColors.white,
    fontSize: 42,
    fontWeight: '500',
    marginTop: 4,
    alignSelf: 'center',
  },
  line: {
    width: width * 0.25,
    height: 2,
    backgroundColor: appColors.appLightBlueColor,
  },
  lineAndLoginView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.13,
  },
  loginAccount: {
    marginHorizontal: 12,
    color: appColors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  inputs: {
    marginTop: height * 0.08,
  },
  checkButton: {
    borderRadius: 3,
    width: 18,
    height: 18,
    backgroundColor: appColors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkIcon: {
    width: 18,
    height: 25,
    resizeMode: 'contain',
  },
  rememberMeView: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rememberMeText: {
    color: appColors.white,
    fontWeight: '400',
    fontSize: 14,
  },
  buttonwrappedView: {
    marginTop: 21,
  },
  belowTextView: {
    position: 'absolute',
    bottom: 45,
    alignSelf: 'center',
    alignItems: 'center',
  },
  byContinue: {
    color: appColors.white,
    fontSize: 12,
    alignItems: 'center',
    fontWeight: '500',
  },

  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    marginRight: 10,
  },
  termsAndConditionView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  privacyPolicy: {
    // marginHorizontal: 15,
    fontSize: 11,
    color: appColors.white,
    fontWeight: '400',
  },
  termsAndCondition: {
    fontSize: 11,
    color: appColors.white,
    fontWeight: '400',
  },
  dottedMainView: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  itmes: {
    alignItems: 'center',
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderColor: appColors.white,
    marginHorizontal: 10,
  },
});
