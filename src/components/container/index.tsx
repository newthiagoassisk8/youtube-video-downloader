import { SafeAreaViewProps } from "react-native-safe-area-context";
import { ContainerComponent, ContainerStyleProps } from "./styles";

export function Container({
  containerTheme,
  children,
}: ContainerStyleProps & SafeAreaViewProps) {
  return (
    <ContainerComponent containerTheme={containerTheme}>
      {children}
    </ContainerComponent>
  );
}
