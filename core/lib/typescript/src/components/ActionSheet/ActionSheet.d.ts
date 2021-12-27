import React from "react";
interface Props {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
declare const ActionSheet: ({ visible, onClose, children }: Props) => JSX.Element;
export default ActionSheet;
