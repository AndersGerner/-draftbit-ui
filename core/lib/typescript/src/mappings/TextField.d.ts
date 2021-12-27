export declare const SEED_DATA: ({
    name: string;
    tag: string;
    description: string;
    category: string;
    preview_image_url: string;
    supports_list_render: boolean;
    triggers: string[];
    props: {
        type: {
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: string;
            options: string[];
            editable: boolean;
            required: boolean;
            group: string;
        };
        underlineColor: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        secureTextEntry: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
        };
        label: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
        };
        assistiveText: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
        };
        error: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
        };
        leftIconName: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
        };
        leftIconMode: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            options: string[];
            editable: boolean;
            required: boolean;
        };
        rightIconName: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
        };
        fieldName: {
            handlerPropName: string;
            defaultValue: string;
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            valuePropName: string;
            editable: boolean;
            required: boolean;
        };
        allowFontScaling: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        autoCapitalize: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            options: string[];
            formType: string;
            propType: string;
        };
        autoCorrect: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        autoFocus: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        caretHidden: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        contextMenuHidden: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        disabled: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
        };
        editable: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        keyboardAppearance: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            options: string[];
            formType: string;
            propType: string;
        };
        keyboardType: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            options: string[];
            formType: string;
            propType: string;
        };
        maxLength: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            min: number;
            step: number;
            precision: number;
            formType: string;
            propType: string;
        };
        placeholder: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: string;
            formType: string;
            propType: string;
        };
        placeholderTextColor: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        returnKeyLabel: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        returnKeyType: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            options: string[];
            formType: string;
            propType: string;
        };
        selectionColor: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        selectTextOnFocus: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
    };
    layout: {};
} | {
    name: string;
    tag: string;
    description: string;
    category: string;
    preview_image_url: string;
    supports_list_render: boolean;
    triggers: string[];
    props: {
        placeholder: {
            defaultValue: string;
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            formType: string;
            propType: string;
        };
        type: {
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: string;
            options: string[];
            editable: boolean;
            required: boolean;
            group: string;
        };
        multiline: {
            label: string;
            description: string;
            group: string;
            formType: string;
            propType: string;
            defaultValue: boolean;
            editable: boolean;
            required: boolean;
        };
        numberOfLines: {
            label: string;
            description: string;
            formType: string;
            propType: string;
            group: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
            step: number;
        };
        fieldName: {
            handlerPropName: string;
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: string;
            valuePropName: string;
            editable: boolean;
            required: boolean;
        };
        label: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
        };
        assistiveText: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
        };
        error: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
        };
        leftIconName: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
        };
        leftIconMode: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            options: string[];
            editable: boolean;
            required: boolean;
        };
        rightIconName: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
        };
        allowFontScaling: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        autoCapitalize: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            options: string[];
            formType: string;
            propType: string;
        };
        autoCorrect: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        autoFocus: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        caretHidden: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        contextMenuHidden: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        disabled: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
        };
        editable: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        keyboardAppearance: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            options: string[];
            formType: string;
            propType: string;
        };
        keyboardType: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            options: string[];
            formType: string;
            propType: string;
        };
        maxLength: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            min: number;
            step: number;
            precision: number;
            formType: string;
            propType: string;
        };
        placeholderTextColor: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        returnKeyLabel: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        returnKeyType: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            options: string[];
            formType: string;
            propType: string;
        };
        secureTextEntry: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        selectionColor: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        selectTextOnFocus: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
    };
    layout: {};
})[];
