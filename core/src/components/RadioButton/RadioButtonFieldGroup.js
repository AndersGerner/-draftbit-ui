import React from "react";
import { View } from "react-native";
import Text from "../Text";
import { withTheme } from "../../theming";
import RadioButtonGroup from "./RadioButtonGroup";
const RadioButtonFieldGroup = ({ label, children, theme, labelStyle, style, ...rest }) => {
    return (React.createElement(View, { style: style },
        React.createElement(Text, { style: [
                {
                    fontSize: theme.typography.headline4.fontSize,
                    color: theme.typography.headline4.color,
                },
                labelStyle,
            ] }, label),
        React.createElement(RadioButtonGroup, { theme: theme, ...rest }, children)));
};
export default withTheme(RadioButtonFieldGroup);
