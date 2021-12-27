"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radioButtonGroupContext = exports.Direction = void 0;
exports.useRadioButtonGroupContext = useRadioButtonGroupContext;

var _react = require("react");

let Direction;
exports.Direction = Direction;

(function (Direction) {
  Direction["Horizontal"] = "horizontal";
  Direction["Vertical"] = "vertical";
})(Direction || (exports.Direction = Direction = {}));

const radioButtonGroupContext = /*#__PURE__*/(0, _react.createContext)({
  onValueChange: () => {},
  value: "",
  direction: undefined
});
exports.radioButtonGroupContext = radioButtonGroupContext;

function useRadioButtonGroupContext() {
  return (0, _react.useContext)(radioButtonGroupContext);
}
//# sourceMappingURL=context.js.map