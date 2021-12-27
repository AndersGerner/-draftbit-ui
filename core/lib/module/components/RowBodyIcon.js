import * as React from "react";
import { withTheme } from "../theming";
import Row from "./Row";
import Config from "./Config";

const RowBodyIcon = _ref => {
  let {
    Icon,
    title,
    subtitle,
    icon,
    style,
    theme: {
      colors,
      typography
    }
  } = _ref;
  return /*#__PURE__*/React.createElement(Row, {
    titleTypeStyle: typography.body1,
    titleColor: colors.medium,
    subtitleTypeStyle: typography.subtitle2,
    subtitleColor: colors.light,
    title: title,
    subtitle: subtitle,
    right: () => /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: Config.rowSingleLineIconSize,
      color: colors.light,
      style: {
        marginLeft: 16
      }
    }),
    style: style
  });
};

export default withTheme(RowBodyIcon);
//# sourceMappingURL=RowBodyIcon.js.map