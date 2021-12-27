import * as React from "react";
import { View, StyleSheet, Pressable, } from "react-native";
import { withTheme } from "../theming";
const StarRating = ({ Icon, starSize = 16, maxStars = 5, rating = 0, defaultValue, isEditable = false, activeColor, inactiveColor, style, onPress, ...rest }) => {
    const [localRating, setLocalRating] = React.useState(rating || defaultValue || 0);
    React.useEffect(() => {
        if (rating != null) {
            setLocalRating(rating);
        }
    }, [rating]);
    React.useEffect(() => {
        if (defaultValue != null) {
            setLocalRating(defaultValue);
        }
    }, [defaultValue]);
    const ratingHandler = React.useCallback((r) => {
        setLocalRating(r);
        !!onPress && onPress(r);
    }, [onPress]);
    const ratingRounded = Math.round(localRating * 2) / 2;
    return (React.createElement(View, { style: [styles.container, style], ...rest }, [...Array(maxStars)].map((_, i) => (React.createElement(View, { key: i, style: { display: "flex" } },
        React.createElement(Icon, { name: ratingRounded - i === 0.5
                ? "MaterialIcons/star-half"
                : "MaterialIcons/star", size: starSize, color: ratingRounded > i ? activeColor : inactiveColor }),
        isEditable && (React.createElement(View, { style: styles.touchContainer },
            React.createElement(Pressable, { style: styles.pressable, onPress: () => ratingHandler(i + 0.5) }),
            React.createElement(Pressable, { style: styles.pressable, onPress: () => ratingHandler(i + 1) }))))))));
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    touchContainer: {
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 1,
    },
    pressable: {
        flex: 1,
        height: "100%",
        width: "50%",
    },
});
export default withTheme(StarRating);
