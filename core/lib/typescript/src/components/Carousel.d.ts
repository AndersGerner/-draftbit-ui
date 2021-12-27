import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
declare type Props = {
    data?: any[];
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    dotColor?: string;
};
declare function Carousel({ data, children, dotColor, style, ...rest }: Props): JSX.Element;
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<{
    theme: any;
}, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<{
    theme: any;
}> & typeof Carousel, {}>;
export default _default;
