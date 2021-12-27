import * as React from "react";
import { withTheme } from "../theming";
import Header from "./Header";

const HeaderOverline = _ref => {
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
    titleTypeStyle: typography.overline,
    titleColor: colors.light,
    title: title && title.toUpperCase(),
    buttonText: buttonText,
    icon: icon,
    dividerTopMargin: 12,
    onPress: onPress,
    style: style
  });
};

export default withTheme(HeaderOverline);
//# sourceMappingURL=HeaderOverline.js.map