import * as React from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
// Auto-height fix (if this is not present, scrolling on Android does not work)
const injectFirst = `
  window.ReactNativeWebView.postMessage(
    Math.max(document.body.offsetHeight, document.body.scrollHeight)
  );
`;
const NativeWebView = ({ source, style }) => {
    const [height, setHeight] = React.useState(0);
    const onMessage = (event) => setHeight(Number(event.nativeEvent.data));
    return (React.createElement(ScrollView, { contentContainerStyle: { flexGrow: 1, height: style?.height || height } },
        React.createElement(WebView, { source: source, style: style, injectedJavaScript: injectFirst, onMessage: onMessage })));
};
const BrowserWebView = ({ source, style }) => {
    const flatStyles = StyleSheet.flatten(style);
    return React.createElement("iframe", {
        style: flatStyles,
        height: flatStyles?.height,
        width: flatStyles?.width,
        src: source?.uri,
        srcDoc: source?.html,
        allowFullScreen: true,
        seamless: true,
    });
};
export default Platform.select({
    native: NativeWebView,
    default: BrowserWebView,
});
