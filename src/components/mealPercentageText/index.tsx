import { View } from "react-native";
import { PercentageSubtitle, PercentageTitle } from "./styles";

export type MealPercentageTextProps = {
  mealsOnDietPercentage: number;
};

export function MealPercentageText({
  mealsOnDietPercentage,
}: MealPercentageTextProps) {
  return (
    <View>
      <PercentageTitle>
        {String(mealsOnDietPercentage).replace(".", ",")}%
      </PercentageTitle>
      <PercentageSubtitle>das refeições dentro da dieta</PercentageSubtitle>
    </View>
  );
}
