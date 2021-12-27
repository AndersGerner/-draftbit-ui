import React from "react";
import { View, StyleSheet } from "react-native";
import Portal from "../Portal/Portal";
import Touchable from "../Touchable";
import ActionSheetCancel from "./ActionSheetCancel";

const ActionSheet = _ref => {
  let {
    visible = false,
    onClose,
    children
  } = _ref;
  return visible ? /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(Touchable, {
    style: styles.wrapper,
    onPress: onClose
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.overlay
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.groupWrapper
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.group
  }, React.Children.toArray(children).filter(child => (child === null || child === void 0 ? void 0 : child.type) !== ActionSheetCancel)), /*#__PURE__*/React.createElement(View, {
    style: styles.group
  }, React.Children.toArray(children).filter(child => child.type === ActionSheetCancel))))) : /*#__PURE__*/React.createElement(React.Fragment, null);
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000000",
    opacity: 0.3
  },
  groupWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    display: "flex",
    marginBottom: 25
  },
  group: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
    marginHorizontal: 7,
    marginVertical: 2.5,
    overflow: "hidden"
  }
});
export default ActionSheet;
//# sourceMappingURL=ActionSheet.js.map