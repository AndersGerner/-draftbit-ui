import * as React from "react";
import { StyleSheet, ScrollView as NativeScrollView, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { withTheme } from "../theming";
function ScrollView({ children, style, }) {
    return (React.createElement(NativeScrollView, { contentContainerStyle: [
            {
                flexGrow: 1,
            },
            style,
        ] }, children));
}
function ScreenContainer({ hasSafeArea = false, scrollable = false, hasBottomSafeArea, hasTopSafeArea, theme, style, children, ...rest }) {
    const backgroundColor = theme.colors.background;
    const edges = ["left", "right"];
    if (hasSafeArea || hasTopSafeArea) {
        edges.push("top");
    }
    if (hasSafeArea || hasBottomSafeArea) {
        edges.push("bottom");
    }
    return (React.createElement(SafeAreaView, { edges: edges, style: [
            styles.container,
            {
                backgroundColor,
            },
        ], ...rest },
        React.createElement(View, { style: [styles.container, { backgroundColor }, style] }, scrollable ? (React.createElement(ScrollView, { style: style }, children)) : (children))));
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default withTheme(ScreenContainer);
