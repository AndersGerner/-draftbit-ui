"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../theming");

var _Row = _interopRequireDefault(require("./Row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const RowHeadlineImageCaption = _ref => {
  let {
    title,
    subtitle,
    caption,
    image,
    style,
    theme: {
      colors,
      typography
    }
  } = _ref;
  return /*#__PURE__*/React.createElement(_Row.default, {
    titleTypeStyle: typography.headline6,
    titleColor: colors.strong,
    subtitleTypeStyle: typography.body2,
    subtitleColor: colors.medium,
    title: title,
    subtitle: subtitle,
    image: image,
    right: () => /*#__PURE__*/React.createElement(_reactNative.Text, {
      style: { ...typography.caption,
        color: colors.strong,
        marginLeft: 16
      }
    }, caption),
    style: style
  });
};

var _default = (0, _theming.withTheme)(RowHeadlineImageCaption);

exports.default = _default;
//# sourceMappingURL=RowHeadlineImageCaption.js.map