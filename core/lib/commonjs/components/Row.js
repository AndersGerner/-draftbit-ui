"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../theming");

var _Config = _interopRequireDefault(require("./Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, {
      padding: 16
    }, style]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.leftContainer
  }, image && /*#__PURE__*/React.createElement(_reactNative.Image, {
    source: typeof image === "string" ? {
      uri: image
    } : image,
    style: {
      marginRight: 12,
      width: subtitle ? _Config.default.rowMultiLineImageSize : _Config.default.rowSingleLineImageSize,
      height: subtitle ? _Config.default.rowMultiLineImageSize : _Config.default.rowSingleLineImageSize
    }
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.textContainer
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [titleTypeStyle, {
      color: titleColor
    }],
    numberOfLines: 1
  }, title), subtitle ? /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [subtitleTypeStyle, {
      color: subtitleColor,
      marginTop: 4
    }],
    numberOfLines: multilineSubtitle ? undefined : 1
  }, subtitle) : null)), right && right());
};

const styles = _reactNative.StyleSheet.create({
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

var _default = (0, _theming.withTheme)(Row);

exports.default = _default;
//# sourceMappingURL=Row.js.map