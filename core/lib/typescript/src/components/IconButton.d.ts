import * as React from "react";
import { StyleProp, ViewStyle, PressableProps } from "react-native";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
declare type Props = {
    icon?: string;
    color?: string;
    size?: number;
    disabled?: boolean;
    loading?: boolean;
    onPress: () => void;
    theme: Theme;
    style?: StyleProp<ViewStyle>;
} & PressableProps & IconSlot;
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
