import * as React from "react";
import { TextProps } from "react-native";
import type { Theme } from "../styles/DefaultTheme";
declare type Props = {
    theme: Theme;
} & TextProps;
declare class Text extends React.Component<Props> {
    _root: any;
    setNativeProps(args: TextProps): any;
    render(): JSX.Element;
}
export declare const BaseLink: ({ style, theme, title, ...props }: any) => JSX.Element;
declare const Link: any;
export { Link };
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & typeof Text, {}>;
export default _default;
