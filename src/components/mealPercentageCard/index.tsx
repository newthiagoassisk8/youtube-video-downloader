import { Icon } from "@components/icon";
import {
  MealPercentageText,
  MealPercentageTextProps,
} from "@components/mealPercentageText";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { CardAction, CardContainer } from "./styles";

export function MealPercentageCard({
  mealsOnDietPercentage,
  ...rest
}: MealPercentageTextProps & TouchableOpacityProps) {
  const theme = useTheme();
  const successDiet = mealsOnDietPercentage >= 50.0;

  return (
    <CardContainer successDiet={successDiet}>
      <MealPercentageText mealsOnDietPercentage={mealsOnDietPercentage} />
      <CardAction {...rest}>
        <Icon
          name="arrow-up-right"
          color={successDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}
        />
      </CardAction>
    </CardContainer>
  );
}
