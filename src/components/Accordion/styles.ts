import {Platform, StyleSheet} from 'react-native';
//import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 52,
    marginVertical: 8,
    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        shadowColor: '#6355A1',
      },
      android: {
        elevation: 8,
        shadowOffset: {
          width: 0,
          height: 4,
        },
      },
    }),
  },
  item: {
    margin: -8,
  },
  contentTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 20,
    alignItems: 'center',
  },
  title: {
    marginHorizontal: 8,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
