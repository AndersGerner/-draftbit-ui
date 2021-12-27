import React from "react";
import { View, Text, } from "react-native";
import color from "color";
import Image from "./Image";
import Card from "./DeprecatedCardWrapper";
import Elevation from "./Elevation";
import StarRating from "./StarRating";
import { withTheme } from "../theming";
import Config from "./Config";
const ICON_CONTAINER_SIZE = Config.cardIconSize * 2;
const ICON_CONTAINER_PADDING = Config.cardIconSize / 2 - 1;
const CardContainerRating = ({ Icon, icon, image = Config.cardImageUrl, title, leftDescription, rightDescription, rating, aspectRatio = 1.5, elevation = 2, numColumns = 3, theme: { colors, roundness, typography }, style, onPress, ...rest }) => {
    let titleStyle, rightDescriptionStyle;
    switch (numColumns) {
        case 2:
            titleStyle = typography.headline6;
            rightDescriptionStyle = typography.body2;
            break;
        case 3:
            titleStyle = typography.headline5;
            rightDescriptionStyle = typography.caption;
            break;
    }
    return (React.createElement(Card, { style: style, onPress: onPress, numColumns: numColumns, ...rest },
        React.createElement(Elevation, { style: { elevation, borderRadius: roundness } },
            React.createElement(View, { style: {
                    borderRadius: roundness,
                    overflow: "hidden",
                    backgroundColor: colors.background,
                    //background color is needed for bug on android 9 - https://github.com/facebook/react-native/issues/25093
                } },
                React.createElement(Image, { style: { aspectRatio }, source: typeof image === "string" ? { uri: image } : image, resizeMode: "cover" }),
                React.createElement(View, { style: {
                        padding: numColumns === 1 ? 8 : 16,
                    } },
                    title ? (React.createElement(View, { style: {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        } },
                        React.createElement(Text, { numberOfLines: 1, style: [titleStyle, { color: colors.strong }] }, title))) : null,
                    leftDescription ? (React.createElement(Text, { numberOfLines: 1, style: [
                            typography.body2,
                            {
                                color: colors.medium,
                                marginTop: numColumns === 3 ? 4 : 4 / 2,
                            },
                        ] }, leftDescription)) : null,
                    React.createElement(View, { style: {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: numColumns === 3 ? 16 : 12,
                        } },
                        React.createElement(StarRating, { Icon: Icon, starSize: numColumns === 1 ? 10 : 16, rating: rating }),
                        React.createElement(Text, { style: [
                                rightDescriptionStyle,
                                {
                                    color: colors.medium,
                                    marginLeft: 8,
                                },
                            ], numberOfLines: 1 }, rightDescription))),
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
export default withTheme(CardContainerRating);
