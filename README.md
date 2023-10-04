# react-native-responsive-sizes

## ⚙️ Description

Simple & lightweight react-native package to help you make your mobile app look terrific on every screen size. You may use the following functions to make your app more responsive.

```
import { useResponsiveSizes } from 'react-native-responsive-sizes';
const responsive = useResponsiveSizes();
```

The most widely-used function is `responsive.size()`, which returns a number of pixels proportional to the screen's height/width. For example, if you generally add a margin of 10 pixels to your component, then, you may use `responsive.size(10)`, which will return 10 pixels on iPhone 14 Pro, but slightly different number of pixels for other screen sizes, such as 8 pixels on iPhone 8 and 12 pixels on iPhone 12 Pro Max. Doing this will make your app look perfectly proportioned on every screen size.

| Function Name           | Input                                                                        | Output                                                          | 
| ----------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `responsive.size()`     | number of pixels                                                             | number of pixels proportional to screen's height/width          |
| `responsive.width()`    | number from 0-100, which corresponds to the percentage of the screen's width | number of pixels equal to the percentage of the screen's width  |
| `responsive.height()`   | number from 0-100, which corresponds to the percentage of the screen's height | number of pixels equal to the percentage of the screen's height |
| `responsive.fontSize()` | font size number                                                             | font size that's more proportional to the size of the screen    |

## ⚙️ Implementation

```
import { useResponsiveSizes } from 'react-native-responsive-sizes';
import { View, Text } from 'react-native';

export const SampleComponent = () => {
    const responsive = useResponsiveSizes();
    return (
        <View style={{
            width: responsive.width(90), // 90% of the screen's width
            height: responsive.height(80) // 80% of the screen's height
            }}>
            <View style={{
                backgroundColor: 'red',
                margin: responsive.size(10) // 10 pixels on iPhone 14 Pro, but slightly different number of pixels for other screen sizes
                }}>
                <Text style={{
                    fontSize: responsive.fontSize(5) // responsive font size
                    }}>
                    {'Hello World!'}
                </Text>
            </View>
        </View>
    );
};
```
