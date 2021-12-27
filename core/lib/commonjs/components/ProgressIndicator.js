"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _StepIndicator = _interopRequireDefault(require("./StepIndicator"));

var _theming = require("../theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ProgressIndicator = _ref => {
  let {
    numberOfSteps,
    currentStep,
    currentStepStrokeWidth = 3,
    stepStrokeCurrentColor = "primary",
    stepIndicatorSize,
    currentStepIndicatorSize,
    stepIndicatorCurrentColor,
    stepIndicatorLabelCurrentColor,
    stepIndicatorLabelFontSize = 12,
    stepNumberFinishedColor = "strongInverse",
    stepNumberUnfinishedColor = "primary",
    unfinishedColor = "light",
    finishedColor = "primary",
    theme
  } = _ref;
  const currentPosition = currentStep - 1;
  return /*#__PURE__*/React.createElement(_StepIndicator.default, {
    stepCount: numberOfSteps,
    currentPosition: currentPosition,
    customStyles: {
      stepIndicatorSize,
      currentStepIndicatorSize: currentStepIndicatorSize ? currentStepIndicatorSize : stepIndicatorSize,
      stepStrokeFinishedColor: finishedColor,
      stepStrokeUnFinishedColor: unfinishedColor,
      separatorFinishedColor: finishedColor,
      separatorUnFinishedColor: unfinishedColor,
      stepIndicatorFinishedColor: finishedColor,
      stepIndicatorUnFinishedColor: unfinishedColor,
      currentStepStrokeWidth,
      stepStrokeCurrentColor: stepStrokeCurrentColor || stepIndicatorCurrentColor,
      stepIndicatorLabelUnFinishedColor: stepNumberUnfinishedColor,
      stepIndicatorLabelFinishedColor: stepNumberFinishedColor,
      stepIndicatorCurrentColor: stepIndicatorCurrentColor || unfinishedColor,
      stepIndicatorLabelCurrentColor: stepIndicatorLabelCurrentColor || stepNumberUnfinishedColor,
      stepIndicatorLabelFontSize,
      labelFontFamily: theme.typography.body1.fontFamily
    }
  });
};

var _default = (0, _theming.withTheme)(ProgressIndicator);

exports.default = _default;
//# sourceMappingURL=ProgressIndicator.js.map