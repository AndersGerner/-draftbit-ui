function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from "react";
import { Text as NativeText, I18nManager } from "react-native";
import { withTheme } from "../theming";

class Text extends React.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "_root", void 0);
  }

  setNativeProps(args) {
    return this._root && this._root.setNativeProps(args);
  }

  render() {
    const {
      style,
      ...rest
    } = this.props;
    const writingDirection = I18nManager.isRTL ? "rtl" : "ltr";
    return /*#__PURE__*/React.createElement(NativeText, _extends({}, rest, {
      ref: c => {
        this._root = c;
      },
      style: [{
        textAlign: "left",
        writingDirection
      }, style]
    }));
  }

}

export const BaseLink = _ref => {
  let {
    style,
    theme,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Text, _extends({
    hitSlop: 8,
    style: [{
      color: theme.colors.primary,
      alignSelf: "baseline"
    }, style],
    theme: theme
  }, props), title);
};
const Link = withTheme(BaseLink);
export { Link };
export default withTheme(Text);
//# sourceMappingURL=Text.js.map