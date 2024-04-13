import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from "react-native-keyboard-aware-scroll-view";
import { ContentComponent, ContentStyleProps } from "./styles";

export function Content({
  rounded,
  children,
  ...rest
}: ContentStyleProps & KeyboardAwareScrollViewProps) {
  return (
    <ContentComponent rounded={rounded}>
      <KeyboardAwareScrollView {...rest} showsVerticalScrollIndicator={false}>
        {children}
      </KeyboardAwareScrollView>
    </ContentComponent>
  );
}
