import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const ModalContainer = styled.View`
  width: ${Dimensions.get("screen").width}px;
  height: ${Dimensions.get("screen").height}px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.View`
  width: ${Dimensions.get("screen").width - 48}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  padding: 40px 24px 24px;
  align-items: center;
`;
