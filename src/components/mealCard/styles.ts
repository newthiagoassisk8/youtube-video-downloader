import { calculateSizeRelativeToFixedScreenWidth } from "@utils/dimensions";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type MealStatusStylesProps = {
  onDiet: boolean;
};

export const MealCardContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  padding: 14px 16px 14px 12px;
  margin-bottom: 8px;
`;

export const MealTime = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_XS}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Divider = styled.View`
  margin: 0 12px;
  height: 14px;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const MealName = styled.Text`
  width: ${calculateSizeRelativeToFixedScreenWidth(217)}px;
  margin-right: 16px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_XS}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const MealStatus = styled.View<MealStatusStylesProps>`
  height: 14px;
  width: 14px;
  border-radius: 50px;
  background-color: ${({ onDiet, theme }) =>
    onDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
