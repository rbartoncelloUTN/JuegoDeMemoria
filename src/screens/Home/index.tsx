import type {FC} from 'react';
import type {HomeScreenProps} from './types';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles.ts';
import {Text} from '@rneui/themed';
import UseNavigation from '../../hooks/useNavigation.ts';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/StackNavigation.tsx';
import Routes from '../../navigation/routes.ts';
const HomeScreen: FC<HomeScreenProps> = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={styles.content}>
      <TouchableOpacity
        onPress={() => navigate(Routes.EASY_LEVEL)}
        style={styles.button}>
        <Text style={styles.text}>Facil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate(Routes.MEDIUM_LEVEL)}
        style={styles.button}>
        <Text style={styles.text}>Medio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate(Routes.DIFFICULT_LEVEL)}
        style={styles.button}>
        <Text style={styles.text}>Dificil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
