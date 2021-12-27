"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dateFns = _interopRequireDefault(require("@date-io/date-fns"));

var _pickers = require("@material-ui/pickers");

var _styles = require("@material-ui/core/styles");

var _theming = require("../../theming");

var _DefaultTheme = _interopRequireDefault(require("../../styles/DefaultTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  const internalTheme = (0, _styles.createMuiTheme)({
    palette: {
      primary: {
        main: (_theme$colors$primary = theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary) !== null && _theme$colors$primary !== void 0 ? _theme$colors$primary : _DefaultTheme.default.colors.primary
      },
      secondary: {
        main: (_theme$colors$seconda = theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.secondary) !== null && _theme$colors$seconda !== void 0 ? _theme$colors$seconda : _DefaultTheme.default.colors.secondary
      }
    }
  });
  const Picker = mode === "date" ? _pickers.DatePicker : mode === "time" ? _pickers.TimePicker : _pickers.DateTimePicker;
  return /*#__PURE__*/_react.default.createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _dateFns.default
  }, /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: internalTheme
  }, /*#__PURE__*/_react.default.createElement(Picker, {
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

var _default = (0, _theming.withTheme)(DatePickerComponent);

exports.default = _default;
//# sourceMappingURL=DatePickerComponent.web.js.map