import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { RadioButtonGroupProps } from "./RadioButtonGroup";
interface Props extends RadioButtonGroupProps {
    label?: string;
    labelStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
}
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
