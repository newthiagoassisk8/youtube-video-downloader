import styled, { css } from "styled-components/native";

export const PercentageTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_G}px;
    color: ${theme.COLORS.GRAY_100};
    line-height: 41.6px;
    text-align: center;
  `}
`;

export const PercentageSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    color: ${theme.COLORS.GRAY_100};
    text-align: center;
  `}
`;
