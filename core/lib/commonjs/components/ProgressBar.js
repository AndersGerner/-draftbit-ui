"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const INDETERMINATE_WIDTH_FACTOR = 0.3;
const BAR_WIDTH_ZERO_POSITION = INDETERMINATE_WIDTH_FACTOR / (1 + INDETERMINATE_WIDTH_FACTOR);

class ProgressBar extends _react.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleLayout", event => {
      const {
        width = 150,
        onLayout
      } = this.props;

      if (!width) {
        this.setState({
          width: event.nativeEvent.layout.width
        });
      }

      if (onLayout) {
        onLayout(event);
      }
    });

    const {
      progress: progressP = 0,
      indeterminate = false
    } = props;
    const progress = Math.min(Math.max(progressP, 0), 1);
    this.state = {
      width: 0,
      progress: new _reactNative.Animated.Value(indeterminate ? INDETERMINATE_WIDTH_FACTOR : progress),
      animationValue: new _reactNative.Animated.Value(BAR_WIDTH_ZERO_POSITION)
    };
  }

  componentDidMount() {
    const {
      indeterminate = false
    } = this.props;

    if (indeterminate) {
      this.animate();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      indeterminate = false,
      useNativeDriver = false,
      progress: progressP = 0,
      animationType = "spring",
      animationConfig = {
        bounciness: 0
      },
      animated = true
    } = this.props;

    if (prevProps.indeterminate !== indeterminate) {
      if (indeterminate) {
        this.animate();
      } else {
        _reactNative.Animated.spring(this.state.animationValue, {
          toValue: BAR_WIDTH_ZERO_POSITION,
          useNativeDriver
        }).start();
      }
    }

    if (prevProps.indeterminate !== indeterminate || prevProps.progress !== progressP) {
      const progress = this.props.indeterminate ? INDETERMINATE_WIDTH_FACTOR : Math.min(Math.max(progressP, 0), 1);

      if (animated) {
        _reactNative.Animated[animationType](this.state.progress, { ...animationConfig,
          toValue: progress,
          velocity: 0,
          //adjust this value if animation fails - velocity is required
          useNativeDriver
        }).start();
      } else {
        this.state.progress.setValue(progress);
      }
    }
  }

  animate() {
    const {
      useNativeDriver = false,
      indeterminateAnimationDuration = 1000
    } = this.props;
    this.state.animationValue.setValue(0);

    _reactNative.Animated.timing(this.state.animationValue, {
      toValue: 1,
      duration: indeterminateAnimationDuration,
      easing: _reactNative.Easing.linear,
      isInteraction: false,
      useNativeDriver
    }).start(endState => {
      if (endState.finished) {
        this.animate();
      }
    });
  }

  render() {
    const {
      borderColor,
      borderRadius = 4,
      borderWidth = 1,
      children,
      color = "rgba(0, 122, 255, 1)",
      style,
      unfilledColor,
      width = 150,
      ...restProps
    } = this.props;
    const innerWidth = Math.max(0, width || this.state.width) - borderWidth * 2;
    const containerStyle = {
      width,
      borderWidth,
      borderColor: borderColor || color,
      borderRadius,
      overflow: "hidden",
      backgroundColor: unfilledColor
    };
    const progressStyle = {
      backgroundColor: color,
      // Always take up full height of container.
      height: "100%",
      transform: [{
        translateX: this.state.animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [innerWidth * -INDETERMINATE_WIDTH_FACTOR, innerWidth]
        })
      }, {
        translateX: this.state.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [innerWidth / (_reactNative.I18nManager.isRTL ? 2 : -2), 0]
        })
      }, {
        // Interpolation a temp workaround for https://github.com/facebook/react-native/issues/6278
        scaleX: this.state.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0.0001, 1]
        })
      }]
    };
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
      style: [containerStyle, style],
      onLayout: this.handleLayout
    }, restProps), /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
      style: progressStyle
    }), children);
  }

}

exports.default = ProgressBar;
//# sourceMappingURL=ProgressBar.js.map