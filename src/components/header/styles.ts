import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const HeaderContainer = styled.View`
  position: relative;
  padding: 24px 0px;
`;

export const GoBackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const ScreenName = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
