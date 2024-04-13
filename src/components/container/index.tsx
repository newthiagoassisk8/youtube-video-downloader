import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from "react-native-keyboard-aware-scroll-view";
import { ContainerComponent, ContainerStyleProps } from "./styles";

export function Container({
  containerTheme,
  children,
  ...rest
}: ContainerStyleProps & KeyboardAwareScrollViewProps) {
  return (
    <ContainerComponent containerTheme={containerTheme}>
      <KeyboardAwareScrollView {...rest} showsVerticalScrollIndicator={false}>
        {children}
      </KeyboardAwareScrollView>
    </ContainerComponent>
  );
}
