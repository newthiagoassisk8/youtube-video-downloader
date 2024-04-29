import { Container } from "@components/container";
import { Content } from "@components/content";
import { Icon } from "@components/icon";
import { MealPercentageText } from "@components/mealPercentageText";
import {
  mealGetGeneralStatistics,
  mealGetOnDietPercentageStatistics,
} from "@utils/mealsStatistics";
import { useTheme } from "styled-components/native";
import {
  ContentTitle,
  GoBackButton,
  PercentageContainer,
  StatisticDescriptionText,
  StatisticOnOrOffDietCard,
  StatisticOnOrOffDietCardContainer,
  StatisticSimpleCard,
  StatisticValueText,
} from "./styles";

export function Statistics({
  route,
  navigation,
}: RootStackScreenProps<"Statistics">) {
  const { meals } = route.params;
  const mealsOnDietPercentage = mealGetOnDietPercentageStatistics(meals);
  const {
    bestMealsOnDietSequence,
    numberOfMeals,
    numberOfOffDietMeals,
    numberOfOnDietMeals,
  } = mealGetGeneralStatistics(meals);
  const successDiet = mealsOnDietPercentage >= 50.0;
  const theme = useTheme();

  function goBack() {
    navigation.goBack();
  }

  return (
    <Container containerTheme={successDiet ? "ON_DIET" : "OFF_DIET"}>
      <PercentageContainer>
        <MealPercentageText mealsOnDietPercentage={mealsOnDietPercentage} />
        <GoBackButton onPress={goBack}>
          <Icon
            name="arrow-left"
            color={
              successDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
            }
            size={24}
          />
        </GoBackButton>
      </PercentageContainer>
      <Content rounded>
        <ContentTitle>Estatísticas gerais</ContentTitle>
        <StatisticSimpleCard>
          <StatisticValueText>{bestMealsOnDietSequence}</StatisticValueText>
          <StatisticDescriptionText>
            melhor sequência de pratos dentro da dieta
          </StatisticDescriptionText>
        </StatisticSimpleCard>
        <StatisticSimpleCard>
          <StatisticValueText>{numberOfMeals}</StatisticValueText>
          <StatisticDescriptionText>
            refeições registradas
          </StatisticDescriptionText>
        </StatisticSimpleCard>
        <StatisticOnOrOffDietCardContainer>
          <StatisticOnOrOffDietCard cardTheme="ON_DIET">
            <StatisticValueText>{numberOfOnDietMeals}</StatisticValueText>
            <StatisticDescriptionText>
              refeições dentro da dieta
            </StatisticDescriptionText>
          </StatisticOnOrOffDietCard>
          <StatisticOnOrOffDietCard cardTheme="OFF_DIET">
            <StatisticValueText>{numberOfOffDietMeals}</StatisticValueText>
            <StatisticDescriptionText>
              refeições fora da dieta
            </StatisticDescriptionText>
          </StatisticOnOrOffDietCard>
        </StatisticOnOrOffDietCardContainer>
      </Content>
    </Container>
  );
}
