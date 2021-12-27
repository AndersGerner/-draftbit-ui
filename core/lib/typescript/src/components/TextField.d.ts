/// <reference types="node" />
import * as React from "react";
import { Animated, TextInput as NativeTextInput, StyleProp, TextInputProps, NativeSyntheticEvent, TextInputChangeEventData, ViewStyle } from "react-native";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
export declare type Props = {
    type?: "solid" | "underline";
    defaultValue?: string;
    disabled?: boolean;
    label?: string;
    error?: boolean;
    leftIconName?: string;
    leftIconMode?: "inset" | "outset";
    onChangeText: (text: string | NativeSyntheticEvent<TextInputChangeEventData>) => void;
    rightIconName?: string;
    assistiveText?: string;
    multiline?: boolean;
    numberOfLines: number;
    underlineColor?: string;
    style?: StyleProp<ViewStyle> & {
        height?: number;
    };
    theme: Theme;
    render?: (props: TextInputProps & {
        ref: (c: NativeTextInput) => void;
    }) => React.ReactNode;
} & TextInputProps & IconSlot;
interface State {
    labeled: Animated.Value;
    focused?: boolean;
    placeholder?: string | undefined;
    labelLayout: {
        measured: boolean;
        width: number;
    };
    value?: string;
}
declare class TextField extends React.Component<Props, State> {
    static getDerivedStateFromProps(nextProps: Props, prevState: State): {
        value: string | undefined;
    };
    state: State;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    _timer: NodeJS.Timeout;
    componentWillUnmount(): void;
    _showPlaceholder: () => void;
    _hidePlaceholder: () => void;
    _restoreLabel: () => void;
    _minmizeLabel: () => void;
    _handleFocus: () => void;
    _handleBlur: () => void;
    _handleChangeText: (value: NativeSyntheticEvent<TextInputChangeEventData> | string) => void;
    toggleFocus(): void;
    _root: NativeTextInput | undefined;
    /**
     * @internal
     */
    setNativeProps(args: Props): void | undefined;
    isFocused(): boolean | undefined;
    clear(): void | undefined;
    focus(): void | undefined;
    blur(): void | undefined;
    render(): JSX.Element;
}
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & typeof TextField, {}>;
export default _default;
