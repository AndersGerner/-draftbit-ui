export declare const SEED_DATA: ({
    name: string;
    tag: string;
    description: string;
    category: string;
    preview_image_url: string;
    supports_list_render: boolean;
    props: {
        title: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: string;
            editable: boolean;
            required: boolean;
        };
        icon: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
        };
        subtitle?: undefined;
    };
    layout: {};
} | {
    name: string;
    tag: string;
    description: string;
    category: string;
    preview_image_url: string;
    supports_list_render: boolean;
    props: {
        title: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: string;
            editable: boolean;
            required: boolean;
        };
        subtitle: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: string;
            editable: boolean;
            required: boolean;
        };
        icon: {
            group: string;
            label: string;
            description: string;
            formType: string;
            propType: string;
            defaultValue: null;
            editable: boolean;
            required: boolean;
        };
    };
    layout: {};
})[];
