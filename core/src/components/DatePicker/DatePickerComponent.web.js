import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker, TimePicker, DateTimePicker, } from "@material-ui/pickers";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { withTheme } from "../../theming";
import Theme from "../../styles/DefaultTheme";
const DatePickerComponent = ({ value, onChange, mode, toggleVisibility, isVisible, theme, }) => {
    const internalTheme = createMuiTheme({
        palette: {
            primary: {
                main: theme?.colors?.primary ?? Theme.colors.primary,
            },
            secondary: {
                main: theme?.colors?.secondary ?? Theme.colors.secondary,
            },
        },
    });
    const Picker = mode === "date"
        ? DatePicker
        : mode === "time"
            ? TimePicker
            : DateTimePicker;
    return (React.createElement(MuiPickersUtilsProvider, { utils: DateFnsUtils },
        React.createElement(ThemeProvider, { theme: internalTheme },
            React.createElement(Picker, { value: value, open: isVisible, onChange: (d) => {
                    toggleVisibility();
                    onChange(null, d);
                }, onClose: () => toggleVisibility(), variant: "dialog", TextFieldComponent: () => null }))));
};
export default withTheme(DatePickerComponent);
