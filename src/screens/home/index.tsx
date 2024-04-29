import logo from "@assets/logo.png";
import userPhoto from "@assets/user-photo.png";
import { Button } from "@components/button";
import { Container } from "@components/container";
import { Content } from "@components/content";
import { MealCard } from "@components/mealCard";
import { MealPercentageCard } from "@components/mealPercentageCard";
import { useFocusEffect } from "@react-navigation/native";
import { mealGetAll } from "@storage/meals/mealGetAll";
import { mealGetOnDietPercentageStatistics } from "@utils/mealsStatistics";
import { changeDateFormatTo } from "@utils/timestamp";
import { useCallback, useState } from "react";
import { ActivityIndicator, Image, SectionList } from "react-native";
import {
  CreateMealButtonContainer,
  HomeHeader,
  LoadingContainer,
  MealSectionTitle,
  MealsTitle,
} from "./styles";

type MealSectionData = {
  title: string;
  data: Meal[];
};

export function Home({ navigation }: RootStackScreenProps<"Home">) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  function getMeals() {
    setLoading(true);
    setTimeout(async () => {
      const storedMeals = await mealGetAll();
      setMeals(storedMeals);
      setLoading(false);
    }, 2000);
  }

  function goToStatistics() {
    navigation.navigate("Statistics", { meals });
  }

  function goToMealCreate() {
    navigation.navigate("MealCreate");
  }

  function renderMeals() {
    const sectionsData: MealSectionData[] = [];

    meals.forEach((meal) => {
      const formattedDate = changeDateFormatTo(meal.date, "DD.MM.YY");
      const sectionIndex = sectionsData.findIndex(
        (section) => section.title === formattedDate
      );
      if (sectionIndex !== -1) {
        sectionsData[sectionIndex].data.push(meal);
      } else {
        sectionsData.push({ title: formattedDate, data: [meal] });
      }
    });

    sectionsData.sort((section1, section2) => {
      const [day1, month1, year1] = section1.title.split(".");
      const [day2, month2, year2] = section2.title.split(".");

      const formattedDate1 = `${year1}${month1}${day1}`;
      const formattedDate2 = `${year2}${month2}${day2}`;

      if (formattedDate1 > formattedDate2) {
        return -1;
      } else if (formattedDate1 < formattedDate2) {
        return 1;
      } else {
        return 0;
      }
    });

    sectionsData.forEach((mealSection) => {
      mealSection.data.sort((meal1, meal2) => {
        const [hour1, minute1] = meal1.time.split(":");
        const [hour2, minute2] = meal2.time.split(":");

        const totalMinutes1 = parseInt(hour1) * 60 + parseInt(minute1);
        const totalMinutes2 = parseInt(hour2) * 60 + parseInt(minute2);

        if (totalMinutes1 > totalMinutes2) {
          return -1;
        } else if (totalMinutes1 < totalMinutes2) {
          return 1;
        } else {
          return 0;
        }
      });
    });

    return (
      <SectionList
        sections={sectionsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealCard meal={item} />}
        renderSectionHeader={({ section }) => (
          <MealSectionTitle>{section.title}</MealSectionTitle>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: -24,
        }}
        stickySectionHeadersEnabled={false}
      />
    );
  }

  useFocusEffect(
    useCallback(() => {
      getMeals();
    }, [])
  );

  return (
    <Container>
      <Content keyboardAware={false}>
        <HomeHeader>
          <Image source={logo} />
          <Image source={userPhoto} />
        </HomeHeader>
        {loading ? (
          <LoadingContainer>
            <ActivityIndicator />
          </LoadingContainer>
        ) : (
          <>
            <MealPercentageCard
              mealsOnDietPercentage={mealGetOnDietPercentageStatistics(meals)}
              onPress={goToStatistics}
            />
            <MealsTitle>Refeições</MealsTitle>
            <CreateMealButtonContainer>
              <Button
                buttonTheme="DARK"
                label="Nova refeição"
                icon={{ name: "plus", size: 18 }}
                onPress={goToMealCreate}
              />
            </CreateMealButtonContainer>
            {renderMeals()}
          </>
        )}
      </Content>
    </Container>
  );
}
