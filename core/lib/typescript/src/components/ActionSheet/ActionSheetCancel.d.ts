import React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
declare type Props = {
    label: string;
    color: string;
    style?: StyleProp<ViewStyle | TextStyle>;
    onPress?: () => void;
};
declare const ActionSheetCancel: React.FC<Props>;
export default ActionSheetCancel;
