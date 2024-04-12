import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/home";

export type RootStackParamList = {
  Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
