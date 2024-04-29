import offDietIllustration from "@assets/off-diet-illustration.png";
import onDietIllustration from "@assets/on-diet-illustration.png";
import { Container } from "@components/container";
import { Content } from "@components/content";
import { Image } from "react-native";
import {
  FeedbackContainer,
  FeedbackDescriptionBoldText,
  FeedbackDescriptionText,
  FeedbackTitle,
  GoInitialScreenButton,
} from "./styles";
import { Button } from "@components/button";

export function MealFeedback({
  navigation,
  route,
}: RootStackScreenProps<"MealFeedback">) {
  const { onDiet } = route.params;

  function goToInitialScreen() {
    navigation.popToTop();
  }

  return (
    <FeedbackContainer>
      <FeedbackTitle onDiet={onDiet}>
        {onDiet ? "Continue assim!" : "Que pena!"}
      </FeedbackTitle>
      {onDiet ? (
        <FeedbackDescriptionText>
          Você continua{" "}
          <FeedbackDescriptionBoldText>
            dentro da dieta
          </FeedbackDescriptionBoldText>
          . Muito bem!
        </FeedbackDescriptionText>
      ) : (
        <FeedbackDescriptionText>
          Você{" "}
          <FeedbackDescriptionBoldText>
            saiu da dieta
          </FeedbackDescriptionBoldText>{" "}
          dessa vez, mas continue se esforçando e não desista!
        </FeedbackDescriptionText>
      )}
      <Image source={onDiet ? onDietIllustration : offDietIllustration} />
      <GoInitialScreenButton>
        <Button
          buttonTheme="DARK"
          label="Ir para a página inicial"
          onPress={goToInitialScreen}
        />
      </GoInitialScreenButton>
    </FeedbackContainer>
  );
}
