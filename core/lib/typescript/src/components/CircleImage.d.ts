import * as React from "react";
import { ImageSourcePropType, StyleProp, ImageStyle } from "react-native";
interface Props {
    source?: string | ImageSourcePropType;
    size?: number;
    style?: StyleProp<ImageStyle>;
}
declare const CircleImage: React.FC<Props>;
export default CircleImage;
