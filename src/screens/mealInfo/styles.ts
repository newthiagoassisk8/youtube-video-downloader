import { calculateSizeRelativeToFixedScreenWidth } from "@utils/dimensions";
import styled, { css } from "styled-components/native";

type TagStyleProps = {
  onDiet: boolean;
};

export const MealNameAndDescriptionContainer = styled.View`
  margin-bottom: 24px;
`;

export const MealName = styled.Text`
  margin-bottom: 8px;
  font-size: 20px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const DateAndTimeTitle = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const DateAndTimeValue = styled.Text`
  margin-bottom: 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Tag = styled.View<TagStyleProps>`
  border-radius: 1000px;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  width: ${({ onDiet }) => (onDiet ? 144 : 127)}px;
`;

export const TagStatus = styled.View<TagStyleProps>`
  border-radius: 1000px;
  width: 8px;
  height: 8px;
  margin-right: 8px;
  background-color: ${({ onDiet, theme }) =>
    onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const TagText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const DeleteMealModalQuestion = styled.Text`
  text-align: center;
  margin-bottom: 12px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const DeleteMealModalButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const DeleteModalButtonContainer = styled.View`
  width: ${calculateSizeRelativeToFixedScreenWidth(135)}px;
`;
