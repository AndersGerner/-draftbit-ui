import * as React from "react";
import { Theme } from "@draftbit/types";
declare type Props = {
    children: React.ReactNode;
    theme?: Theme;
};
export default class Provider extends React.Component<Props> {
    render(): JSX.Element;
}
export {};
