import { PixelRatio, useWindowDimensions } from "react-native";

export const useResponsiveSizes = (): responsiveType => {
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();

  const size = (size: number): number => {
    /*
     * This is most common responsive size, which is calculated by using the device's aspect ratio.
     * Use this for margins, padding, heights, widths, etc. for extremely responsive, pixel-perfect apps.
     *
     * The multiplier value below was derived from an iPhone 14 Pro.
     * We needed to find a multiplier that made the iPhone 14 Pro look the same when using this function as it did when using the old method of using a fixed pixel size.
     * For example, if we used to use 20px for a margin, but now we use size(20), and they both look the same on the iPhone 14 Pro due to the multiplier value.
     */
    const multiplier = 2.2;
    return ((windowHeight / windowWidth) * size) / multiplier;
  };

  const width = (percentage: number) => {
    /*
     * Pass it a percentage, and it will return the correct width.
     * Example: responsiveWidth(50) will return 50% of the screen width.
     */
    return (windowWidth / 100) * percentage;
  };

  const height = (percentage: number) => {
    /*
     * Pass it a percentage, and it will return the correct height.
     * Example: responsiveHeight(50) will return 50% of the screen height.
     */
    return (windowHeight / 100) * percentage;
  };

  const fontSize = (fontSize: number) => {
    /*
     * Pass it a number, and it will return a font size that's proportional to the screen size.
     */
    const baseFontSize = 12;
    const scaleFactor = Math.min(windowWidth, windowHeight) / 375; // Math.min is used in case the screen is in landscape mode
    const scaledFontSize =
      baseFontSize + (fontSize - baseFontSize) * scaleFactor;
    return PixelRatio.roundToNearestPixel(scaledFontSize);
  };

  const hitSlop = {
    top: size(10),
    bottom: size(10),
    left: size(10),
    right: size(10),
  };

  return {
    size,
    width,
    height,
    fontSize,
    hitSlop,
    windowWidth,
    windowHeight,
  };
};

export type responsiveType = {
  size: (size: number) => number;
  width: (percentage: number) => number;
  height: (percentage: number) => number;
  fontSize: (fontSize: number) => number;
  windowWidth: number;
  windowHeight: number;
  hitSlop: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
};
