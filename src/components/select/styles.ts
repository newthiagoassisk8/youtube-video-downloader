import {
  calculateSizeRelativeToFixedScreenHeight,
  calculateSizeRelativeToFixedScreenWidth,
} from "@utils/dimensions";
import { TouchableOpacity, View } from "react-native";
import styled, { css, DefaultTheme } from "styled-components/native";
import { Option } from "./index";

type StatusIndicatorStylesProps = {
  option: Option;
};

type SelectOptionStyleProps = {
  selected: boolean;
} & StatusIndicatorStylesProps;

function getColors(option: Option, selected: boolean, theme: DefaultTheme) {
  let lightColor = theme.COLORS.GRAY_600;
  let darkColor = theme.COLORS.GRAY_600;

  switch (option) {
    case "NO-OPTION":
      if (selected) {
        lightColor = theme.COLORS.RED_LIGHT;
        darkColor = theme.COLORS.RED_DARK;
      }
      break;
    default:
      if (selected) {
        lightColor = theme.COLORS.GREEN_LIGHT;
        darkColor = theme.COLORS.GREEN_DARK;
      }
      break;
  }

  return {
    lightColor,
    darkColor,
  };
}

export const SelectContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const SelectOption = styled(TouchableOpacity)<SelectOptionStyleProps>`
  flex-direction: row;
  width: ${calculateSizeRelativeToFixedScreenWidth(159.5)}px;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  ${({ option, selected, theme }) => css`
    margin-right: ${option === "YES-OPTION" ? 12 : 0}px;
    background-color: ${getColors(option, selected, theme).lightColor};
    border-color: ${getColors(option, selected, theme).darkColor};
    border-width: ${selected ? 1 : 0}px;
  `};
`;

export const SelectOptionLabel = styled.Text`
  margin-left: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
  `}
`;

export const StatusIndicator = styled(View)<StatusIndicatorStylesProps>`
  width: ${calculateSizeRelativeToFixedScreenWidth(8)}px;
  height: ${calculateSizeRelativeToFixedScreenHeight(8)}px;
  border-radius: 100px;

  background-color: ${({ option, theme }) =>
    option === "NO-OPTION" ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK};
`;
