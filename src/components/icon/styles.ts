import theme from "@theme/index";
import {
  ArrowLeft,
  ArrowUpRight,
  PencilSimpleLine,
  Plus,
  Trash,
} from "phosphor-react-native";
import styled from "styled-components/native";

export type IconStyleProps = {
  color:
    | typeof theme.COLORS.GRAY_200
    | typeof theme.COLORS.RED_DARK
    | typeof theme.COLORS.GREEN_DARK;
  size?: number;
};

export const ArrowLeftIcon = styled(ArrowLeft).attrs<IconStyleProps>(
  ({ color, size }) => ({
    size: size,
    color: color,
  })
)``;

export const ArrowUpRightIcon = styled(ArrowUpRight).attrs<IconStyleProps>(
  ({ color, size }) => ({
    size: size,
    color: color,
  })
)``;

export const PlusIcon = styled(Plus).attrs<IconStyleProps>(
  ({ color, size }) => ({
    size: size,
    color: color,
  })
)``;

export const PencilSimpleLineIcon = styled(
  PencilSimpleLine
).attrs<IconStyleProps>(({ color, size }) => ({
  size: size,
  color: color,
}))``;

export const TrashIcon = styled(Trash).attrs<IconStyleProps>(
  ({ color, size }) => ({
    size: size,
    color: color,
  })
)``;
