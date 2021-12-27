export declare const SEED_DATA: {
    name: string;
    tag: string;
    description: string;
    category: string;
    layout: {
        width: number;
        height: number;
    };
    props: {
        size: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            formType: string;
            propType: string;
            min: number;
            max: number;
            precision: number;
            step: number;
            defaultValue: number;
        };
        image: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            formType: string;
            propType: string;
            defaultValue: string;
        };
    };
};
