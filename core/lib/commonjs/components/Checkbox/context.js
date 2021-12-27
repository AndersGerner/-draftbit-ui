"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkboxGroupContext = exports.Direction = void 0;
exports.useCheckboxGroupContext = useCheckboxGroupContext;

var _react = require("react");

let Direction;
exports.Direction = Direction;

(function (Direction) {
  Direction["Horizontal"] = "horizontal";
  Direction["Vertical"] = "vertical";
})(Direction || (exports.Direction = Direction = {}));

const checkboxGroupContext = /*#__PURE__*/(0, _react.createContext)({
  onValueChange: () => {},
  values: [],
  direction: undefined
});
exports.checkboxGroupContext = checkboxGroupContext;

function useCheckboxGroupContext() {
  return (0, _react.useContext)(checkboxGroupContext);
}
//# sourceMappingURL=context.js.map