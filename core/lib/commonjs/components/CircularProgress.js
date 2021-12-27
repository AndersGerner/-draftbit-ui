"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeSvg = require("react-native-svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CircularProgress extends _react.default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "polarToCartesian", (centerX, centerY, radius, angleInDegrees) => {
      var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
      };
    });

    _defineProperty(this, "circlePath", (x, y, radius, startAngle, endAngle) => {
      var start = this.polarToCartesian(x, y, radius, endAngle * 0.9999);
      var end = this.polarToCartesian(x, y, radius, startAngle);
      var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
      var d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y];
      return d.join(" ");
    });

    _defineProperty(this, "clampFill", fill => Math.min(100, Math.max(0, fill)));
  }

  render() {
    const {
      size,
      width,
      backgroundWidth,
      tintColor = "black",
      tintTransparency = true,
      backgroundColor,
      style,
      rotation = 90,
      lineCap = "butt",
      arcSweepAngle = 360,
      fill,
      children,
      childrenContainerStyle,
      padding = 0,
      renderCap,
      dashedBackground = {
        width: 0,
        gap: 0
      },
      dashedTint = {
        width: 0,
        gap: 0
      }
    } = this.props;
    const maxWidthCircle = backgroundWidth ? Math.max(width, backgroundWidth) : width;
    const sizeWithPadding = size / 2 + padding / 2;
    const radius = size / 2 - maxWidthCircle / 2 - padding / 2;
    const currentFillAngle = arcSweepAngle * this.clampFill(fill) / 100;
    const backgroundPath = this.circlePath(sizeWithPadding, sizeWithPadding, radius, tintTransparency ? 0 : currentFillAngle, arcSweepAngle);
    const circlePathItem = this.circlePath(sizeWithPadding, sizeWithPadding, radius, 0, currentFillAngle);
    const coordinate = this.polarToCartesian(sizeWithPadding, sizeWithPadding, radius, currentFillAngle);
    const cap = renderCap ? renderCap({
      center: coordinate
    }) : null;
    const offset = size - maxWidthCircle * 2;
    const localChildrenContainerStyle = [{
      position: "absolute",
      left: maxWidthCircle + padding / 2,
      top: maxWidthCircle + padding / 2,
      width: offset,
      height: offset,
      borderRadius: offset / 2,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }, childrenContainerStyle];
    const strokeDasharrayTint = dashedTint.gap > 0 ? Object.values(dashedTint).map(value => value.toString()).join(" ") : "";
    const strokeDasharrayBackground = dashedBackground.gap > 0 ? Object.values(dashedBackground).map(value => value.toString()).join(" ") : "";
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: style
    }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
      width: size + padding,
      height: size + padding
    }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.G, {
      rotation: rotation,
      originX: (size + padding) / 2,
      originY: (size + padding) / 2
    }, backgroundColor && /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
      d: backgroundPath,
      stroke: backgroundColor,
      strokeWidth: backgroundWidth || width,
      strokeLinecap: lineCap,
      strokeDasharray: strokeDasharrayBackground,
      fill: "transparent"
    }), fill > 0 && /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
      d: circlePathItem,
      stroke: tintColor,
      strokeWidth: width,
      strokeLinecap: lineCap,
      strokeDasharray: strokeDasharrayTint,
      fill: "transparent"
    }), cap)), children && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: localChildrenContainerStyle
    }, children(fill)));
  }

}

var _default = CircularProgress;
exports.default = _default;
//# sourceMappingURL=CircularProgress.js.map