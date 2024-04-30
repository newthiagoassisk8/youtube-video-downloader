import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/home";
import { MealCreate } from "@screens/mealCreate";
import { MealFeedback } from "@screens/mealFeedback";
import { MealInfo } from "@screens/mealInfo";
import { Statistics } from "@screens/statistics";

export type RootStackParamList = {
  Home: undefined;
  MealCreate: undefined;
  MealFeedback: {
    onDiet: boolean;
  };
  MealInfo: {
    meal: Meal;
  };
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
      <Screen name="MealFeedback" component={MealFeedback} />
      <Screen name="MealInfo" component={MealInfo} />
      <Screen name="Statistics" component={Statistics} />
    </Navigator>
  );
}
