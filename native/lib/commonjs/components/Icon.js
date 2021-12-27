"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// This must use require to work in both web as a published project and in Snack
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
    return /*#__PURE__*/React.createElement(_reactNative.View, {
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
    return /*#__PURE__*/React.createElement(_reactNative.Image, _extends({}, rest, {
      source: name,
      style: [{
        width: size,
        height: size,
        tintColor: color
      }, style]
    }));
  }

  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({}, rest, {
    style: [{
      width: size,
      height: size
    }, styles.container, style]
  }), name);
};

const styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    ..._reactNative.Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none"
      }
    })
  }
});

var _default = Icon;
exports.default = _default;
//# sourceMappingURL=Icon.js.map