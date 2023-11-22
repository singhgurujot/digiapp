import {StyleSheet} from 'react-native';
import appColors from '../../Themes/colors';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.buttonBackgroundColor,
    padding: 20,
    borderRadius: 8,
  },
  title: {
    color: appColors.white,
    fontWeight: '600',
    fontSize: 16,
  },
});
