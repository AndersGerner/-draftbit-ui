/// <reference types="react" />
export declare enum Direction {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
interface CheckboxGroupContext {
    onValueChange: (value: string, selected: boolean) => void;
    values: string[];
    direction?: Direction;
}
export declare const checkboxGroupContext: import("react").Context<CheckboxGroupContext>;
export declare function useCheckboxGroupContext(): CheckboxGroupContext;
export {};
