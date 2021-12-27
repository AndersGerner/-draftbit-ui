import * as React from "react";
import { withTheme } from "../theming";
import Header from "./Header";

const HeaderMedium = _ref => {
  let {
    Icon,
    title,
    buttonText,
    icon,
    onPress = () => {},
    style,
    theme: {
      colors,
      typography
    }
  } = _ref;
  return /*#__PURE__*/React.createElement(Header, {
    Icon: Icon,
    titleTypeStyle: typography.headline6,
    titleColor: colors.strong,
    title: title,
    buttonText: buttonText,
    icon: icon,
    onPress: onPress,
    style: style
  });
};

export default withTheme(HeaderMedium);
//# sourceMappingURL=HeaderMedium.js.map