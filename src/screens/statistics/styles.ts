import { calculateSizeRelativeToFixedScreenWidth } from "@utils/dimensions";
import { TouchableOpacity } from "react-native";
import styled, { css, DefaultTheme } from "styled-components/native";
import Constants from "expo-constants";

type CardTheme = "ON_DIET" | "OFF_DIET";

type OnOrOffDietStatisticCardStyle = {
  cardTheme: CardTheme;
};

function getCardBackgroundColor(cardTheme: CardTheme, theme: DefaultTheme) {
  switch (cardTheme) {
    case "OFF_DIET":
      return theme.COLORS.RED_LIGHT;
    default:
      return theme.COLORS.GREEN_LIGHT;
  }
}

export const PercentageContainer = styled.View`
  padding-top: 40px;
  padding-bottom: 32px;
  position: relative;
`;

export const GoBackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const ContentTitle = styled.Text`
  text-align: center;
  margin-bottom: 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const StatisticValueText = styled.Text`
  text-align: center;
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const StatisticDescriptionText = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const StatisticSimpleCard = styled.View`
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const StatisticOnOrOffDietCardContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const StatisticOnOrOffDietCard = styled.View<OnOrOffDietStatisticCardStyle>`
  padding: 16px;
  border-radius: 8px;
  width: ${calculateSizeRelativeToFixedScreenWidth(157.5)}px;
  margin-right: ${({ cardTheme }) => (cardTheme === "ON_DIET" ? 12 : 0)}px;
  background-color: ${({ cardTheme, theme }) =>
    getCardBackgroundColor(cardTheme, theme)};
`;
