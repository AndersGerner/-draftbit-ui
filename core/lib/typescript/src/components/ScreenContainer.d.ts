import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import type { Theme } from "../styles/DefaultTheme";
declare type Props = {
    hasSafeArea: boolean;
    scrollable: boolean;
    hasBottomSafeArea?: boolean;
    hasTopSafeArea?: boolean;
    theme: Theme;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
};
declare function ScreenContainer({ hasSafeArea, scrollable, hasBottomSafeArea, hasTopSafeArea, theme, style, children, ...rest }: Props): JSX.Element;
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & typeof ScreenContainer, {}>;
export default _default;
