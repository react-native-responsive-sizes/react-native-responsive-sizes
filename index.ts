import { Dimensions, Platform, StatusBar } from "react-native";

export type ResponsiveSizesType = {
  /*
   * This is most common responsive size, which is calculated by using the device's aspect ratio.
   * Use this for margins, padding, heights, widths, etc. for extremely responsive, pixel-perfect apps.
   *
   * The multiplier value below was derived from an iPhone 14 Pro.
   * We needed to find a multiplier that made the iPhone 14 Pro look the same when using this function as it did when using the old method of using a fixed pixel size.
   * For example, if we used to use 20px for a margin, but now we use size(20), and they both look the same on the iPhone 14 Pro due to the multiplier value.
   */
  size: (size: number) => number;
  /*
   * Pass it a percentage, and it will return a width in pixels.
   * Example: responsiveWidth(50) will return pixels equal to 50% of the screen width.
   */
  width: (percentage: number) => number;
  /*
   * Pass it a percentage, and it will return a height in pixels.
   * Example: responsiveHeight(50) will return pixels equal to 50% of the screen height.
   */
  height: (percentage: number) => number;
  /*
   * Pass it a number, and it will return a font size that's proportional to the screen size.
   */
  fontSize: (fontSize: number) => number;
  /*
   * This is the screen width of the user's device when the app first opens (does not update value if user rotates their device)
   */
  windowWidth: number;
  /*
   * This is the screen height of the user's device when the app first opens (does not update value if user rotates their device)
   */
  windowHeight: number;
  /*
   * This is a default hitSlop for pressable components.
   */
  hitSlop: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
};

export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const size = (size: number): number => {
  const multiplier = 2.2;
  return ((SCREEN_HEIGHT / SCREEN_WIDTH) * size) / multiplier;
};

export const width = (percentage: number) => {
  return (SCREEN_WIDTH / 100) * percentage;
};

export const height = (percentage: number) => {
  return (SCREEN_HEIGHT / 100) * percentage;
};

export const fontSize = (fontSize: number) => {
  const multiplier = 680;
  const standardLength =
    SCREEN_WIDTH > SCREEN_HEIGHT ? SCREEN_WIDTH : SCREEN_HEIGHT;
  const offset =
    SCREEN_WIDTH > SCREEN_HEIGHT
      ? 0
      : Platform.OS === "ios"
      ? 78
      : StatusBar.currentHeight ?? 0;
  const deviceHeight =
    Platform.OS === "android" ? standardLength - offset : standardLength;
  const heightPercent = (fontSize * deviceHeight) / multiplier;
  return Math.round(heightPercent);
};

export const hitSlop = {
  top: size(10),
  bottom: size(10),
  left: size(10),
  right: size(10),
};
