import * as React from "react";
import { ActivityIndicator, View, StyleSheet, } from "react-native";
import color from "color";
import Config from "./Config";
import Text from "./Text";
import Touchable from "./Touchable";
import Elevation from "./Elevation";
import { withTheme } from "../theming";
const FAB = ({ Icon, icon, disabled = false, type = "solid", loading = false, color: colorOverride, label, onPress, elevation = 0, style, theme: { colors, disabledOpacity, roundness, typography }, ...rest }) => {
    let backgroundColor, borderColor, textColor, borderWidth;
    const buttonColor = colorOverride || colors.primary;
    if (type === "standard" || type === "extended" || type === "fixed") {
        backgroundColor = buttonColor;
        if (disabled) {
            textColor = color(colors.surface).alpha(disabledOpacity).rgb().string();
        }
        else {
            textColor = colors.surface;
        }
    }
    else {
        backgroundColor = "transparent";
        if (disabled) {
            textColor = color(buttonColor).alpha(disabledOpacity).rgb().string();
        }
        else {
            textColor = buttonColor;
        }
    }
    if (type === "outline") {
        if (disabled) {
            borderColor = color(buttonColor).alpha(disabledOpacity).rgb().string();
        }
        else {
            borderColor = buttonColor;
        }
        borderWidth = StyleSheet.hairlineWidth;
    }
    else {
        borderColor = "transparent";
        borderWidth = 0;
    }
    const buttonStyle = {
        backgroundColor,
        borderColor,
        borderWidth,
        borderRadius: roundness,
        alignItems: "center",
        justifyContent: "center",
    };
    const buttonStyles = [styles.button, buttonStyle];
    const contentStyle = [styles.content];
    const textStyle = {
        textAlign: "center",
        color: textColor,
    };
    const iconStyle = [
        styles.icon,
        {
            width: Config.buttonIconSize,
        },
    ];
    if (type === "standard" || type === "outline") {
        buttonStyle.width = Config.FABSize;
        buttonStyle.height = Config.FABSize;
        buttonStyle.borderRadius = Config.FABBorderRadius;
        contentStyle.push({
            width: Config.FABSize,
            height: Config.FABSize,
        });
    }
    if (type === "extended" || type === "fixed") {
        iconStyle.push({
            marginLeft: 16,
            marginRight: -8,
        });
        textStyle.margin = 16;
    }
    if (type === "fixed") {
        buttonStyles.push({
            height: Config.FABFixedHeight,
            alignSelf: "stretch",
        });
    }
    return (React.createElement(Elevation, { style: [{ elevation }, style] },
        React.createElement(Touchable, { ...rest, onPress: onPress, accessibilityState: { disabled }, accessibilityRole: "button", disabled: disabled || loading, style: buttonStyles },
            React.createElement(View, { style: styles.content },
                icon && loading !== true ? (React.createElement(View, { style: iconStyle },
                    React.createElement(Icon, { name: icon, size: Config.buttonIconSize, color: textColor }))) : null,
                loading ? (React.createElement(ActivityIndicator, { size: "small", color: textColor, style: iconStyle })) : null,
                label ? (React.createElement(Text, { numberOfLines: 1, style: [textStyle, typography.button] }, label)) : null))));
};
const styles = StyleSheet.create({
    button: {
        borderStyle: "solid",
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        alignItems: "center",
        justifyContent: "center",
        width: Config.buttonIconSize,
    },
    fixed: {
        left: 0,
        right: 0,
        bottom: 0,
        height: 64,
        borderRadius: 0,
    },
});
export default withTheme(FAB);
