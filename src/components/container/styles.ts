import { SafeAreaView } from "react-native-safe-area-context";
import styled, { DefaultTheme } from "styled-components/native";

type ContainerTheme = "DEFAULT" | "NEUTRAL" | "ON_DIET" | "OFF_DIET";

export type ContainerStyleProps = {
  containerTheme?: ContainerTheme;
};

function getBackgroundColor(
  containerTheme: ContainerTheme,
  theme: DefaultTheme
) {
  switch (containerTheme) {
    case "NEUTRAL":
      return theme.COLORS.GRAY_500;
    case "OFF_DIET":
      return theme.COLORS.RED_LIGHT;
    case "ON_DIET":
      return theme.COLORS.GREEN_LIGHT;
    default:
      return theme.COLORS.GRAY_700;
  }
}

export const ContainerComponent = styled(SafeAreaView)<ContainerStyleProps>`
  flex: 1;
  background-color: ${({ containerTheme = "DEFAULT", theme }) =>
    getBackgroundColor(containerTheme, theme)};
  padding: 24px;
`;
