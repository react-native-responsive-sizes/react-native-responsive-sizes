# react-native-responsive-sizes

## ⚙️ Description

Simple & lightweight react-native package to help you make your mobile app look terrific on every screen size. The following functions are at your disposal:

* `responsive.size` — returns a number of pixels proportional to the screen's height/width aspect ratio
* `responsive.width` — returns a percentage of the screen width
* `responsive.height` — returns a percentage of the screen height
* `responsive.fontSize` — returns a responsive font size (normal size on large screens, and slightly smaller on smaller screens)

## ⚙️ Example

```
import { useResponsiveSizes } from 'react-native-responsive-sizes';
import { View, Text } from 'react-native';

export const SampleComponent = () => {
    const responsive = useResponsiveSizes();
    return (
        <View style={{ width: responsive.width(100), height: responsive.height(100) }}>
            <View style={{ backgroundColor: 'red', margin: responsive.size(10) }}>
                <Text style={{ fontSize: responsive.fontSize(5) }}>
                    {'Hello World!'}
                </Text>
            </View>
        </View>
    );
};
```