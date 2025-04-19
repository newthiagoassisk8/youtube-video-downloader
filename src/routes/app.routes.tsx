import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/home";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MealEdit } from "@screens/mealEdit";


export type RootStackParamList = {
  Home: undefined;
  MealCreate: undefined;
  MealEdit: {
    meal: Meal;
  };
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

const Drawer = createDrawerNavigator();

export function AppRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="MealEdit" component={MealEdit} />
    </Navigator>
  );
}
