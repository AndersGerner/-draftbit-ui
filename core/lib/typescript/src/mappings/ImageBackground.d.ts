export declare const SEED_DATA: {
    name: string;
    tag: string;
    doc_link: string;
    code_link: string;
    description: string;
    category: string;
    layout: {
        width: string;
        height: string;
    };
    props: {
        source: {
            label: string;
            description: string;
            group: string;
            formType: string;
            propType: string;
            defaultValue: string;
            editable: boolean;
            required: boolean;
        };
        resizeMode: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: string;
            formType: string;
            propType: string;
            options: string[];
        };
        backgroundColor: {
            group: string;
            label: string;
            description: string;
            editable: boolean;
            required: boolean;
            defaultValue: null;
            formType: string;
            propType: string;
        };
        backfaceVisibility: {
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
    };
};
