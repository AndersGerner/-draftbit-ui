import * as React from "react";
import { Pressable, StyleSheet, View, } from "react-native";
import Text from "../Text";
import { extractStyles } from "../../utilities";
import { withTheme } from "../../theming";
const AccordionItem = ({ Icon, icon, label, style, iconColor, theme, ...rest }) => {
    const { textStyles, viewStyles } = extractStyles(style);
    return (React.createElement(Pressable, { style: [styles.container, viewStyles], ...rest },
        React.createElement(View, { style: styles.row },
            icon ? (React.createElement(Icon, { name: icon, size: 24, color: iconColor || theme.colors.primary })) : null,
            React.createElement(View, { style: [styles.item, styles.content] },
                React.createElement(Text, { selectable: false, style: textStyles }, label)))));
};
const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 8,
    },
    item: {
        marginVertical: 6,
        paddingLeft: 8,
    },
    content: {
        flex: 1,
        justifyContent: "center",
    },
});
export default withTheme(AccordionItem);
