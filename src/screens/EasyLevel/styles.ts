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
  item: {
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#1380d9',
    backgroundColor: '#58ec03',
    borderRadius: 10,
    margin: 8,
    padding: 2,
    height: 165,
    width: 155,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10, // Bordes redondeados para las banderas
    resizeMode: 'stretch',
    borderWidth: 2,
  },
  imageHidden: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
});
