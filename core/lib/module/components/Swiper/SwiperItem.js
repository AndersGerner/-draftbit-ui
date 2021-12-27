import React from "react";
import { View, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});

const SwiperItem = _ref => {
  let {
    children,
    style
  } = _ref;
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.wrapper, style]
  }, children);
};

export default SwiperItem;
//# sourceMappingURL=SwiperItem.js.map