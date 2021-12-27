export declare const SEED_DATA: {
    name: string;
    tag: string;
    description: string;
    doc_link: string;
    code_link: string;
    category: string;
    layout: {
        flexGrow: number;
        flexShrink: number;
        flexBasis: number;
    };
    props: {
        tint: {
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: string;
            formType: string;
            propType: string;
            options: string[];
            group: string;
        };
        intensity: {
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: number;
            formType: string;
            propType: string;
            min: number;
            max: number;
            step: number;
            precision: number;
            group: string;
        };
    };
};
