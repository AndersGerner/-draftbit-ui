function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { View, Text } from "react-native";
import Image from "./Image";
import Card from "./DeprecatedCardWrapper";
import Elevation from "./Elevation";
import { withTheme } from "../theming";
import Config from "./Config";

const CardContainerShortImage = _ref => {
  let {
    image = Config.squareImageUrl,
    title,
    subtitle,
    mode = "left",
    aspectRatio = 1,
    elevation = 2,
    theme: {
      colors,
      roundness,
      typography
    },
    style,
    onPress,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(Card, _extends({
    style: style,
    onPress: onPress
  }, rest), /*#__PURE__*/React.createElement(Elevation, {
    style: {
      elevation,
      borderRadius: roundness
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      overflow: "hidden",
      flexDirection: "row",
      justifyContent: mode === "right" ? "space-between" : "flex-start",
      borderRadius: roundness
    }
  }, mode === "left" && /*#__PURE__*/React.createElement(Image, {
    style: {
      aspectRatio
    },
    source: typeof image === "string" ? {
      uri: image
    } : image,
    resizeMode: "cover"
  }), /*#__PURE__*/React.createElement(View, {
    style: {
      padding: 16,
      backgroundColor: colors.surface,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    style: [typography.headline5, {
      color: colors.strong
    }]
  }, title), subtitle ? /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    style: [typography.body2, {
      color: colors.medium,
      marginTop: 4
    }]
  }, subtitle) : null), mode === "right" && /*#__PURE__*/React.createElement(Image, {
    style: {
      aspectRatio
    },
    source: typeof image === "string" ? {
      uri: image
    } : image,
    resizeMode: "cover"
  }))));
};

export default withTheme(CardContainerShortImage);
//# sourceMappingURL=CardContainerShortImage.js.map