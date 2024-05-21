import * as React from 'react';
import LoginScreen from '../screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import {Header} from '../components';
import {useSessionStore} from '../state/session/slice.ts';
import Routes from './routes.ts';
import EasyLevelScreen from '../screens/EasyLevel';
import MediumLevelScreen from "../screens/MediumLevel";

export type RootStackParams = {
  [Routes.LOGIN]: undefined;
  [Routes.HOME]: undefined;
  [Routes.EASY_LEVEL]: undefined;
  [Routes.MEDIUM_LEVEL]: undefined;
  [Routes.DIFFICULT_LEVEL]: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const options = {
  header: (props: any) => <Header {...props} />,
};

export const StackNavigation = () => {
  const {token} = useSessionStore();

  return (
    <Stack.Navigator
      initialRouteName={token ? Routes.HOME : Routes.LOGIN}
      screenOptions={options}>
      <Stack.Screen name={Routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={Routes.HOME} component={HomeScreen} />
      <Stack.Group>
        <Stack.Screen name={Routes.EASY_LEVEL} component={EasyLevelScreen} />
        <Stack.Screen name={Routes.MEDIUM_LEVEL} component={MediumLevelScreen} />
        <Stack.Screen name={Routes.DIFFICULT_LEVEL} component={HomeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
