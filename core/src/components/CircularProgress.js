import React from "react";
import { View } from "react-native";
import { Svg, Path, G } from "react-native-svg";
class CircularProgress extends React.Component {
    polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
        var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians),
        };
    };
    circlePath = (x, y, radius, startAngle, endAngle) => {
        var start = this.polarToCartesian(x, y, radius, endAngle * 0.9999);
        var end = this.polarToCartesian(x, y, radius, startAngle);
        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        var d = [
            "M",
            start.x,
            start.y,
            "A",
            radius,
            radius,
            0,
            largeArcFlag,
            0,
            end.x,
            end.y,
        ];
        return d.join(" ");
    };
    clampFill = (fill) => Math.min(100, Math.max(0, fill));
    render() {
        const { size, width, backgroundWidth, tintColor = "black", tintTransparency = true, backgroundColor, style, rotation = 90, lineCap = "butt", arcSweepAngle = 360, fill, children, childrenContainerStyle, padding = 0, renderCap, dashedBackground = { width: 0, gap: 0 }, dashedTint = { width: 0, gap: 0 }, } = this.props;
        const maxWidthCircle = backgroundWidth
            ? Math.max(width, backgroundWidth)
            : width;
        const sizeWithPadding = size / 2 + padding / 2;
        const radius = size / 2 - maxWidthCircle / 2 - padding / 2;
        const currentFillAngle = (arcSweepAngle * this.clampFill(fill)) / 100;
        const backgroundPath = this.circlePath(sizeWithPadding, sizeWithPadding, radius, tintTransparency ? 0 : currentFillAngle, arcSweepAngle);
        const circlePathItem = this.circlePath(sizeWithPadding, sizeWithPadding, radius, 0, currentFillAngle);
        const coordinate = this.polarToCartesian(sizeWithPadding, sizeWithPadding, radius, currentFillAngle);
        const cap = renderCap ? renderCap({ center: coordinate }) : null;
        const offset = size - maxWidthCircle * 2;
        const localChildrenContainerStyle = [
            {
                position: "absolute",
                left: maxWidthCircle + padding / 2,
                top: maxWidthCircle + padding / 2,
                width: offset,
                height: offset,
                borderRadius: offset / 2,
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            },
            childrenContainerStyle,
        ];
        const strokeDasharrayTint = dashedTint.gap > 0
            ? Object.values(dashedTint)
                .map((value) => value.toString())
                .join(" ")
            : "";
        const strokeDasharrayBackground = dashedBackground.gap > 0
            ? Object.values(dashedBackground)
                .map((value) => value.toString())
                .join(" ")
            : "";
        return (React.createElement(View, { style: style },
            React.createElement(Svg, { width: size + padding, height: size + padding },
                React.createElement(G, { rotation: rotation, originX: (size + padding) / 2, originY: (size + padding) / 2 },
                    backgroundColor && (React.createElement(Path, { d: backgroundPath, stroke: backgroundColor, strokeWidth: backgroundWidth || width, strokeLinecap: lineCap, strokeDasharray: strokeDasharrayBackground, fill: "transparent" })),
                    fill > 0 && (React.createElement(Path, { d: circlePathItem, stroke: tintColor, strokeWidth: width, strokeLinecap: lineCap, strokeDasharray: strokeDasharrayTint, fill: "transparent" })),
                    cap)),
            children && (React.createElement(View, { style: localChildrenContainerStyle }, children(fill)))));
    }
}
export default CircularProgress;
