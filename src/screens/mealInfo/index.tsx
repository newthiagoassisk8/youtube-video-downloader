import { Button } from "@components/button";
import { Container } from "@components/container";
import { Content } from "@components/content";
import { Header } from "@components/header";
import { Modal, ModalRef } from "@components/modal";
import { mealRemoveById } from "@storage/meals/mealRemoveById";
import { useRef } from "react";
import {
  DateAndTimeTitle,
  DateAndTimeValue,
  DeleteMealModalButtons,
  DeleteMealModalQuestion,
  DeleteModalButtonContainer,
  MealDescription,
  MealName,
  MealNameAndDescriptionContainer,
  Tag,
  TagStatus,
  TagText,
} from "./styles";

export function MealInfo({
  navigation,
  route,
}: RootStackScreenProps<"MealInfo">) {
  const { meal } = route.params;

  const modalRef = useRef<ModalRef>(null);

  function goToMealEdit() {
    navigation.navigate("MealEdit", { meal });
  }

  function showDeleteMealModal() {
    modalRef.current?.showModal();
  }

  function hideDeleteMealModal() {
    modalRef.current?.hideModal();
  }

  async function deleteMeal() {
    await mealRemoveById(meal.id);
    navigation.popToTop();
  }

  return (
    <Container containerTheme={meal.onDiet ? "ON_DIET" : "OFF_DIET"}>
      <Header screenName="Refeição" />
      <Content
        keyboardAware={false}
        rounded
        primaryButton={{
          text: "Editar refeição",
          icon: "pencil",
          action: goToMealEdit,
        }}
        secondaryButton={{
          text: "Excluir refeição",
          icon: "trash",
          action: showDeleteMealModal,
        }}
      >
        <MealNameAndDescriptionContainer>
          <MealName>{meal.name}</MealName>
          {meal.description !== "" && (
            <MealDescription>{meal.description}</MealDescription>
          )}
        </MealNameAndDescriptionContainer>
        <DateAndTimeTitle>Data e hora</DateAndTimeTitle>
        <DateAndTimeValue>
          {meal.date} às {meal.time}
        </DateAndTimeValue>
        <Tag onDiet={meal.onDiet}>
          <TagStatus onDiet={meal.onDiet} />
          <TagText>{meal.onDiet ? "dentro da dieta" : "fora da dieta"}</TagText>
        </Tag>
      </Content>
      <Modal ref={modalRef}>
        <DeleteMealModalQuestion>
          Deseja realmente excluir o registro da refeição?
        </DeleteMealModalQuestion>
        <DeleteMealModalButtons>
          <DeleteModalButtonContainer>
            <Button
              buttonTheme="LIGHT"
              label="Cancelar"
              onPress={hideDeleteMealModal}
            />
          </DeleteModalButtonContainer>
          <DeleteModalButtonContainer>
            <Button
              buttonTheme="DARK"
              label="Sim, excluir"
              onPress={deleteMeal}
            />
          </DeleteModalButtonContainer>
        </DeleteMealModalButtons>
      </Modal>
    </Container>
  );
}
