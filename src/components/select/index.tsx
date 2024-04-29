import { useState } from "react";
import {
  SelectContainer,
  SelectOption,
  SelectOptionLabel,
  StatusIndicator,
} from "./styles";

export type Option = "YES-OPTION" | "NO-OPTION";

type SelectProps = {
  defaultOption?: Option | "";
  onSelectOption: (option: Option) => void;
};

export function Select({ defaultOption = "", onSelectOption }: SelectProps) {
  const [optionSelected, setOptionSelected] = useState<Option | "">(
    defaultOption
  );

  function handleSelectOption(option: Option) {
    setOptionSelected(option);
    onSelectOption(option);
  }

  return (
    <SelectContainer>
      <SelectOption
        option="YES-OPTION"
        selected={optionSelected === "YES-OPTION"}
        onPress={() => handleSelectOption("YES-OPTION")}
        activeOpacity={1}
      >
        <StatusIndicator option="YES-OPTION" />
        <SelectOptionLabel>Sim</SelectOptionLabel>
      </SelectOption>
      <SelectOption
        option="NO-OPTION"
        selected={optionSelected === "NO-OPTION"}
        onPress={() => handleSelectOption("NO-OPTION")}
        activeOpacity={1}
      >
        <StatusIndicator option="NO-OPTION" />
        <SelectOptionLabel>Não</SelectOptionLabel>
      </SelectOption>
    </SelectContainer>
  );
}
