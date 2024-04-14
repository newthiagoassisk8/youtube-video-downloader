type MealsGeneralStatistic = {
  bestMealsOnDietSequence: number;
  numberOfMeals: number;
  numberOfOffDietMeals: number;
  numberOfOnDietMeals: number;
};

function mealGetOnDietPercentageStatistics(meals: Meal[]): number {
  if (!meals.length) {
    return 0;
  }

  const mealsOnDiet = meals.filter((meal) => meal.onDiet);

  return Number(((mealsOnDiet.length / meals.length) * 100).toFixed(2));
}

function calculateBestOnDietSequence(meals: Meal[]) {
  let bestMealsOnDietSequence = 0;
  let currentSequence = 0;
  meals.forEach((meal) => {
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

function mealGetGeneralStatistics(meals: Meal[]): MealsGeneralStatistic {
  let bestMealsOnDietSequence = 0;
  let numberOfMeals = 0;
  let numberOfOffDietMeals = 0;
  let numberOfOnDietMeals = 0;

  if (!meals.length)
    return {
      bestMealsOnDietSequence,
      numberOfMeals,
      numberOfOnDietMeals,
      numberOfOffDietMeals,
    };

  bestMealsOnDietSequence = calculateBestOnDietSequence(meals);
  numberOfMeals = meals.length;
  numberOfOffDietMeals = meals.filter((meal) => !meal.onDiet).length;
  numberOfOnDietMeals = meals.filter((meal) => meal.onDiet).length;

  return {
    bestMealsOnDietSequence,
    numberOfMeals,
    numberOfOffDietMeals,
    numberOfOnDietMeals,
  };
}

export { mealGetGeneralStatistics, mealGetOnDietPercentageStatistics };
