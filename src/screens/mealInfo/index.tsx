import { Container } from "@components/container";
import { Content } from "@components/content";
import { Header } from "@components/header";
import {
  DateAndTimeTitle,
  DateAndTimeValue,
  MealDescription,
  MealName,
  MealNameAndDescriptionContainer,
  Tag,
  TagStatus,
  TagText,
} from "./styles";

export function MealInfo({
  navigation,
  route,
}: RootStackScreenProps<"MealInfo">) {
  const { meal } = route.params;

  return (
    <Container containerTheme={meal.onDiet ? "ON_DIET" : "OFF_DIET"}>
      <Header screenName="Refeição" />
      <Content
        keyboardAware={false}
        rounded
        primaryButton={{
          text: "Editar refeição",
          icon: "pencil",
          action: () => {},
        }}
        secondaryButton={{
          text: "Excluir refeição",
          icon: "trash",
          action: () => {},
        }}
      >
        <MealNameAndDescriptionContainer>
          <MealName>{meal.name}</MealName>
          {meal.description !== "" && (
            <MealDescription>{meal.description}</MealDescription>
          )}
        </MealNameAndDescriptionContainer>
        <DateAndTimeTitle>Data e hora</DateAndTimeTitle>
        <DateAndTimeValue>
          {meal.date} às {meal.time}
        </DateAndTimeValue>
        <Tag onDiet={meal.onDiet}>
          <TagStatus onDiet={meal.onDiet} />
          <TagText>{meal.onDiet ? "dentro da dieta" : "fora da dieta"}</TagText>
        </Tag>
      </Content>
    </Container>
  );
}
