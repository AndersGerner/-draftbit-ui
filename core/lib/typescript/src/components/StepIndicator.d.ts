import { Component } from "react";
interface CustomStyles {
    stepIndicatorSize?: number;
    currentStepIndicatorSize?: number;
    separatorStrokeWidth?: number;
    separatorStrokeUnfinishedWidth?: number;
    separatorStrokeFinishedWidth?: number;
    currentStepStrokeWidth: number;
    stepStrokeWidth?: number;
    stepStrokeCurrentColor?: string;
    stepStrokeFinishedColor: string;
    stepStrokeUnFinishedColor: string;
    separatorFinishedColor: string;
    separatorUnFinishedColor: string;
    stepIndicatorFinishedColor: string;
    stepIndicatorUnFinishedColor: string;
    stepIndicatorCurrentColor: string;
    stepIndicatorLabelFontSize: number;
    currentStepIndicatorLabelFontSize?: number;
    stepIndicatorLabelCurrentColor: string;
    stepIndicatorLabelFinishedColor: string;
    stepIndicatorLabelUnFinishedColor: string;
    labelColor?: string;
    labelSize?: number;
    labelAlign?: string;
    currentStepLabelColor?: string;
    labelFontFamily?: string;
}
declare type Props = {
    stepCount: number;
    currentPosition: number;
    customStyles: CustomStyles;
};
declare type State = {
    width: number;
    height: number;
    progressBarSize: number;
    customStyles: CustomStyles;
};
export default class StepIndicator extends Component<Props, State> {
    constructor(props: Props);
    stepPressed(position: any): void;
    render(): JSX.Element;
    componentDidUpdate(prevProps: any): void;
    renderProgressBarBackground: () => JSX.Element;
    renderProgressBar: () => JSX.Element;
    renderStepIndicator: () => JSX.Element;
    renderStepLabels: () => JSX.Element;
    renderStep: (position: any) => JSX.Element;
    getStepStatus: (stepPosition: any) => string;
    onCurrentPositionChanged: (position: any) => void;
}
export {};
