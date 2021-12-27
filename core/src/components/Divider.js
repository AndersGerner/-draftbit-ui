import * as React from "react";
import { StyleSheet, View } from "react-native";
import { withTheme } from "../theming";
const Divider = ({ style, color, theme: { colors }, ...rest }) => {
    return (React.createElement(View, { style: [
            {
                backgroundColor: color || colors.divider,
                height: StyleSheet.hairlineWidth,
            },
            style,
        ], ...rest }));
};
export default withTheme(Divider);
