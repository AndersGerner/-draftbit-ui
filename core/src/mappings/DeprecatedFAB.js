import { GROUPS, FORM_TYPES, PROP_TYPES, COMPONENT_TYPES, } from "@draftbit/types";
const SEED_DATA_PROPS = {
    icon: {
        group: GROUPS.basic,
        label: "Icon Name",
        description: "Name of the icon",
        editable: true,
        required: true,
        formType: FORM_TYPES.icon,
        propType: PROP_TYPES.ASSET,
        defaultValue: null,
    },
    label: {
        group: GROUPS.basic,
        label: "Label",
        description: "Button label",
        required: true,
        editable: true,
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "GET STARTED",
    },
    color: {
        group: GROUPS.basic,
        label: "Color Override",
        description: "Override the background color of the button",
        editable: true,
        required: false,
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
        defaultValue: null,
    },
    onPress: {
        group: GROUPS.basic,
        label: "Action",
        description: "Action to execute when button pressed",
        editable: true,
        required: false,
        formType: FORM_TYPES.action,
        propType: PROP_TYPES.STRING,
        defaultValue: null,
    },
};
export const SEED_DATA = [
    {
        name: "FAB Mini",
        tag: "FAB",
        category: COMPONENT_TYPES.deprecated,
        description: "A round, mini FAB",
        preview_image_url: "{CLOUDINARY_URL}/Button_FABMini.png",
        props: {
            ...SEED_DATA_PROPS,
            type: {
                group: GROUPS.uncategorized,
                label: "Type",
                description: "Button type",
                editable: false,
                required: true,
                formType: FORM_TYPES.icon,
                propType: PROP_TYPES.STRING,
                defaultValue: "standard",
            },
            label: {
                group: GROUPS.data,
                label: "Label",
                description: "Button label",
                required: false,
                editable: false,
                formType: FORM_TYPES.string,
                propType: PROP_TYPES.STRING,
                defaultValue: null,
            },
        },
        layout: {},
    },
    {
        name: "FAB Outline",
        tag: "FAB",
        category: COMPONENT_TYPES.deprecated,
        preview_image_url: "{CLOUDINARY_URL}/Button_FABMini.png",
        props: {
            ...SEED_DATA_PROPS,
            type: {
                group: GROUPS.uncategorized,
                label: "Type",
                description: "Button type",
                editable: false,
                required: true,
                propType: PROP_TYPES.STRING,
                formType: FORM_TYPES.string,
                defaultValue: "outline",
            },
            label: {
                group: GROUPS.uncategorized,
                label: "Label",
                description: "Button label",
                required: false,
                editable: false,
                formType: FORM_TYPES.string,
                propType: PROP_TYPES.STRING,
                defaultValue: null,
            },
        },
        layout: {},
    },
    {
        name: "FAB Extended",
        tag: "FAB",
        category: COMPONENT_TYPES.deprecated,
        preview_image_url: "{CLOUDINARY_URL}/Button_FABExtended.png",
        props: {
            ...SEED_DATA_PROPS,
            type: {
                group: GROUPS.uncategorized,
                label: "Type",
                description: "Button type",
                editable: false,
                required: true,
                formType: FORM_TYPES.string,
                propType: PROP_TYPES.STRING,
                defaultValue: "extended",
            },
        },
        layout: {},
    },
    {
        name: "FAB Fixed",
        tag: "FAB",
        category: COMPONENT_TYPES.deprecated,
        preview_image_url: "{CLOUDINARY_URL}/Button_FABFixed.png",
        props: {
            ...SEED_DATA_PROPS,
            type: {
                group: GROUPS.uncategorized,
                label: "Type",
                description: "Button type",
                editable: false,
                required: true,
                formType: FORM_TYPES.string,
                propType: PROP_TYPES.STRING,
                defaultValue: "fixed",
            },
        },
        layout: {},
    },
];
