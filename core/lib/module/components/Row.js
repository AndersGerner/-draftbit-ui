import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { withTheme } from "../theming";
import Config from "./Config";

const Row = _ref => {
  let {
    titleTypeStyle,
    titleColor,
    subtitleTypeStyle,
    subtitleColor,
    title,
    subtitle,
    multilineSubtitle,
    image,
    right,
    style
  } = _ref;
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, {
      padding: 16
    }, style]
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.leftContainer
  }, image && /*#__PURE__*/React.createElement(Image, {
    source: typeof image === "string" ? {
      uri: image
    } : image,
    style: {
      marginRight: 12,
      width: subtitle ? Config.rowMultiLineImageSize : Config.rowSingleLineImageSize,
      height: subtitle ? Config.rowMultiLineImageSize : Config.rowSingleLineImageSize
    }
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.textContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: [titleTypeStyle, {
      color: titleColor
    }],
    numberOfLines: 1
  }, title), subtitle ? /*#__PURE__*/React.createElement(Text, {
    style: [subtitleTypeStyle, {
      color: subtitleColor,
      marginTop: 4
    }],
    numberOfLines: multilineSubtitle ? undefined : 1
  }, subtitle) : null)), right && right());
};

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: "row",
    flex: 1
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textContainer: {
    flex: 1,
    justifyContent: "center"
  }
});
export default withTheme(Row);
//# sourceMappingURL=Row.js.map