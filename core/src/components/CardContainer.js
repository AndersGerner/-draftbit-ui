import React from "react";
import { View, Text, } from "react-native";
import color from "color";
import Image from "./Image";
import Card from "./DeprecatedCardWrapper";
import Elevation from "./Elevation";
import { withTheme } from "../theming";
import Config from "./Config";
const ICON_CONTAINER_SIZE = Config.cardIconSize * 2;
const ICON_CONTAINER_PADDING = Config.cardIconSize / 2 - 1;
const CardContainer = ({ Icon, icon, image = Config.cardImageUrl, title, leftDescription, rightDescription, textCentered, aspectRatio = 1.5, elevation = 2, numColumns = 3, theme: { colors, roundness, typography }, style, onPress, ...rest }) => {
    let textJustification;
    let titleStyle;
    if (textCentered && !rightDescription) {
        textJustification = "center";
    }
    else {
        textJustification = "space-between";
    }
    switch (numColumns) {
        case 2:
            titleStyle = typography.headline6;
            break;
        case 3:
            titleStyle = typography.headline5;
            break;
    }
    return (React.createElement(Card, { style: style, onPress: onPress, numColumns: numColumns, ...rest },
        React.createElement(Elevation, { style: { elevation, borderRadius: roundness } },
            React.createElement(View, { style: {
                    borderRadius: roundness,
                    overflow: "hidden",
                    backgroundColor: colors.surface,
                } },
                React.createElement(Image, { style: { aspectRatio }, source: typeof image === "string" ? { uri: image } : image, resizeMode: "cover" }),
                React.createElement(View, { style: {
                        padding: numColumns === 1 ? 8 : 16,
                    } },
                    title ? (React.createElement(View, { style: {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: textJustification,
                        } },
                        React.createElement(Text, { numberOfLines: 1, style: [titleStyle, { color: colors.strong }] }, title))) : null,
                    leftDescription ? (React.createElement(View, { style: {
                            flexDirection: "row",
                            justifyContent: textJustification,
                            alignItems: "center",
                            marginTop: numColumns === 3 ? 4 : 4 / 2,
                        } },
                        React.createElement(Text, { numberOfLines: 1, style: [typography.body2, { color: colors.medium }] }, leftDescription),
                        rightDescription ? (React.createElement(Text, { numberOfLines: 1, style: [typography.subtitle2, { color: colors.light }] }, rightDescription)) : null)) : null),
                icon ? (React.createElement(Elevation, { style: {
                        elevation: Config.cardIconElevation,
                        position: "absolute",
                        top: 12,
                        right: 12,
                        width: ICON_CONTAINER_SIZE,
                        height: ICON_CONTAINER_SIZE,
                        padding: ICON_CONTAINER_PADDING,
                        borderRadius: ICON_CONTAINER_SIZE,
                        backgroundColor: color(colors.strong)
                            .alpha(Config.cardIconBackgroundOpacity)
                            .rgb()
                            .string(),
                    } },
                    React.createElement(Icon, { name: icon, size: Config.cardIconSize, color: colors.surface }))) : null))));
};
export default withTheme(CardContainer);
