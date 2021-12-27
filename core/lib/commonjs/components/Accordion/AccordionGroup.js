"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Text = _interopRequireDefault(require("../Text"));

var _theming = require("../../theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AccordionGroup = _ref => {
  let {
    Icon,
    openColor,
    closedColor,
    caretColor,
    icon,
    iconSize = 24,
    style,
    label,
    children,
    expanded: expandedProp,
    theme
  } = _ref;
  const [expanded, setExpanded] = React.useState(expandedProp || false);

  const handlePressAction = () => {
    if (expandedProp === undefined) {
      setExpanded(!expanded);
    }
  };

  const expandedInternal = expandedProp !== undefined ? expandedProp : expanded;
  const expandedColor = openColor || theme.colors.primary;
  const collapsedColor = closedColor || theme.colors.primary;
  const labelColor = expanded ? expandedColor : collapsedColor;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactNative.Pressable, {
    style: [style],
    onPress: handlePressAction,
    accessibilityRole: "button"
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.row
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: iconSize,
    color: labelColor,
    style: styles.icon
  }) : null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.item, styles.content]
  }, /*#__PURE__*/React.createElement(_Text.default, {
    selectable: false,
    style: [styles.label, {
      color: labelColor
    }, style]
  }, label)), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.item]
  }, /*#__PURE__*/React.createElement(Icon, {
    name: expanded ? "MaterialIcons/keyboard-arrow-up" : "MaterialIcons/keyboard-arrow-down",
    color: caretColor,
    size: 24
  })))), expandedInternal ? React.Children.map(children, child => {
    if ( /*#__PURE__*/React.isValidElement(child) && !child.props.left && !child.props.right) {
      return /*#__PURE__*/React.cloneElement(child, {
        style: child.props.style
      });
    }

    return child;
  }) : null);
};

const styles = _reactNative.StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  label: {
    fontSize: 16
  },
  item: {
    margin: 8
  },
  content: {
    flex: 1,
    justifyContent: "center"
  },
  icon: {
    marginLeft: 8
  }
});

var _default = (0, _theming.withTheme)(AccordionGroup);

exports.default = _default;
//# sourceMappingURL=AccordionGroup.js.map