import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function mealEdit(mealEdited: Meal) {
  try {
    const storedMeals = await mealGetAll();

    const mealEditedIndex = storedMeals.findIndex(
      (meal) => meal.id === mealEdited.id
    );

    storedMeals.splice(mealEditedIndex, 1, mealEdited);

    const newStorage = JSON.stringify(storedMeals);

    AsyncStorage.setItem(MEAL_COLLECTION, newStorage);
  } catch (error) {
    throw error;
  }
}
