import * as React from "react";
import { ViewStyle } from "react-native";
import { WebViewSourceHtml, WebViewSourceUri } from "react-native-webview/lib/WebViewTypes";
interface Props {
    source: WebViewSourceUri | WebViewSourceHtml;
    style?: ViewStyle;
}
declare const _default: React.FC<Props>;
export default _default;
