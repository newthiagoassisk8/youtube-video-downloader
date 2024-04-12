import { Dimensions } from "react-native";

const RELATIVE_SCREEN_HEIGHT = Dimensions.get("window").height;
const RELATIVE_SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = 812;
const SCREEN_WIDTH = 375;

export function calculateSizeRelativeToFixedScreenHeight(height: number) {
  return (height * RELATIVE_SCREEN_HEIGHT) / SCREEN_HEIGHT;
}

export function calculateSizeRelativeToFixedScreenWidth(width: number) {
  return (width * RELATIVE_SCREEN_WIDTH) / SCREEN_WIDTH;
}
