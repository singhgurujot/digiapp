// import {Dimensions, Platform, StyleSheet} from 'react-native';
// import appColors from '../../Themes/colors';
// const height = Dimensions.get('screen').height;
// const width = Dimensions.get('screen').width;
// export const styles = StyleSheet.create({
//   button: {
//     backgroundColor: appColors.appBlueColor,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     width: width * 0.34,
//     borderRadius: 5,
//   },
//   all: {
//     fontSize: 14,
//     fontWeight: '400',
//     color: appColors.white,
//   },
//   icon: {
//     width: 10,
//     height: 22,
//     resizeMode: 'center',
//   },
//   item: {
//     backgroundColor: appColors.white,
//     padding: 10,
//     borderWidth: Platform.OS == 'android' ? 1.5 : 1,
//     borderColor: appColors.appBlueColor,
//     width: width * 0.34,
//   },
//   contentContainerStyle: {
//     backgroundColor: 'red',
//     borderBottomLeftRadius: 5,
//     borderBottomRightRadius: 5,
//     width: '80%',
//   },
//   itemData: {
//     fontSize: 14,
//     fontWeight: '400',
//     color: appColors.appBlueColor,
//   },
//   centeredView: {
//     width: '100%',
//     top: Platform.OS === 'android' ? 107 : 160,
//     right: 1,
//   },
//   flatList: {
//     height: 155,
//     width: '45%',
//     borderRadius: 10,
//   },
// });

import {StyleSheet, Platform} from 'react-native';
import Colors from '../../Themes/colors';
import {fontFamily, fontSize, fontWeight} from '../../Themes/Fonts';

const styles = StyleSheet.create({
  dropDownBoxStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgb(229,229,229)',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    zIndex: -1111,
  },
  dropDownPlaceHolderStyle: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.grey,
  },
  dropDownSelectedValueStyle: {
    paddingTop: 10,
    fontSize: 15,
    fontWeight: '600',
  },
  labelStyle: {
    fontWeight: fontWeight.FW500,
    fontSize: fontSize.F14,
    color: Colors.black,
    fontFamily: fontFamily.AvenirRegular,
  },
  icon: {
    width: 12,
    height: 24,
    resizeMode: 'center',
  },
  downIcon: {
    width: 12,
    height: 24,
    resizeMode: 'center',
    transform: [{rotate: '180deg'}],
  },
});

export default styles;
