import { Container } from "@components/container";
import { Content } from "@components/content";
import { Header } from "@components/header";
import { Input } from "@components/input";
import { Select } from "@components/select";
import { mealEdit } from "@storage/meals/mealEdit";
import { maskDate, maskHour } from "@utils/masks";
import { useState } from "react";
import { Option } from "../../components/select";
import {
  DateAndHourInputContainer,
  OnDietQuestionText,
} from "../mealCreate/styles";

export function MealEdit({
  navigation,
  route,
}: RootStackScreenProps<"MealEdit">) {
  const { meal } = route.params;

  const [name, setName] = useState(meal.name);
  const [description, setDescription] = useState(meal.description || "");
  const [date, setDate] = useState(meal.date);
  const [hour, setHour] = useState(meal.time);
  const [onDiet, setOnDiet] = useState(meal.onDiet);

  function handleChangeDate(date: string) {
    const maskedDate = maskDate(date);
    setDate(maskedDate);
  }

  function handleChangeHour(hour: string) {
    const maskedHour = maskHour(hour);
    setHour(maskedHour);
  }

  function handleOnDietSelectOption(option: Option) {
    if (option === "NO-OPTION") setOnDiet(false);
    else setOnDiet(true);
  }

  async function editMeal() {
    await mealEdit({
      id: meal.id,
      date,
      description,
      name,
      time: hour,
      onDiet,
    });
    navigation.navigate("MealFeedback", { onDiet });
  }

  return (
    <Container containerTheme="NEUTRAL">
      <Header screenName="Editar refeição" />
      <Content
        rounded
        primaryButton={{ text: "Salvar alterações", action: editMeal }}
      >
        <Input label="Nome" value={name} onChangeText={setName} />
        <Input
          label="Descrição"
          size="large"
          value={description}
          onChangeText={setDescription}
        />
        <DateAndHourInputContainer>
          <Input
            label="Data"
            size="small"
            value={date}
            keyboardType="number-pad"
            onChangeText={handleChangeDate}
            maxLength={10}
          />
          <Input
            label="Hora"
            size="small"
            value={hour}
            keyboardType="number-pad"
            onChangeText={handleChangeHour}
            maxLength={5}
          />
        </DateAndHourInputContainer>
        <OnDietQuestionText>Está dentro da dieta?</OnDietQuestionText>
        <Select
          onSelectOption={handleOnDietSelectOption}
          defaultOption={meal.onDiet ? "YES-OPTION" : "NO-OPTION"}
        />
      </Content>
    </Container>
  );
}
