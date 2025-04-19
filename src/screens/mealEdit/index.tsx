
import { maskDate, maskHour } from "@utils/masks";
import { useState } from "react";
import { Text } from "react-native";

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





  return (
    <Text> reree</Text>
  );
}
