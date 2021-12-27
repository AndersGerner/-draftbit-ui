export declare const SEED_DATA: ({
    name: string;
    tag: string;
    category: string;
    layout: {
        marginLeft?: undefined;
        marginRight?: undefined;
    };
    triggers: string[];
    props: {
        disabled: {
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: boolean;
            editable: boolean;
            required: boolean;
            group: string;
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
        activeTrackColor: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        inactiveTrackColor: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        activeThumbColor: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        inactiveThumbColor: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        label?: undefined;
        direction?: undefined;
    };
} | {
    name: string;
    tag: string;
    category: string;
    layout: {
        marginLeft: number;
        marginRight: number;
    };
    triggers: string[];
    props: {
        label: any;
        direction: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            formType: string;
            propType: string;
            defaultValue: null;
            options: never[];
        };
        disabled: {
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: boolean;
            editable: boolean;
            required: boolean;
            group: string;
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
        activeTrackColor: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        inactiveTrackColor: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        activeThumbColor: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        inactiveThumbColor: {
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
})[];
