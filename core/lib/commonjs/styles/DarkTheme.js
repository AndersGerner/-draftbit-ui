"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _color = _interopRequireDefault(require("color"));

var _DefaultTheme = _interopRequireDefault(require("./DefaultTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-nocheck
const white = "#FFF";
const black = "#000";
const pinkA100 = "#ff80ab";
const DarkTheme = { ..._DefaultTheme.default,
  dark: true,
  mode: "adaptive",
  colors: { ..._DefaultTheme.default.colors,
    primary: "#BB86FC",
    background: "#121212",
    surface: "#121212",
    error: "#CF6679",
    onBackground: "#FFFFFF",
    onSurface: "#FFFFFF",
    text: white,
    disabled: (0, _color.default)(white).alpha(0.38).rgb().string(),
    placeholder: (0, _color.default)(white).alpha(0.54).rgb().string(),
    backdrop: (0, _color.default)(black).alpha(0.5).rgb().string(),
    notification: pinkA100
  }
};
var _default = DarkTheme;
exports.default = _default;
//# sourceMappingURL=DarkTheme.js.map