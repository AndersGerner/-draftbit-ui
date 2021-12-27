function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { Image, View, StyleSheet, Platform } from "react-native"; // This must use require to work in both web as a published project and in Snack

const VectorIcons = require("@expo/vector-icons");

const Icon = _ref => {
  let {
    name,
    color,
    size,
    style,
    ...rest
  } = _ref;
  if (!name) return null;
  let iconSet = "MaterialIcons";

  if (typeof name === "string" && name.indexOf("/") !== -1) {
    [iconSet, name] = name.split("/");
  }

  if (typeof name === "string") {
    const IconSet = VectorIcons[iconSet];
    return /*#__PURE__*/React.createElement(View, {
      style: [styles.container, {
        width: size,
        height: size
      }, style]
    }, /*#__PURE__*/React.createElement(IconSet, _extends({}, rest, {
      name: name,
      color: color,
      size: size
    })));
  } else if (typeof name === "object" && name !== null && Object.prototype.hasOwnProperty.call(name, "uri") && typeof name.uri === "string" || typeof name === "number") {
    return /*#__PURE__*/React.createElement(Image, _extends({}, rest, {
      source: name,
      style: [{
        width: size,
        height: size,
        tintColor: color
      }, style]
    }));
  }

  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    style: [{
      width: size,
      height: size
    }, styles.container, style]
  }), name);
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    ...Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none"
      }
    })
  }
});
export default Icon;
//# sourceMappingURL=Icon.js.map