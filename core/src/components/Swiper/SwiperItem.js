import React from "react";
import { View, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
});
const SwiperItem = ({ children, style }) => (React.createElement(View, { style: [styles.wrapper, style] }, children));
export default SwiperItem;
