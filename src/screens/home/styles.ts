import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

export const HomeHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-basis: content;
`;

export const CreateMealButtonContainer = styled.View`
  margin-bottom: 32px;
`;

export const MealsTitle = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const MealSectionTitle = styled.Text`
  margin-bottom: 8px;
  margin-top: 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const LoadingContainer = styled.View`
  margin-top: 32px;
  align-items: center;
  justify-content: center;
`;
