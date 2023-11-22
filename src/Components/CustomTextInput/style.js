import {Dimensions, StyleSheet} from 'react-native';
import appColors from '../../Themes/colors';
const {width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  mainView: {
    backgroundColor: appColors.white,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 13,
    marginTop: 16,
  },
  icon1: {
    width: 17,
    height: 21,
    resizeMode: 'contain',
    marginRight: 18,
  },
  icon2: {
    width: 25,
    height: 21,
    resizeMode: 'contain',
  },
  icon3: {
    width: 30,
    height: 23,
    resizeMode: 'contain',
  },
  textInput: {
    flex: 1,
    color: appColors.grey,
  },

  textInputDescription: {
    height: 157,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    color: appColors.grey,
    borderColor: appColors.descriptionBorder,
    borderRadius: 4,
    textAlignVertical: 'top',
  },
  searchBarMainView: {
    backgroundColor: appColors.white,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 25.5,
    height: 46,
  },
  textInputSearchBar: {
    flex: 1,
    color: appColors.grey,
    marginLeft: 10,
  },
  search: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginRight: 10,
  },
});
