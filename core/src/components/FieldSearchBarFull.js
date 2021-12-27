import * as React from "react";
import { View, TextInput, StyleSheet, } from "react-native";
import { withTheme } from "../theming";
import Config from "./Config";
const FieldSearchBarFull = ({ showIcon, Icon, icon = "search", placeholder = "", style, theme: { colors, typography }, onChange: changeOverride, onSubmit: submitOverride, value, defaultValue, }) => {
    const [focused, setIsFocused] = React.useState(false);
    const onBlur = () => {
        setIsFocused(false);
    };
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
    const onChange = React.useCallback((text) => {
        changeOverride && changeOverride(text);
    }, [changeOverride]);
    const onFocus = () => {
        setIsFocused(true);
    };
    const onSubmit = (e) => {
        submitOverride && submitOverride(e);
    };
    const { lineHeight, ...typeStyles } = typography.body2; // eslint-disable-line @typescript-eslint/no-unused-vars
    const handleChangeText = (newValue) => {
        setInternalValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };
    return (React.createElement(View, { style: [styles.container, style] },
        showIcon && (React.createElement(Icon, { name: icon, size: Config.fieldSearchBarFullIconSize, color: focused ? colors.primary : colors.light })),
        React.createElement(View, { style: { marginLeft: showIcon ? 12 : 0, flex: 1 } },
            React.createElement(TextInput, { clearButtonMode: "while-editing", placeholder: placeholder, value: internalValue, onBlur: onBlur, onFocus: onFocus, onChangeText: handleChangeText, onSubmitEditing: onSubmit, placeholderTextColor: colors.light, style: [
                    {
                        color: colors.medium,
                    },
                    typeStyles,
                ] }))));
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
});
export default withTheme(FieldSearchBarFull);
