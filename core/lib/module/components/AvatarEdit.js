function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { View } from "react-native";
import Touchable from "./Touchable";
import CircleImage from "./CircleImage";
import { withTheme } from "../theming";

const AvatarEdit = _ref => {
  let {
    Icon,
    image,
    size = 80,
    onPress = () => {},
    style,
    theme,
    ...rest
  } = _ref;
  const colorStyles = {
    editBackgroundColor: theme.colors.primary,
    editIconColor: theme.colors.surface,
    editBorderColor: theme.colors.surface
  };
  const dimensions = {
    width: size,
    height: size
  };
  return /*#__PURE__*/React.createElement(View, _extends({
    style: [style, dimensions]
  }, rest), /*#__PURE__*/React.createElement(Touchable, {
    onPress: onPress
  }, /*#__PURE__*/React.createElement(CircleImage, {
    source: image,
    size: size
  }), /*#__PURE__*/React.createElement(View, {
    style: {
      position: "absolute",
      top: -3,
      right: -3,
      borderColor: colorStyles.editBorderColor,
      backgroundColor: colorStyles.editBackgroundColor,
      borderRadius: size * (3 / 16),
      padding: size * (3 / 32)
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MaterialIcons/edit",
    color: colorStyles.editIconColor,
    size: size * (3 / 16)
  }))));
};

export default withTheme(AvatarEdit);
//# sourceMappingURL=AvatarEdit.js.map