import * as React from "react";
import StepIndicator from "./StepIndicator";
import { withTheme } from "../theming";
const ProgressIndicator = ({ numberOfSteps, currentStep, currentStepStrokeWidth = 3, stepStrokeCurrentColor = "primary", stepIndicatorSize, currentStepIndicatorSize, stepIndicatorCurrentColor, stepIndicatorLabelCurrentColor, stepIndicatorLabelFontSize = 12, stepNumberFinishedColor = "strongInverse", stepNumberUnfinishedColor = "primary", unfinishedColor = "light", finishedColor = "primary", theme, }) => {
    const currentPosition = currentStep - 1;
    return (React.createElement(StepIndicator, { stepCount: numberOfSteps, currentPosition: currentPosition, customStyles: {
            stepIndicatorSize,
            currentStepIndicatorSize: currentStepIndicatorSize
                ? currentStepIndicatorSize
                : stepIndicatorSize,
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
            labelFontFamily: theme.typography.body1.fontFamily,
        } }));
};
export default withTheme(ProgressIndicator);
