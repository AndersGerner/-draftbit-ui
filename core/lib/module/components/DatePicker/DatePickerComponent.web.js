import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker, TimePicker, DateTimePicker } from "@material-ui/pickers";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { withTheme } from "../../theming";
import Theme from "../../styles/DefaultTheme";

const DatePickerComponent = _ref => {
  var _theme$colors$primary, _theme$colors, _theme$colors$seconda, _theme$colors2;

  let {
    value,
    onChange,
    mode,
    toggleVisibility,
    isVisible,
    theme
  } = _ref;
  const internalTheme = createMuiTheme({
    palette: {
      primary: {
        main: (_theme$colors$primary = theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary) !== null && _theme$colors$primary !== void 0 ? _theme$colors$primary : Theme.colors.primary
      },
      secondary: {
        main: (_theme$colors$seconda = theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.secondary) !== null && _theme$colors$seconda !== void 0 ? _theme$colors$seconda : Theme.colors.secondary
      }
    }
  });
  const Picker = mode === "date" ? DatePicker : mode === "time" ? TimePicker : DateTimePicker;
  return /*#__PURE__*/React.createElement(MuiPickersUtilsProvider, {
    utils: DateFnsUtils
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: internalTheme
  }, /*#__PURE__*/React.createElement(Picker, {
    value: value,
    open: isVisible,
    onChange: d => {
      toggleVisibility();
      onChange(null, d);
    },
    onClose: () => toggleVisibility(),
    variant: "dialog",
    TextFieldComponent: () => null
  })));
};

export default withTheme(DatePickerComponent);
//# sourceMappingURL=DatePickerComponent.web.js.map