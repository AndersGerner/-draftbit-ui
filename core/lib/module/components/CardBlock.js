function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { View, Text } from "react-native";
import Image from "./Image";
import Card from "./DeprecatedCardWrapper";
import Elevation from "./Elevation";
import { withTheme } from "../theming";
import Config from "./Config";

const CardBlock = _ref => {
  let {
    image = Config.cardImageUrl,
    title,
    leftDescription,
    rightDescription,
    titleCentered,
    aspectRatio = 1.5,
    elevation = 2,
    numColumns = 3,
    theme: {
      colors,
      roundness,
      typography
    },
    style,
    onPress,
    ...rest
  } = _ref;
  let titleJustification;
  let titleStyle;

  if (titleCentered && !leftDescription && !rightDescription) {
    titleJustification = "center";
  } else {
    titleJustification = "space-between";
  }

  if (numColumns === 1) {
    titleStyle = typography.button;
  } else if (numColumns === 2) {
    titleStyle = typography.headline6;
  } else {
    titleStyle = typography.headline5;
  }

  const rightDescriptionStyles = [typography.subtitle2, {
    color: colors.light
  }];
  return /*#__PURE__*/React.createElement(Card, _extends({
    style: style,
    onPress: onPress,
    numColumns: numColumns
  }, rest), /*#__PURE__*/React.createElement(View, {
    style: {
      backgroundColor: colors.background
    }
  }, /*#__PURE__*/React.createElement(Elevation, {
    style: {
      elevation,
      borderRadius: roundness
    }
  }, /*#__PURE__*/React.createElement(Image, {
    style: {
      borderRadius: roundness,
      aspectRatio
    },
    source: typeof image === "string" ? {
      uri: image
    } : image,
    resizeMode: "cover"
  })), title ? /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: titleJustification,
      marginTop: numColumns === 3 ? 16 : 12
    }
  }, /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    style: [titleStyle, {
      color: colors.strong
    }]
  }, title), !leftDescription && rightDescription ? /*#__PURE__*/React.createElement(Text, {
    style: rightDescriptionStyles
  }, rightDescription) : null) : null, leftDescription ? /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: numColumns === 3 ? 4 : 4 / 2
    }
  }, /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    style: [typography.body2, {
      color: colors.medium
    }]
  }, leftDescription), rightDescription ? /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    style: rightDescriptionStyles
  }, rightDescription) : null) : null));
};

export default withTheme(CardBlock);
//# sourceMappingURL=CardBlock.js.map