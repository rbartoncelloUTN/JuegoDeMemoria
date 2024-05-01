import theme from '../../theme/base';
import colors from '../../theme/base/colors.ts';

export const createStyles = () => ({
  content: {
    flex: 1,
    minHeight: 240,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 10,
    width: '50%',
  },
  button: {
    borderRadius: 10,
    backgroundColor: colors.brandPrimary,
    height: '100%',
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonAutoComplete: {
    backgroundColor: colors.brandSecondary,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: '100',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: theme.spacing.marginVertical * 2,
  },
});
