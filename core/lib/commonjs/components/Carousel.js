"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _theming = require("../theming");

var _reactNative = require("react-native");

var _Image = _interopRequireDefault(require("./Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const screenWidth = _reactNative.Dimensions.get("window").width;

function Pager(_ref) {
  let {
    color,
    index,
    length
  } = _ref;
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.pager
  }, Array.from({
    length
  }).map((_, i) => {
    const current = index === i;
    const opacity = current ? 1 : 0.5;
    const size = current ? 10 : 8;
    return /*#__PURE__*/React.createElement(_reactNative.View, {
      key: i,
      style: [styles.bullet, {
        backgroundColor: color,
        opacity,
        width: size,
        height: size
      }]
    });
  }));
}

function Carousel(_ref2) {
  var _data$length;

  let {
    data,
    children,
    dotColor = "strong",
    style,
    ...rest
  } = _ref2;
  const [index, setIndex] = React.useState(0);
  const length = React.Children.count(children);
  const itemsLength = ((_data$length = data === null || data === void 0 ? void 0 : data.length) !== null && _data$length !== void 0 ? _data$length : 0) + length;
  const slides = Array.isArray(data) ? data : [];

  const {
    width,
    height
  } = _reactNative.StyleSheet.flatten(style || {});

  const slideWidth = width || screenWidth;
  const slideHeight = height || 250;
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    style: [styles.container, style]
  }, rest), /*#__PURE__*/React.createElement(_reactNative.ScrollView, {
    pagingEnabled: true,
    horizontal: true,
    decelerationRate: "fast",
    scrollEventThrottle: 200,
    showsHorizontalScrollIndicator: false,
    onScroll: _ref3 => {
      let {
        nativeEvent
      } = _ref3;
      const layoutWidth = nativeEvent.layoutMeasurement.width;
      const offset = nativeEvent.contentOffset.x;
      const currentIndex = Math.ceil(offset / layoutWidth);
      setIndex(currentIndex);
    }
  }, slides.length > 0 ? slides.map((item, i) => {
    return /*#__PURE__*/React.createElement(_Image.default, {
      key: i,
      resizeMode: "cover",
      source: typeof item === "string" ? {
        uri: item
      } : item,
      style: [{
        width: slideWidth,
        height: slideHeight
      }]
    });
  }) : null, React.Children.map(children, child => {
    var _child$props;

    const s = (child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.style) || {};
    return /*#__PURE__*/React.createElement(_reactNative.View, {
      style: {
        width: slideWidth
      }
    }, /*#__PURE__*/React.cloneElement(child, {
      style: { ...s,
        width: slideWidth
      }
    }));
  })), /*#__PURE__*/React.createElement(Pager, {
    color: dotColor,
    index: index,
    length: itemsLength
  }));
}

const styles = _reactNative.StyleSheet.create({
  container: {
    height: 250,
    position: "relative",
    width: screenWidth,
    backgroundColor: "#eee"
  },
  pager: {
    position: "absolute",
    bottom: 12,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  bullet: {
    marginHorizontal: 2,
    width: 10,
    height: 10,
    borderRadius: 20,
    backgroundColor: "#000"
  }
});

var _default = (0, _theming.withTheme)(Carousel);

exports.default = _default;
//# sourceMappingURL=Carousel.js.map