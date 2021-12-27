import * as React from "react";
import { View, StyleSheet, Pressable, } from "react-native";
import Text from "../Text";
import { withTheme } from "../../theming";
const AccordionGroup = ({ Icon, openColor, closedColor, caretColor, icon, iconSize = 24, style, label, children, expanded: expandedProp, theme, }) => {
    const [expanded, setExpanded] = React.useState(expandedProp || false);
    const handlePressAction = () => {
        if (expandedProp === undefined) {
            setExpanded(!expanded);
        }
    };
    const expandedInternal = expandedProp !== undefined ? expandedProp : expanded;
    const expandedColor = openColor || theme.colors.primary;
    const collapsedColor = closedColor || theme.colors.primary;
    const labelColor = expanded ? expandedColor : collapsedColor;
    return (React.createElement(React.Fragment, null,
        React.createElement(Pressable, { style: [style], onPress: handlePressAction, accessibilityRole: "button" },
            React.createElement(View, { style: styles.row },
                icon ? (React.createElement(Icon, { name: icon, size: iconSize, color: labelColor, style: styles.icon })) : null,
                React.createElement(View, { style: [styles.item, styles.content] },
                    React.createElement(Text, { selectable: false, style: [
                            styles.label,
                            {
                                color: labelColor,
                            },
                            style,
                        ] }, label)),
                React.createElement(View, { style: [styles.item] },
                    React.createElement(Icon, { name: expanded
                            ? "MaterialIcons/keyboard-arrow-up"
                            : "MaterialIcons/keyboard-arrow-down", color: caretColor, size: 24 })))),
        expandedInternal
            ? React.Children.map(children, (child) => {
                if (React.isValidElement(child) &&
                    !child.props.left &&
                    !child.props.right) {
                    return React.cloneElement(child, {
                        style: child.props.style,
                    });
                }
                return child;
            })
            : null));
};
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    label: {
        fontSize: 16,
    },
    item: {
        margin: 8,
    },
    content: {
        flex: 1,
        justifyContent: "center",
    },
    icon: {
        marginLeft: 8,
    },
});
export default withTheme(AccordionGroup);
