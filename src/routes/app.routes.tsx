import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/home";
import { Statistics } from "@screens/statistics";

export type RootStackParamList = {
  Home: undefined;
  Statistics: {
    meals: Meal[];
  };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Statistics" component={Statistics} />
    </Navigator>
  );
}
