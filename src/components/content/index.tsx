import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from "react-native-keyboard-aware-scroll-view";
import {
  ContentComponent,
  ContentStyleProps,
  SecondaryButtonContainer,
} from "./styles";
import { Button } from "@components/button";

type ContentProps = {
  primaryButton?: {
    text: string;
    action: () => void;
    icon?: PhosphorIcon;
  };
  secondaryButton?: {
    text: string;
    action: () => void;
    icon?: PhosphorIcon;
  };
};

export function Content({
  primaryButton,
  secondaryButton,
  rounded,
  children,
  ...rest
}: ContentProps & ContentStyleProps & KeyboardAwareScrollViewProps) {
  return (
    <ContentComponent rounded={rounded}>
      <KeyboardAwareScrollView {...rest} showsVerticalScrollIndicator={false}>
        {children}
      </KeyboardAwareScrollView>
      {primaryButton && (
        <Button
          buttonTheme="DARK"
          label={primaryButton.text}
          icon={
            primaryButton.icon
              ? { name: primaryButton.icon, size: 18 }
              : undefined
          }
          onPress={primaryButton.action}
        />
      )}
      {secondaryButton && (
        <SecondaryButtonContainer>
          <Button
            buttonTheme="LIGHT"
            label={secondaryButton.text}
            icon={
              secondaryButton.icon
                ? { name: secondaryButton.icon, size: 18 }
                : undefined
            }
            onPress={secondaryButton.action}
          />
        </SecondaryButtonContainer>
      )}
    </ContentComponent>
  );
}
