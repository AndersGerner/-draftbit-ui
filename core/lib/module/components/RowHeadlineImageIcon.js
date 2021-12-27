import * as React from "react";
import { withTheme } from "../theming";
import Row from "./Row";
import Config from "./Config";

const RowHeadlineImageIcon = _ref => {
  let {
    Icon,
    icon,
    title,
    image,
    subtitle,
    multilineSubtitle = false,
    style,
    theme: {
      colors,
      typography
    }
  } = _ref;
  return /*#__PURE__*/React.createElement(Row, {
    titleTypeStyle: typography.headline6,
    titleColor: colors.strong,
    subtitleTypeStyle: typography.body2,
    subtitleColor: colors.medium,
    title: title,
    subtitle: subtitle,
    multilineSubtitle: multilineSubtitle,
    image: image,
    right: () => /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: multilineSubtitle ? Config.rowMultiLineIconSize : Config.rowSingleLineIconSize,
      color: colors.light,
      style: {
        marginLeft: 16,
        alignSelf: multilineSubtitle ? "flex-start" : "center",
        marginTop: multilineSubtitle ? 4 : 0
      }
    }),
    style: style
  });
};

export default withTheme(RowHeadlineImageIcon);
//# sourceMappingURL=RowHeadlineImageIcon.js.map