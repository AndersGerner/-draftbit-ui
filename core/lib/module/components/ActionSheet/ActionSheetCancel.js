import React from "react";
import ActionSheetItem from "./ActionSheetItem";

const ActionSheetCancel = _ref => {
  let {
    label = "Cancel",
    color,
    style,
    onPress
  } = _ref;
  return /*#__PURE__*/React.createElement(ActionSheetItem, {
    label: label,
    color: color || "#FF453A",
    style: [style],
    onPress: onPress
  });
};

export default ActionSheetCancel;
//# sourceMappingURL=ActionSheetCancel.js.map