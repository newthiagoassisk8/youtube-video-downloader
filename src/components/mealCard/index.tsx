import { useNavigation } from "@react-navigation/native";
import {
  Divider,
  MealCardContainer,
  MealName,
  MealStatus,
  MealTime,
} from "./styles";

type MealCardProps = {
  meal: Meal;
};

export function MealCard({ meal }: MealCardProps) {
  const navigation = useNavigation();

  function goToMealInfo() {
    navigation.navigate("MealInfo", { meal });
  }

  return (
    <MealCardContainer onPress={goToMealInfo}>
      <MealTime>{meal.time}</MealTime>
      <Divider></Divider>
      <MealName>{meal.name}</MealName>
      <MealStatus onDiet={meal.onDiet} />
    </MealCardContainer>
  );
}
