import * as React from "react";
import { StyleProp, ViewStyle, NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
declare type Props = {
    showIcon: boolean;
    icon?: string;
    placeholder?: string;
    style?: StyleProp<ViewStyle>;
    theme: Theme;
    onChange?: (text: string) => void;
    onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
    value?: string;
    defaultValue?: string;
} & IconSlot;
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
