import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { randomUUID } from "expo-crypto";
import { mealGetAll } from "./mealGetAll";

type MealCreateParams = Omit<Meal, "id">;

export async function mealCreate(params: MealCreateParams) {
  try {
    const storedMeals = await mealGetAll();
    const newMeal: Meal = {
      id: randomUUID(),
      ...params,
    };
    const newStorage = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, newStorage);
  } catch (error) {
    throw error;
  }
}
