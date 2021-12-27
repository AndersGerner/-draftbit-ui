export declare const SEED_DATA: {
    name: string;
    tag: string;
    description: string;
    category: string;
    preview_image_url: string;
    supports_list_render: boolean;
    props: {
        progress: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: number;
            min: number;
            max: number;
            step: number;
            precision: number;
            editable: boolean;
            required: boolean;
        };
        color: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            defaultValue: string;
            required: boolean;
            formType: string;
            propType: string;
        };
        unfilledColor: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            defaultValue: null;
            required: boolean;
            formType: string;
            propType: string;
        };
        size: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: number;
            min: number;
            max: number;
            step: number;
            precision: number;
            editable: boolean;
            required: boolean;
        };
        showsText: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: boolean;
            editable: boolean;
            required: boolean;
        };
        textStyle: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            formType: string;
            propType: string;
            defaultValue: null;
        };
        thickness: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: number;
            min: number;
            max: number;
            step: number;
            precision: number;
            editable: boolean;
            required: boolean;
        };
        strokeCap: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: string;
            options: string[];
            editable: boolean;
            required: boolean;
        };
    };
    layout: {
        width: number;
        height: number;
    };
};
