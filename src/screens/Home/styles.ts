import {StyleSheet} from 'react-native';
import colors from '../../theme/base/colors.ts';

export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.brandGreen,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 25,
    backgroundColor: colors.brandSecondary,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 60,
  },
});
