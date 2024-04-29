import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/home";
import { MealCreate } from "@screens/mealCreate";
import { Statistics } from "@screens/statistics";

export type RootStackParamList = {
  Home: undefined;
  MealCreate: undefined;
  Statistics: {
    meals: Meal[];
  };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="MealCreate" component={MealCreate} />
      <Screen name="Statistics" component={Statistics} />
    </Navigator>
  );
}
