import * as React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
declare type Props = {
    titleTypeStyle?: StyleProp<TextStyle>;
    titleColor: string;
    title: string;
    buttonText: string;
    dividerTopMargin?: number;
    icon: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    theme: Theme;
} & IconSlot;
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
