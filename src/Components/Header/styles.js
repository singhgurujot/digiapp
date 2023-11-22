import { StyleSheet, Platform } from 'react-native';
import appColors from '../../Themes/colors';

export const styles = StyleSheet.create({
  headerView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: Platform.OS === 'android' ? 'center' : 'flex-end',
    padding: 20,
    backgroundColor: appColors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 5,
    height: Platform.OS === 'android' ? 60 : 100,
  },
  drawerAndCircleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawer: {
    resizeMode: 'contain',
    width: 16,
    height: 18,
    marginRight: 20,
    marginLeft: 7,
  },
  blueCircle: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
    marginRight: 8,
    borderRadius: 12,
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'red',
  },
  modalContent: {
    backgroundColor: 'red',
    padding: 16,
    width: '70%',
    height: '50%',
    position: 'absolute',
    top: 100,
  },
  centeredView: {
    width: '94%',
    position: 'absolute',
    top: Platform.OS === 'android' ? 50 : 103,
    right: 0,
    backgroundColor: 'transparent',
  },
  blueHeader: {
    backgroundColor: appColors.appBlueColor,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileIcon: {
    width: 35,
    height: 35,
    marginRight: 19,
  },
  profileName: {
    color: appColors.white,
    fontWeight: '500',
  },
  balance: {
    color: appColors.lightGrey,
    marginTop: 2,
    fontWeight: '400',
    fontSize: 12,
  },
  belowHeaderView: {
    paddingHorizontal: 22,
    // paddingTop: 12,
    // paddingBottom: 21,
    backgroundColor: appColors.white,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          width: 0,
          height: 2,
        },
      },
      android: {
        elevation: 5,
      },
    }),
  },
  textwhiteViewModal: {
    color: appColors.textGrey,
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'red',
  },
});
