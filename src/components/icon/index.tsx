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

export function Icon({ color, name, size = 24 }: IconProps) {
  switch (name) {
    case "arrow-left":
      return <ArrowLeftIcon color={color} size={size} />;
    case "arrow-up-right":
      return <ArrowUpRightIcon color={color} size={size} />;
    case "pencil":
      return <PencilSimpleLineIcon color={color} size={size} />;
    case "plus":
      return <PlusIcon color={color} size={size} />;
    case "trash":
      return <TrashIcon color={color} size={size} />;
    default:
      return <View />;
  }
}
