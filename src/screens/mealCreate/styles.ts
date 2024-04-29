import styled, { css } from "styled-components/native";

export const DateAndHourInputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const OnDietQuestionText = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;
