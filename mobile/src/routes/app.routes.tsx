import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/home';
import { Game } from '../screens/game';
import { SignIn } from '../screens/signin';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="signin"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="game"
        component={Game}
        options={{ headerShown: false }}
      />

    </Navigator>
  )
}