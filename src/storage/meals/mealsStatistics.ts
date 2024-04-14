import { mealGetAll } from "./mealGetAll";

type MealsGeneralStatistic = {
  bestMealsOnDietSequence: number;
  numberOfMeals: number;
  numberOfOffDietMeals: number;
  numberOfOnDietMeals: number;
};

export async function mealGetOnDietPercentageStatistics() {
  try {
    const storedMeals = await mealGetAll();

    if (!storedMeals.length) {
      return "0%";
    }

    const mealsOnDiet = storedMeals.filter((meal) => meal.onDiet);

    return `${((mealsOnDiet.length / storedMeals.length) * 100).toFixed(2)}%`;
  } catch (error) {
    throw error;
  }
}

function calculateBestOnDietSequence(storedMeals: Meal[]) {
  let bestMealsOnDietSequence = 0;
  let currentSequence = 0;
  storedMeals.forEach((meal) => {
    if (meal.onDiet) {
      currentSequence++;
      if (currentSequence > bestMealsOnDietSequence) {
        bestMealsOnDietSequence = currentSequence;
      }
    } else {
      currentSequence = 0;
    }
  });
  return bestMealsOnDietSequence;
}

export async function mealGetGeneralStatistics(): Promise<MealsGeneralStatistic> {
  try {
    let bestMealsOnDietSequence = 0;
    let numberOfMeals = 0;
    let numberOfOffDietMeals = 0;
    let numberOfOnDietMeals = 0;

    const storedMeals = await mealGetAll();

    if (!storedMeals.length)
      return {
        bestMealsOnDietSequence,
        numberOfMeals,
        numberOfOnDietMeals,
        numberOfOffDietMeals,
      };

    bestMealsOnDietSequence = calculateBestOnDietSequence(storedMeals);
    numberOfMeals = storedMeals.length;
    numberOfOffDietMeals = storedMeals.filter((meal) => !meal.onDiet).length;
    numberOfOnDietMeals = storedMeals.filter((meal) => meal.onDiet).length;

    return {
      bestMealsOnDietSequence,
      numberOfMeals,
      numberOfOffDietMeals,
      numberOfOnDietMeals,
    };
  } catch (error) {
    throw error;
  }
}
