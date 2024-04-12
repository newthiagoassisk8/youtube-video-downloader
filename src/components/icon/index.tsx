import { View } from "react-native";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  IconStyleProps,
  PencilSimpleLineIcon,
  PlusIcon,
  TrashIcon,
} from "./styles";

type IconProps = {
  name: PhosphorIcon;
} & IconStyleProps;

export function Icon({ color, name }: IconProps) {
  switch (name) {
    case "arrow-left":
      return <ArrowLeftIcon color={color} />;
    case "arrow-up-right":
      return <ArrowUpRightIcon color={color} />;
    case "pencil":
      return <PencilSimpleLineIcon color={color} />;
    case "plus":
      return <PlusIcon color={color} />;
    case "trash":
      return <TrashIcon color={color} />;
    default:
      return <View />;
  }
}
