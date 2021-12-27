import * as React from "react";
import { Text as NativeText, I18nManager } from "react-native";
import { withTheme } from "../theming";
class Text extends React.Component {
    _root;
    setNativeProps(args) {
        return this._root && this._root.setNativeProps(args);
    }
    render() {
        const { style, ...rest } = this.props;
        const writingDirection = I18nManager.isRTL ? "rtl" : "ltr";
        return (React.createElement(NativeText, { ...rest, ref: (c) => {
                this._root = c;
            }, style: [
                {
                    textAlign: "left",
                    writingDirection,
                },
                style,
            ] }));
    }
}
export const BaseLink = ({ style, theme, title, ...props }) => {
    return (React.createElement(Text, { hitSlop: 8, style: [{ color: theme.colors.primary, alignSelf: "baseline" }, style], theme: theme, ...props }, title));
};
const Link = withTheme(BaseLink);
export { Link };
export default withTheme(Text);
