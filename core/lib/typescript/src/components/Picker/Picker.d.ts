import * as React from "react";
import { PickerComponentProps, PickerOption } from "./PickerTypes";
declare type Props = PickerComponentProps & {
    placeholder?: string;
    value?: string;
    options: PickerOption[] | string[];
};
declare const _default: React.ComponentType<import("@draftbit/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@draftbit/react-theme-provider").$DeepPartial<any> | undefined;
}> & import("@draftbit/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
