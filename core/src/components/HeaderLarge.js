import * as React from "react";
import { withTheme } from "../theming";
import Header from "./Header";
const HeaderLarge = ({ Icon, title, buttonText, icon, onPress = () => { }, style, theme: { colors, typography }, }) => {
    return (React.createElement(Header, { Icon: Icon, titleTypeStyle: typography.headline4, titleColor: colors.strong, title: title, buttonText: buttonText, icon: icon, onPress: onPress, style: style }));
};
export default withTheme(HeaderLarge);
