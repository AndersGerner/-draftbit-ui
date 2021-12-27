/// <reference types="react" />
export declare enum Direction {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
interface RadioButtonGroupContext {
    onValueChange: (value: string) => void;
    value: string;
    direction?: Direction;
}
export declare const radioButtonGroupContext: import("react").Context<RadioButtonGroupContext>;
export declare function useRadioButtonGroupContext(): RadioButtonGroupContext;
export {};
