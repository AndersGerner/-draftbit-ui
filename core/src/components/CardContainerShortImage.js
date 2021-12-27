import React from "react";
import { View, Text, } from "react-native";
import Image from "./Image";
import Card from "./DeprecatedCardWrapper";
import Elevation from "./Elevation";
import { withTheme } from "../theming";
import Config from "./Config";
const CardContainerShortImage = ({ image = Config.squareImageUrl, title, subtitle, mode = "left", aspectRatio = 1, elevation = 2, theme: { colors, roundness, typography }, style, onPress, ...rest }) => {
    return (React.createElement(Card, { style: style, onPress: onPress, ...rest },
        React.createElement(Elevation, { style: {
                elevation,
                borderRadius: roundness,
            } },
            React.createElement(View, { style: {
                    overflow: "hidden",
                    flexDirection: "row",
                    justifyContent: mode === "right" ? "space-between" : "flex-start",
                    borderRadius: roundness,
                } },
                mode === "left" && (React.createElement(Image, { style: { aspectRatio }, source: typeof image === "string" ? { uri: image } : image, resizeMode: "cover" })),
                React.createElement(View, { style: {
                        padding: 16,
                        backgroundColor: colors.surface,
                        flex: 1,
                    } },
                    React.createElement(Text, { numberOfLines: 1, style: [typography.headline5, { color: colors.strong }] }, title),
                    subtitle ? (React.createElement(Text, { numberOfLines: 1, style: [
                            typography.body2,
                            { color: colors.medium, marginTop: 4 },
                        ] }, subtitle)) : null),
                mode === "right" && (React.createElement(Image, { style: { aspectRatio }, source: typeof image === "string" ? { uri: image } : image, resizeMode: "cover" }))))));
};
export default withTheme(CardContainerShortImage);
