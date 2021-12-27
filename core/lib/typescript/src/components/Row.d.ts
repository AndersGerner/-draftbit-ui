import * as React from "react";
import { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from "react-native";
import theme from "../styles/DefaultTheme";
declare type Props = {
    titleTypeStyle?: StyleProp<TextStyle>;
    titleColor?: string;
    subtitleTypeStyle?: StyleProp<TextStyle>;
    subtitleColor?: string;
    title?: string;
    subtitle?: string;
    multilineSubtitle?: boolean;
    image?: string | ImageSourcePropType;
    right?: () => React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: typeof theme;
};
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
