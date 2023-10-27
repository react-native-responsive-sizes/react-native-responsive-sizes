# 📱 react-native-responsive-sizes

## ⚙️ Installation

- You may use either `npm` or `yarn` to install this package.

```bash
npm install react-native-responsive-sizes
```

```bash
yarn add react-native-responsive-sizes
```

## ⚙️ Usage

```typescript
import React from "react";
import { useResponsiveSizes } from "react-native-responsive-sizes";
import { View, Text } from "react-native";

export const SampleComponent = () => {
  // Instantiate the hook
  const responsive = useResponsiveSizes();

  return (
    <View
      style={{
        width: responsive.width(90), // 90% of the screen's width
        height: responsive.size(600), // originally 600
        marginTop: responsive.size(10), // originally 10
        backgroundColor: "blue",
        alignSelf: "center",
      }}
    >
      {[
        "First",
        "Second",
        "Third",
        "Fourth",
        "Fifth",
        "Sixth",
        "Seventh",
        "Eigth",
        "Ninth",
        "Tenth",
      ].map((text, index) => (
        <View
          key={`${text} ${index}`}
          style={{
            backgroundColor: "red",
            justifyContent: "center",
            marginTop: responsive.size(10), // originally 10
            height: responsive.size(40), // originally 40
            marginHorizontal: responsive.size(10), // originally 10
          }}
        >
          <Text
            style={{
              fontSize: responsive.fontSize(14),
              textAlign: "center",
            }}
          >
            {text}
          </Text>
        </View>
      ))}
    </View>
  );
};
```

## ⚙️ Description

Simple & lightweight react-native package to help you make your mobile app look terrific on every screen size. You may use the following functions to make your app more responsive.

| Function Name                         | Input                                                                         | Output                                                          | Example                                                                                                                                                                                                                           |
| ------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MOST POPULAR:** `responsive.size()` | number of pixels                                                              | number of pixels proportional to screen's height/width          | If you use `responsive.size(10)` then you will receive 10 pixels on iPhone 14 Pro, but slightly different number of pixels for other screen sizes, such as 8 pixels on a smaller iPhone SE or 12 pixels on a larger iPhone 12 Max |
| `responsive.width()`                  | number from 0-100, which corresponds to the percentage of the screen's width  | number of pixels equal to the percentage of the screen's width  | If you use `responsive.width(50)` then you will receive a number of pixels equal to 50% of the screen's width                                                                                                                     |
| `responsive.height()`                 | number from 0-100, which corresponds to the percentage of the screen's height | number of pixels equal to the percentage of the screen's height | If you use `responsive.height(50)` then you will receive a number of pixels equal to 50% of the screen's height                                                                                                                   |
| `responsive.fontSize()`               | font size number                                                              | font size that's more proportional to the size of the screen    | If you pass it `responsive.fontSize(32)` then you will receive a 32-point font-size on an iPhone 14 Pro, but slightly smaller font-sizes on smaller devices                                                                       |

## ⚙️ Before & After Video Demonstration

- Video can be found below, but if you cannot see it, then please [follow this link](https://github.com/react-native-responsive-sizes/react-native-responsive-sizes).
- In the video below, you can see how the app looks before and after using `react-native-responsive-sizes`
- In the BEFORE code, you can see that the styles use constant values, such as: height of 600, marginTop of 10, marginHorizontal of 10, etc.
- But in the AFTER code, you can see some very simple changes were made: responsive.size(600), responsive.size(10), responsive.size(10), etc.
- With those changes, the app looks much proportional on screens of different aspect ratios.

https://github.com/react-native-responsive-sizes/assets/assets/54771184/6978ed10-d535-48d5-9dcb-56fcd6f6546c
