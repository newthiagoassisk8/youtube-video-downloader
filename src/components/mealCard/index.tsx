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
  return (
    <MealCardContainer>
      <MealTime>{meal.time}</MealTime>
      <Divider />
      <MealName>{meal.name}</MealName>
      <MealStatus onDiet={meal.onDiet} />
    </MealCardContainer>
  );
}
