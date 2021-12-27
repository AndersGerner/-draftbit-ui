"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is an interface for a hybrid component.
 *
 * Its public implementation is `@draftbit/native`, and it is injected inside
 * `@draftbit/ui`.
 */
const injectIcon = (Component, Icon) => props => /*#__PURE__*/_react.default.createElement(Component, { ...props,
  Icon
});

exports.injectIcon = injectIcon;
//# sourceMappingURL=Icon.js.map