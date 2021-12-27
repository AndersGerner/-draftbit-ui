"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePrevious = usePrevious;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable
  // and can hold any value, similar to an instance property on a class
  const ref = _react.default.useRef(); // Store current value in ref


  _react.default.useEffect(() => {
    ref.current = value;
  }, [value]); // Return previous value (happens before update in useEffect above)


  return ref.current;
}
//# sourceMappingURL=hooks.js.map