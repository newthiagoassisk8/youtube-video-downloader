import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealRemoveById(idRemoved: string) {
  try {
    const storedMeals = await mealGetAll();
    const newMeals = storedMeals.filter((meal) => meal.id !== idRemoved);
    const newStorage = JSON.stringify(newMeals);

    AsyncStorage.setItem(MEAL_COLLECTION, newStorage);
  } catch (error) {
    throw error;
  }
}
