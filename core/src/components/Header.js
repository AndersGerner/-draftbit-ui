import * as React from "react";
import { View, Text, StyleSheet, } from "react-native";
import { withTheme } from "../theming";
import Divider from "./Divider";
import Touchable from "./Touchable";
import Config from "./Config";
const Header = ({ Icon, titleTypeStyle, titleColor, title, buttonText, dividerTopMargin, icon, onPress, style, theme: { colors, typography }, }) => {
    return (React.createElement(View, { style: [styles.container, style] },
        React.createElement(View, { style: styles.topContainer },
            React.createElement(Text, { style: [
                    titleTypeStyle,
                    {
                        color: titleColor,
                        flex: 1,
                    },
                ], numberOfLines: 1 }, title),
            onPress && (React.createElement(Touchable, { style: { alignSelf: "center", marginLeft: 12 }, onPress: onPress },
                React.createElement(View, { style: styles.buttonContainer },
                    React.createElement(Text, { style: [
                            typography.subtitle2,
                            {
                                color: colors.light,
                                marginRight: 8,
                            },
                        ], numberOfLines: 1 }, buttonText),
                    React.createElement(Icon, { name: icon, size: Config.headerIconSize, color: colors.light }))))),
        React.createElement(Divider, { style: { marginTop: dividerTopMargin || 16 } })));
};
const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});
export default withTheme(Header);
