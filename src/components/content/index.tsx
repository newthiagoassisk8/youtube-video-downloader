import { Button } from "@components/button";
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from "react-native-keyboard-aware-scroll-view";
import {
  ButtonsContainer,
  ChildrenContainer,
  ContentComponent,
  ContentStyleProps,
  SecondaryButtonContainer,
} from "./styles";

type ContentProps = {
  keyboardAware?: boolean;
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
  keyboardAware = true,
  primaryButton,
  secondaryButton,
  rounded,
  children,
  ...rest
}: ContentProps & ContentStyleProps & KeyboardAwareScrollViewProps) {
  return (
    <ContentComponent rounded={rounded}>
      {keyboardAware && (
        <KeyboardAwareScrollView {...rest} showsVerticalScrollIndicator={false}>
          {children}
        </KeyboardAwareScrollView>
      )}
      {!keyboardAware && <ChildrenContainer>{children}</ChildrenContainer>}
      <ButtonsContainer>
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
      </ButtonsContainer>
    </ContentComponent>
  );
}
