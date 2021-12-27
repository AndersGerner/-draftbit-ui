import * as React from "react";
import { ThemeProvider } from "./theming";
import PortalHost from "./components/Portal/PortalHost";
export default class Provider extends React.Component {
    render() {
        return (React.createElement(PortalHost, null,
            React.createElement(ThemeProvider, { theme: this.props.theme }, this.props.children)));
    }
}
