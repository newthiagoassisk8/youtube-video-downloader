import styled, { css } from "styled-components/native";

export type ContentStyleProps = {
  rounded?: boolean;
};

export const ContentComponent = styled.View<ContentStyleProps>`
  flex: 1;
  padding: 24px;
  justify-content: space-between;
  ${({ rounded = false, theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    border-top-right-radius: ${rounded ? 20 : 0}px;
    border-top-left-radius: ${rounded ? 20 : 0}px;
  `}
`;

export const ChildrenContainer = styled.View`
  flex: 1;
`;

export const ButtonsContainer = styled.View`
  margin-top: 24px;
`;

export const SecondaryButtonContainer = styled.View`
  margin-top: 8px;
`;
