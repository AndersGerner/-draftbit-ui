function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* README: Internal Image component used for stuff like Card. DO NOT EXPORT! */
import React from "react";
import { Image as NativeImage, StyleSheet } from "react-native";
import Config from "./Config";
import AspectRatio from "./AspectRatio";

const generateDimensions = _ref => {
  let {
    aspectRatio,
    width,
    height
  } = _ref;

  if (aspectRatio && !width && !height) {
    return {
      aspectRatio,
      width: "100%"
    };
  }

  if (aspectRatio && height) {
    return {
      aspectRatio,
      height,
      width: aspectRatio * height
    };
  }

  if (aspectRatio && width) {
    return {
      aspectRatio,
      width,
      height: width / aspectRatio
    };
  }

  return {
    width,
    height
  };
};

const Image = _ref2 => {
  let {
    source,
    resizeMode = "cover",
    style,
    ...props
  } = _ref2;
  let imageSource = source === null || source === undefined ? Config.placeholderImageURL : source;
  const styles = StyleSheet.flatten(style || {});
  const {
    aspectRatio,
    width,
    height
  } = generateDimensions(styles);

  if (aspectRatio) {
    return /*#__PURE__*/React.createElement(AspectRatio, {
      style: [style, {
        width,
        height,
        aspectRatio
      }]
    }, /*#__PURE__*/React.createElement(NativeImage, _extends({}, props, {
      source: imageSource,
      resizeMode: resizeMode,
      style: [style, {
        height: "100%",
        width: "100%"
      }]
    })));
  }

  return /*#__PURE__*/React.createElement(NativeImage, _extends({}, props, {
    source: source,
    resizeMode: resizeMode,
    style: style
  }));
};

export default Image;
//# sourceMappingURL=Image.js.map