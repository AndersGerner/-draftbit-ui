import * as React from "react";
import { View } from "react-native";
import Touchable from "./Touchable";
import CircleImage from "./CircleImage";
import { withTheme } from "../theming";
const AvatarEdit = ({ Icon, image, size = 80, onPress = () => { }, style, theme, ...rest }) => {
    const colorStyles = {
        editBackgroundColor: theme.colors.primary,
        editIconColor: theme.colors.surface,
        editBorderColor: theme.colors.surface,
    };
    const dimensions = {
        width: size,
        height: size,
    };
    return (React.createElement(View, { style: [style, dimensions], ...rest },
        React.createElement(Touchable, { onPress: onPress },
            React.createElement(CircleImage, { source: image, size: size }),
            React.createElement(View, { style: {
                    position: "absolute",
                    top: -3,
                    right: -3,
                    borderColor: colorStyles.editBorderColor,
                    backgroundColor: colorStyles.editBackgroundColor,
                    borderRadius: size * (3 / 16),
                    padding: size * (3 / 32),
                } },
                React.createElement(Icon, { name: "MaterialIcons/edit", color: colorStyles.editIconColor, size: size * (3 / 16) })))));
};
export default withTheme(AvatarEdit);
