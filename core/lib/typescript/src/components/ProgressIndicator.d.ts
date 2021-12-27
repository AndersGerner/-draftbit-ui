import * as React from "react";
import themeT from "../styles/DefaultTheme";
import { colorTypes } from "@draftbit/types";
declare type Props = {
    numberOfSteps: number;
    currentStep: number;
    currentStepStrokeWidth?: number;
    stepStrokeCurrentColor?: colorTypes;
    stepIndicatorSize?: number;
    currentStepIndicatorSize?: number;
    stepIndicatorCurrentColor?: colorTypes;
    stepIndicatorLabelCurrentColor?: colorTypes;
    stepIndicatorLabelFontSize?: number;
    stepNumberFinishedColor?: colorTypes;
    stepNumberUnfinishedColor?: colorTypes;
    unfinishedColor?: colorTypes;
    finishedColor?: colorTypes;
    theme: typeof themeT;
};
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
