import * as React from "react";
import { Text } from "react-native";
import { withTheme } from "../theming";
import Row from "./Row";
const RowHeadlineImageCaption = ({ title, subtitle, caption, image, style, theme: { colors, typography }, }) => {
    return (React.createElement(Row, { titleTypeStyle: typography.headline6, titleColor: colors.strong, subtitleTypeStyle: typography.body2, subtitleColor: colors.medium, title: title, subtitle: subtitle, image: image, right: () => (React.createElement(Text, { style: {
                ...typography.caption,
                color: colors.strong,
                marginLeft: 16,
            } }, caption)), style: style }));
};
export default withTheme(RowHeadlineImageCaption);
