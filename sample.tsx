import React from "react";
import { useResponsiveSizes } from "react-native-responsive-sizes";
import { View, Text } from "react-native";

export const SampleComponent = () => {
  const responsive = useResponsiveSizes();

  return (
    <View
      style={{
        width: responsive.width(90), // 90% of the screen's width
        height: responsive.height(80), // 80% of the screen's height
        backgroundColor: "blue",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          margin: responsive.size(10), // 10 pixels on iPhone 14 Pro, but slightly different number of pixels for other screen sizes
        }}
      >
        <Text
          style={{
            fontSize: responsive.fontSize(32), // responsive font size
          }}
        >
          {"Hello World!"}
        </Text>
      </View>
    </View>
  );
};
