import * as React from "react";
import { View, StyleSheet } from "react-native";
import NativeSlider from "@react-native-community/slider";
import isNumber from "lodash.isnumber";
import toNumber from "lodash.tonumber";
import { withTheme } from "../theming";
function maybeParseValue(value) {
    if (value === undefined) {
        return undefined;
    }
    if (isNumber(value)) {
        return value;
    }
    try {
        const maybe = toNumber(value);
        if (isNumber(maybe)) {
            return maybe;
        }
    }
    catch {
        return undefined;
    }
    return undefined;
}
function Slider({ Icon, leftIcon, rightIcon, leftIconColor, rightIconColor, value, defaultValue, minimumTrackTintColor, maximumTrackTintColor, thumbTintColor, minimumValue = 0, maximumValue = 100, tapToSeek, step = 1, onValueChange = () => { }, style, theme, ...rest }) {
    const [internalValue, setInternalValue] = React.useState(value || defaultValue);
    React.useEffect(() => {
        if (value != null) {
            setInternalValue(value);
        }
    }, [value]);
    React.useEffect(() => {
        if (defaultValue != null) {
            setInternalValue(defaultValue);
        }
    }, [defaultValue]);
    const minTrackColor = minimumTrackTintColor || theme.colors.primary;
    const maxTrackColor = maximumTrackTintColor || theme.colors.light;
    const thumbColor = thumbTintColor || theme.colors.primary;
    const leftIconThemeColor = leftIconColor || theme.colors.light;
    const rightIconThemeColor = rightIconColor || theme.colors.light;
    const parsedValue = maybeParseValue(internalValue);
    const handleSlidingComplete = (newValue) => {
        setInternalValue(newValue);
        onValueChange(newValue);
    };
    return (React.createElement(View, { style: [styles.container, style], ...rest },
        leftIcon ? (React.createElement(Icon, { color: leftIconThemeColor, name: leftIcon, size: 24 })) : null,
        React.createElement(NativeSlider, { value: parsedValue, step: step, minimumValue: minimumValue, maximumValue: maximumValue, tapToSeek: tapToSeek, minimumTrackTintColor: minTrackColor, maximumTrackTintColor: maxTrackColor, thumbTintColor: thumbColor, onSlidingComplete: handleSlidingComplete, style: styles.slider }),
        rightIcon ? (React.createElement(Icon, { color: rightIconThemeColor, name: rightIcon, size: 24 })) : null));
}
const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: "row",
        alignItems: "center",
    },
    slider: {
        flex: 1,
        marginHorizontal: 12,
    },
});
export default withTheme(Slider);
