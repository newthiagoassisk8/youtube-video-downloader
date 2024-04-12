import { useState } from "react";
import {
  Option,
  SelectContainer,
  SelectOption,
  SelectOptionLabel,
  StatusIndicator,
} from "./styles";

export function Select() {
  const [optionSelected, setOptionSelected] = useState<Option>("YES-OPTION");

  return (
    <SelectContainer>
      <SelectOption
        option="YES-OPTION"
        selected={optionSelected === "YES-OPTION"}
        onPress={() => setOptionSelected("YES-OPTION")}
        activeOpacity={1}
      >
        <StatusIndicator option="YES-OPTION" />
        <SelectOptionLabel>Sim</SelectOptionLabel>
      </SelectOption>
      <SelectOption
        option="NO-OPTION"
        selected={optionSelected === "NO-OPTION"}
        onPress={() => setOptionSelected("NO-OPTION")}
        activeOpacity={1}
      >
        <StatusIndicator option="NO-OPTION" />
        <SelectOptionLabel>Não</SelectOptionLabel>
      </SelectOption>
    </SelectContainer>
  );
}
