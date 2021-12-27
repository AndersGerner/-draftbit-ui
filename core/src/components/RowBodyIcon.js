import * as React from "react";
import { withTheme } from "../theming";
import Row from "./Row";
import Config from "./Config";
const RowBodyIcon = ({ Icon, title, subtitle, icon, style, theme: { colors, typography }, }) => {
    return (React.createElement(Row, { titleTypeStyle: typography.body1, titleColor: colors.medium, subtitleTypeStyle: typography.subtitle2, subtitleColor: colors.light, title: title, subtitle: subtitle, right: () => (React.createElement(Icon, { name: icon, size: Config.rowSingleLineIconSize, color: colors.light, style: { marginLeft: 16 } })), style: style }));
};
export default withTheme(RowBodyIcon);
