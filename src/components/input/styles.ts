import {
  calculateSizeRelativeToFixedScreenHeight,
  calculateSizeRelativeToFixedScreenWidth,
} from "@utils/dimensions";
import { TextInput, View } from "react-native";
import styled, { css } from "styled-components/native";

type InputCotentStyleProps = {
  active: boolean;
};

type InputContainerStyleProps = {
  height: number;
  width: string | number;
};

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-bottom: 4px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const InputContent = styled(TextInput)<InputCotentStyleProps>`
  ${({ active, theme }) => css`
    border-width: 1px;
    border-radius: 6px;
    border-color: ${active ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_500};
    padding: 14px;
    color: ${theme.COLORS.GRAY_200};
    flex: 1;
  `}
`;

export const InputContainer = styled(View)<InputContainerStyleProps>`
  margin-bottom: 24px;
  ${({ height, width }) => css`
    height: ${calculateSizeRelativeToFixedScreenHeight(height)}px;
    width: ${typeof width === "number"
      ? calculateSizeRelativeToFixedScreenWidth(width) + "px"
      : width};
  `}
`;
