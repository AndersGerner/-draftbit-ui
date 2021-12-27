import React from "react";
import { TextStyle, StyleProp } from "react-native";
import Theme from "../styles/DefaultTheme";
declare type Props = {
    text: string;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: typeof Theme;
};
export declare const Title: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & (({ text, theme, style }: Props) => JSX.Element), {}>;
export declare const Subtitle: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & (({ text, theme, style }: Props) => JSX.Element), {}>;
export declare const Caption: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & (({ text, theme, style }: Props) => JSX.Element), {}>;
export {};
