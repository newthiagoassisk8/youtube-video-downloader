import { Dimensions } from "react-native";
import { calculateSizeRelativeToFixedScreenWidth } from "@utils/dimensions";
import styled, { css } from "styled-components/native";
import theme from "@theme/index";

type FeedbackTitleProps = {
  onDiet: boolean;
};

export const FeedbackContainer = styled.View`
  width: "100%";
  height: ${Dimensions.get("window").height}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const FeedbackTitle = styled.Text<FeedbackTitleProps>`
  margin-bottom: 8px;
  text-align: center;
  ${({ onDiet, theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    color: ${onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

export const FeedbackDescriptionText = styled.Text`
  text-align: center;
  margin-bottom: 12px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const FeedbackDescriptionBoldText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const GoInitialScreenButton = styled.View`
  margin-top: 32px;
  width: ${calculateSizeRelativeToFixedScreenWidth(191)}px;
`;
