import {Dimensions, StyleSheet} from 'react-native';
import appColors from '../../Themes/colors';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: appColors.appBackgroundColor,
    flex: 1,
  },
  headerBelowView: {
    padding: 20,
  },
  sensorsText: {
    color: appColors.appBlueColor,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 17,
    marginLeft: 5,
  },
  container: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
    backgroundColor: appColors.appBlueColor,
    margin: 6,
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 4,
  },
  dataAndValue: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 9,
  },
  data: {
    fontSize: 14,
    fontWeight: '700',
    color: appColors.gold,
    marginRight: 8,
  },
  value: {
    fontSize: 14,
    color: appColors.white,
    width: '60%',
  },
  switchButton: {
    backgroundColor: 'red',
  },
  switchContainer: {
    width: 55,
    height: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  switchOn: {
    backgroundColor: appColors.white,
  },
  switchOff: {
    backgroundColor: appColors.white,
  },
  thumb: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: appColors.red,
  },
  thumbOn: {
    backgroundColor: appColors.green,
    transform: [{translateX: 33}],
  },
  thumbOff: {
    backgroundColor: appColors.red,
    transform: [{translateX: 0}],
  },
  switchAndText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  onAndOff: {
    fontSize: 14,
    fontWeight: '700',
    color: appColors.gold,
    marginRight: 8,
  },
  centeredView: {
    width: width,
    height: height,
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 22.5,
    backgroundColor: appColors.lightWhite,
  },
  blueView: {
    backgroundColor: appColors.appBlueColor,
    width: '100%',
    borderRadius: 6,
  },
  confirmation: {
    fontSize: 16,
    fontWeight: '500',
    color: appColors.yellow,
    marginVertical: 18,
    marginLeft: 18,
  },
  lineView: {
    width: '100%',
    height: 1.5,
  },
  areYouSure: {
    marginVertical: 18,
    marginLeft: 18,
    fontSize: 14,
    fontWeight: '500',
    color: appColors.white,
  },
  heightView: {
    width: 1.5,
    height: 56,
    backgroundColor: appColors.lightGreen,
  },
  yesAndNoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 67,
  },
  yesAndNo: {
    fontSize: 14,
    fontWeight: '500',
    color: appColors.white,
  },
});
