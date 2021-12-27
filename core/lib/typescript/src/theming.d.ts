/// <reference types="react" />
export declare const ThemeProvider: import("react").ComponentType<{
    theme?: any;
}>, withTheme: <Props extends {
    theme: any;
}, C>(WrappedComponent: import("react").ComponentType<Props> & C) => import("react").ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<Props> & C, {}>, useTheme: (overrides?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined) => any;
