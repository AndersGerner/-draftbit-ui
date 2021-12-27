import * as React from "react";
import { Switch as NativeSwitch, } from "react-native";
import { withTheme } from "../theming";
import FormRow from "./FormRow";
import { RowDirection } from "@draftbit/types";
import { usePrevious } from "../hooks";
function Switch({ value, defaultValue, disabled, onValueChange, activeTrackColor, inactiveTrackColor, activeThumbColor, inactiveThumbColor, theme, style, ...rest }) {
    const activeTrackThemeColor = activeTrackColor || theme.colors.primary;
    const inactiveTrackThemeColor = inactiveTrackColor || "#EEE";
    const activeThumbThemeColor = activeThumbColor || "#FFF";
    const inactiveThumbThemeColor = inactiveThumbColor || "#FFF";
    const [checked, setChecked] = React.useState(value || defaultValue);
    React.useEffect(() => {
        if (value != null && value !== checked) {
            setChecked(value);
        }
    }, [value, checked]);
    // This special logic is to handle weird APIs like Airtable that return
    // true or undefined for a boolean
    const previousDefaultValue = usePrevious(defaultValue);
    React.useEffect(() => {
        if (defaultValue !== previousDefaultValue) {
            setChecked(Boolean(defaultValue));
        }
    }, [defaultValue, previousDefaultValue]);
    return (React.createElement(NativeSwitch, { value: checked, disabled: disabled, trackColor: {
            false: inactiveTrackThemeColor,
            true: activeTrackThemeColor,
        }, thumbColor: value ? activeThumbThemeColor : inactiveThumbThemeColor, 
        // @ts-ignore react-native-web only
        activeThumbColor: activeThumbThemeColor, ios_backgroundColor: inactiveTrackThemeColor, style: style, onValueChange: (bool) => {
            setChecked(bool);
            onValueChange && onValueChange(bool);
        }, ...rest }));
}
function Row({ label = "Label", direction = RowDirection.Row, style, value, defaultValue, disabled, onValueChange, activeTrackColor, inactiveTrackColor, activeThumbColor, inactiveThumbColor, theme, ...rest }) {
    const [checked, setChecked] = React.useState(value != null ? value : defaultValue);
    React.useEffect(() => {
        if (value != null) {
            setChecked(value);
        }
    }, [value]);
    React.useEffect(() => {
        if (defaultValue != null) {
            setChecked(defaultValue);
        }
    }, [defaultValue]);
    return (React.createElement(FormRow, { disabled: disabled, onPress: () => {
            setChecked(!checked);
            onValueChange && onValueChange(!checked);
        }, label: label, direction: direction, style: style, ...rest },
        React.createElement(Switch, { theme: theme, value: checked, disabled: disabled, onValueChange: onValueChange, activeTrackColor: activeTrackColor, inactiveTrackColor: inactiveTrackColor, activeThumbColor: activeThumbColor, inactiveThumbColor: inactiveThumbColor })));
}
const SwitchRow = withTheme(Row);
export { SwitchRow };
export default withTheme(Switch);
