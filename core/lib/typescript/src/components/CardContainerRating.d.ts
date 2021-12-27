import React from "react";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
declare type Props = {
    image?: string | ImageSourcePropType;
    title?: string;
    leftDescription?: string;
    rightDescription?: string;
    textCentered: boolean;
    icon?: string;
    rating: number;
    aspectRatio?: number;
    elevation?: number;
    numColumns?: number;
    theme: Theme;
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
} & IconSlot;
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
