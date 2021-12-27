import React from "react";
import { withTheme } from "../theming";
import Touchable from "./Touchable";
const getWidth = (numColumns) => {
    switch (numColumns) {
        case 1:
            return "33%";
        case 2:
            return "50%";
        default:
            return "100%";
    }
};
const Card = ({ numColumns = 3, children, onPress, style, ...rest }) => {
    const width = getWidth(numColumns);
    return (React.createElement(Touchable, { disabled: !onPress, onPress: onPress, style: [style, { width }], ...rest }, children));
};
export default withTheme(Card);
