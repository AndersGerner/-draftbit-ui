import React from "react";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import theme from "../styles/DefaultTheme";
declare type Props = {
    image?: string | ImageSourcePropType;
    title?: string;
    leftDescription?: string;
    rightDescription?: string;
    titleCentered: boolean;
    aspectRatio?: number;
    elevation?: number;
    numColumns?: number;
    theme: typeof theme;
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
};
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
