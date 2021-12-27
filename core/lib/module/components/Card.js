import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import Image from "./Image";
import Surface from "./Surface";
import { Title, Subtitle, Caption } from "./Typography";
import { withTheme } from "../theming";
import Config from "./Config";
const ICON_SIZE = Config.cardIconSize;
const ICON_CONTAINER_SIZE = Config.cardIconSize * 2;
const ICON_CONTAINER_PADDING = Config.cardIconSize / 2 - 1;
const ICON_ELEVATION = Config.cardIconElevation;
export const TopRightCircleIcon = withTheme(_ref => {
  let {
    Icon,
    icon,
    theme,
    onPress
  } = _ref;
  return /*#__PURE__*/React.createElement(Surface, {
    style: {
      justifyContent: "center",
      alignItems: "center",
      elevation: ICON_ELEVATION,
      position: "absolute",
      top: 12,
      right: 12,
      width: ICON_CONTAINER_SIZE,
      height: ICON_CONTAINER_SIZE,
      padding: ICON_CONTAINER_PADDING,
      borderRadius: ICON_CONTAINER_SIZE,
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    }
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
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: ICON_SIZE,
    color: theme.colors.surface
  })));
});

const Card = _ref3 => {
  let {
    Icon,
    image = Config.cardImageUrl,
    title,
    subtitle,
    description,
    textCentered,
    icon,
    aspectRatio = 1.5,
    elevation = 2,
    style,
    onPress,
    onPressIcon,
    titleStyle,
    subtitleStyle,
    descriptionStyle,
    theme,
    children
  } = _ref3;
  const {
    backgroundColor: bgColor,
    padding,
    ...styles
  } = StyleSheet.flatten(style || {});
  const backgroundColor = bgColor ? bgColor : theme.colors.surface;
  const innerPadding = padding ? padding : 12;
  return /*#__PURE__*/React.createElement(Surface, {
    style: [{
      elevation,
      backgroundColor
    }, styles]
  }, /*#__PURE__*/React.createElement(Pressable, {
    disabled: !onPress,
    onPress: onPress,
    style: _ref4 => {
      let {
        pressed
      } = _ref4;
      return [{
        opacity: pressed ? 0.8 : 1
      }];
    }
  }, /*#__PURE__*/React.createElement(Image, {
    style: {
      aspectRatio
    },
    source: typeof image === "string" ? {
      uri: image
    } : image,
    resizeMode: "cover"
  }), /*#__PURE__*/React.createElement(View, {
    style: {
      padding: innerPadding
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      alignItems: textCentered ? "center" : "flex-start"
    }
  }, title || title && title !== "" ? /*#__PURE__*/React.createElement(Title, {
    text: title,
    style: titleStyle
  }) : null, subtitle || subtitle && subtitle !== "" ? /*#__PURE__*/React.createElement(Subtitle, {
    text: subtitle,
    style: subtitleStyle
  }) : null, description || description && description !== "" ? /*#__PURE__*/React.createElement(View, {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Caption, {
    text: description,
    style: descriptionStyle
  })) : null, children)), icon ? /*#__PURE__*/React.createElement(TopRightCircleIcon, {
    Icon: Icon,
    icon: icon,
    onPress: onPressIcon
  }) : null));
};

export default withTheme(Card);
//# sourceMappingURL=Card.js.map