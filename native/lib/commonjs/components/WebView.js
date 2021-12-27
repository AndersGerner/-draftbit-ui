"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeWebview = require("react-native-webview");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Auto-height fix (if this is not present, scrolling on Android does not work)
const injectFirst = `
  window.ReactNativeWebView.postMessage(
    Math.max(document.body.offsetHeight, document.body.scrollHeight)
  );
`;

const NativeWebView = _ref => {
  let {
    source,
    style
  } = _ref;
  const [height, setHeight] = React.useState(0);

  const onMessage = event => setHeight(Number(event.nativeEvent.data));

  return /*#__PURE__*/React.createElement(_reactNative.ScrollView, {
    contentContainerStyle: {
      flexGrow: 1,
      height: (style === null || style === void 0 ? void 0 : style.height) || height
    }
  }, /*#__PURE__*/React.createElement(_reactNativeWebview.WebView, {
    source: source,
    style: style,
    injectedJavaScript: injectFirst,
    onMessage: onMessage
  }));
};

const BrowserWebView = _ref2 => {
  let {
    source,
    style
  } = _ref2;

  const flatStyles = _reactNative.StyleSheet.flatten(style);

  return /*#__PURE__*/React.createElement("iframe", {
    style: flatStyles,
    height: flatStyles === null || flatStyles === void 0 ? void 0 : flatStyles.height,
    width: flatStyles === null || flatStyles === void 0 ? void 0 : flatStyles.width,
    src: source === null || source === void 0 ? void 0 : source.uri,
    srcDoc: source === null || source === void 0 ? void 0 : source.html,
    allowFullScreen: true,
    seamless: true
  });
};

var _default = _reactNative.Platform.select({
  native: NativeWebView,
  default: BrowserWebView
});

exports.default = _default;
//# sourceMappingURL=WebView.js.map