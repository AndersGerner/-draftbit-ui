// @ts-nocheck
import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Title, Subtitle } from "./Typography";
import Image from "./Image";
import Surface from "./Surface";
import Config from "./Config";
import { withTheme } from "../theming";

const CardInline = _ref => {
  let {
    image = Config.cardImageUrl,
    title,
    subtitle,
    aspectRatio = 1.5,
    elevation = 2,
    style,
    titleStyle,
    subtitleStyle,
    onPress
  } = _ref;
  const {
    alignItems,
    justifyContent,
    width,
    height
  } = StyleSheet.flatten(style || {});
  const imageStyles = width && height ? {
    width,
    height
  } : {
    aspectRatio
  };
  return /*#__PURE__*/React.createElement(Surface, {
    style: [{
      elevation
    }, style]
  }, /*#__PURE__*/React.createElement(Pressable, {
    disabled: !onPress,
    onPress: onPress,
    style: _ref2 => {
      let {
        pressed
      } = _ref2;
      return [{
        opacity: pressed ? 0.8 : 1
      }];
    }
  }, /*#__PURE__*/React.createElement(Image, {
    style: imageStyles,
    source: typeof image === "string" ? {
      uri: image
    } : image,
    resizeMode: "cover"
  }), /*#__PURE__*/React.createElement(View, {
    style: [styles.overlay, {
      justifyContent,
      alignItems
    }]
  }, title ? /*#__PURE__*/React.createElement(Title, {
    style: [{
      color: "white"
    }, titleStyle],
    text: title
  }) : null, subtitle ? /*#__PURE__*/React.createElement(Subtitle, {
    style: [{
      color: "rgba(255, 255, 255, 0.7)"
    }, subtitleStyle],
    text: subtitle
  }) : null)));
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  }
});
export default withTheme(CardInline);
//# sourceMappingURL=CardInline.js.map