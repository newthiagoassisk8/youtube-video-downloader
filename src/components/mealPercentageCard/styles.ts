import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type CardContainerStyleProps = {
  successDiet: boolean;
};

export const CardContainer = styled.View<CardContainerStyleProps>`
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  border-radius: 8px;
  position: relative;
  background-color: ${({ successDiet, theme }) =>
    successDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  margin-bottom: 40px;
`;

export const CardAction = styled(TouchableOpacity)`
  position: absolute;
  top: 8px;
  right: 8px;
`;
