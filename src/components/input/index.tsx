import { useState } from "react";
import { InputContainer, InputContent, InputLabel } from "./styles";
import { TextInputProps } from "react-native";

type InputProps = {
  label: string;
  size?: "small" | "normal" | "large";
} & TextInputProps;

export function Input({ label, size = "normal", ...rest }: InputProps) {
  const [isActive, setIsActive] = useState(false);

  function handleActive() {
    setIsActive(!isActive);
  }

  function getHeight(): number {
    switch (size) {
      case "large":
        return 142;
      default:
        return 70;
    }
  }

  function getWidth(): string | number {
    switch (size) {
      case "small":
        return 153.5;
      default:
        return "100%";
    }
  }

  return (
    <InputContainer height={getHeight()} width={getWidth()}>
      <InputLabel>{label}</InputLabel>
      <InputContent
        active={isActive}
        {...rest}
        onFocus={handleActive}
        onBlur={handleActive}
        textAlignVertical="top"
        multiline={size === "large"}
      />
    </InputContainer>
  );
}
