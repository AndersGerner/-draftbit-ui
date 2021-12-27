import * as React from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
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

  return /*#__PURE__*/React.createElement(ScrollView, {
    contentContainerStyle: {
      flexGrow: 1,
      height: (style === null || style === void 0 ? void 0 : style.height) || height
    }
  }, /*#__PURE__*/React.createElement(WebView, {
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
  const flatStyles = StyleSheet.flatten(style);
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

export default Platform.select({
  native: NativeWebView,
  default: BrowserWebView
});
//# sourceMappingURL=WebView.js.mapp