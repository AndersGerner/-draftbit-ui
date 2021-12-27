import React from "react";
import { View } from "react-native";
import SwiperComponent from "react-native-web-swiper";

const Swiper = _ref => {
  let {
    vertical = false,
    loop = false,
    timeout = 0,
    from = 0,
    prevTitle = "",
    nextTitle = "",
    dotsTouchable = true,
    children,
    style
  } = _ref;
  return /*#__PURE__*/React.createElement(View, {
    style: style
  }, /*#__PURE__*/React.createElement(SwiperComponent, {
    from: from,
    loop: loop,
    timeout: timeout,
    vertical: vertical,
    controlsProps: {
      prevTitle,
      nextTitle,
      dotsTouchable
    }
  }, children));
};

export default Swiper;
//# sourceMappingURL=Swiper.js.map