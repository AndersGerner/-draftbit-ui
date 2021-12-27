import React from "react";
import { Pressable } from "react-native";
export default function Touchable({ children, disabled, onPress, style, ...props }) {
    return (React.createElement(Pressable, { onPress: onPress, disabled: disabled, hitSlop: 8, style: ({ pressed }) => {
            return [
                {
                    opacity: pressed || disabled ? 0.75 : 1,
                },
                style,
            ];
        }, ...props }, children));
}
