import { Container } from "@components/container";
import { Content } from "@components/content";
import { Header } from "@components/header";
import { Input } from "@components/input";
import { Select } from "@components/select";
import { mealCreate } from "@storage/meals/mealCreate";
import { maskDate, maskHour } from "@utils/masks";
import { getCurrentTime, getTodayDateFromFormat } from "@utils/timestamp";
import { useState } from "react";
import { Option } from "../../components/select";
import { DateAndHourInputContainer, OnDietQuestionText } from "./styles";

export function MealCreate({ navigation }: RootStackScreenProps<"MealCreate">) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(getTodayDateFromFormat("DD/MM/YYYY"));
  const [hour, setHour] = useState(getCurrentTime());
  const [onDiet, setOnDiet] = useState(true);

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

  async function createMeal() {
    await mealCreate({ date, description, name, time: hour, onDiet });
    navigation.navigate("MealFeedback", { onDiet });
  }

  return (
    <Container containerTheme="NEUTRAL">
      <Header screenName="Nova refeição" />
      <Content
        rounded
        primaryButton={{ text: "Cadastrar refeição", action: createMeal }}
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
        <Select onSelectOption={handleOnDietSelectOption} />
      </Content>
    </Container>
  );
}
