import logo from "@assets/logo.png";
import userPhoto from "@assets/user-photo.png";
import { Button } from "@components/button";
import { Container } from "@components/container";
import { Content } from "@components/content";
import { MealPercentageCard } from "@components/mealPercentageCard";
import { useFocusEffect } from "@react-navigation/native";
import { mealGetAll } from "@storage/meals/mealGetAll";
import { mealGetOnDietPercentageStatistics } from "@utils/mealsStatistics";
import { useCallback, useState } from "react";
import { Image } from "react-native";
import { HomeHeader, MealsTitle } from "./styles";

export function Home({ navigation }: RootStackScreenProps<"Home">) {
  const [meals, setMeals] = useState<Meal[]>([]);

  async function getMeals() {
    const storedMeals = await mealGetAll();
    setMeals(storedMeals);
  }

  function goToStatistics() {
    navigation.navigate("Statistics", { meals });
  }

  useFocusEffect(
    useCallback(() => {
      getMeals();
    }, [])
  );

  return (
    <Container>
      <Content>
        <HomeHeader>
          <Image source={logo} />
          <Image source={userPhoto} />
        </HomeHeader>
        <MealPercentageCard
          mealsOnDietPercentage={mealGetOnDietPercentageStatistics(meals)}
          onPress={goToStatistics}
        />
        <MealsTitle>Refeições</MealsTitle>
        <Button
          buttonTheme="DARK"
          label="Nova refeição"
          icon={{ name: "plus", size: 18 }}
        />
      </Content>
    </Container>
  );
}
