"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "View",
  tag: "View",
  description: "A basic View component",
  category: _types.COMPONENT_TYPES.basic,
  props: {
    accessible: {
      group: _types.GROUPS.accessibility,
      name: "accessible",
      label: "accessible",
      description: "When true, indicates that the view is an accessibility element. By default, all the touchable elements are accessible.",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      defaultValue: null
    },
    accessibilityLabel: {
      group: _types.GROUPS.accessibility,
      name: "accessibilityLabel",
      label: "accessibilityLabel",
      description: "Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.",
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      editable: true,
      required: false,
      defaultValue: null
    },
    accessibilityHint: {
      group: _types.GROUPS.accessibility,
      name: "accessibilityHint",
      label: "accessibilityHint",
      description: "An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label.",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: null
    },
    accessibilityRole: {
      group: _types.GROUPS.accessibility,
      name: "accessibilityRole",
      label: "accessibilityRole",
      description: "accessibilityRole communicates the purpose of a component to the user of an assistive technology.accessibilityRole can be one of the following:\n'none' - Used when the element has no role.\n'button' - Used when the element should be treated as a button.\n'link' - Used when the element should be treated as a link.\n'search' - Used when the text field element should also be treated as a search field.\n'image' - Used when the element should be treated as an image. Can be combined with button or link, for example.\n'keyboardkey' - Used when the element acts as a keyboard key.\n'text' - Used when the element should be treated as static text that cannot change.\n'adjustable' - Used when an element can be \"adjusted\" (e.g. a slider).\n'imagebutton' - Used when the element should be treated as a button and is also an image.\n'header' - Used when an element acts as a header for a content section (e.g. the title of a navigation bar).\n'summary' - Used when an element can be used to provide a quick summary of current conditions in the app when the app first launches.\n'alert' - Used when an element contains important text to be presented to the user.\n'checkbox' - Used when an element represents a checkbox which can be checked, unchecked, or have mixed checked state.\n'combobox' - Used when an element represents a combo box, which allows the user to select among several choices.\n'menu' - Used when the component is a menu of choices.\n'menubar' - Used when a component is a container of multiple menus.\n'menuitem' - Used to represent an item within a menu.\n'progressbar' - Used to represent a component which indicates progress of a task.\n'radio' - Used to represent a radio button.\n'radiogroup' - Used to represent a group of radio buttons.\n'scrollbar' - Used to represent a scroll bar.\n'spinbutton' - Used to represent a button which opens a list of choices.\n'switch' - Used to represent a switch which can be turned on and off.\n'tab' - Used to represent a tab.\n'tablist' - Used to represent a list of tabs.\n'timer' - Used to represent a timer.\n'toolbar' - Used to represent a tool bar (a container of action buttons or components).\n",
      options: ["none", "button", "link", "search", "image", "keyboardkey", "text", "adjustable", "imagebutton", "header", "summary", "alert", "checkbox", "combobox", "menu", "menubar", "menuitem", "progressbar", "radio", "radiogroup", "scrollbar", "spinbutton", "switch", "tab", "tablist", "timer", "toolbar"],
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: null
    },
    accessibilityElementsHidden: {
      group: _types.GROUPS.accessibility,
      name: "accessibilityElementsHidden",
      label: "accessibilityElementsHidden",
      description: "A value indicating whether the accessibility elements contained within this accessibility element are hidden. Default is false.See the Accessibility guide for more information.",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      defaultValue: null
    },
    accessibilityIgnoresInvertColors: {
      group: _types.GROUPS.accessibility,
      name: "accessibilityIgnoresInvertColors",
      label: "accessibilityIgnoresInvertColors",
      description: "A value indicating this view should or should not be inverted when color inversion is turned on. A value of true will tell the view to not be inverted even if color inversion is turned on.See the Accessibility guide for more information.",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      defaultValue: null
    },
    accessibilityLiveRegion: {
      group: _types.GROUPS.accessibility,
      name: "accessibilityLiveRegion",
      label: "accessibilityLiveRegion",
      description: "Indicates to accessibility services whether the user should be notified when this view changes. Works for Android API >= 19 only. Possible values:\n'none' - Accessibility services should not announce changes to this view.\n'polite'- Accessibility services should announce changes to this view.\n'assertive' - Accessibility services should interrupt ongoing speech to immediately announce changes to this view.\nSee the Android View docs for reference.",
      options: ["none", "polite", "assertive"],
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: null
    },
    importantForAccessibility: {
      group: _types.GROUPS.accessibility,
      name: "importantForAccessibility",
      label: "importantForAccessibility",
      defaultValue: null,
      description: "Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only.Possible values:\n'auto' - The system determines whether the view is important for accessibility - default (recommended).\n'yes' - The view is important for accessibility.\n'no' - The view is not important for accessibility.\n'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.\nSee the Android importantForAccessibility docs for reference.",
      options: ["auto", "yes", "no", "no-hide-descendants"],
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING
    },
    hitSlop: {
      group: _types.GROUPS.advanced,
      name: "hitSlop",
      label: "hitSlop",
      description: "This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels.For example, if a touchable view has a height of 20 the touchable height can be extended to 40 with hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}\nThe touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.\n",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.position,
      propType: _types.PROP_TYPES.OBJECT,
      defaultValue: null
    },
    pointerEvents: {
      group: _types.GROUPS.advanced,
      name: "pointerEvents",
      label: "pointerEvents",
      description: "Controls whether the View can be the target of touch events.\n'auto': The View can be the target of touch events.\n'none': The View is never the target of touch events.\n'box-none': The View is never the target of touch events but its subviews can be. It behaves like if the view had the following classes in CSS:\n.box-none {\n     pointer-events: none;\n}\n.box-none * {\n     pointer-events: auto;\n}\n\n'box-only': The view can be the target of touch events but its subviews cannot be. It behaves like if the view had the following classes in CSS:\n.box-only {\n     pointer-events: auto;\n}\n.box-only * {\n     pointer-events: none;\n}\n\nSince pointerEvents does not affect layout/appearance, and we are already deviating from the spec by adding additional modes, we opt to not include pointerEvents on style. On some platforms, we would need to implement it as a className anyways. Using style or not is an implementation detail of the platform.\n",
      options: ["auto", "none", "box-none", "box-only"],
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "auto"
    },
    removeClippedSubviews: {
      group: _types.GROUPS.advanced,
      name: "removeClippedSubviews",
      label: "removeClippedSubviews",
      description: "This is a reserved performance property exposed by RCTView and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have overflow: hidden, as should the containing view (or one of its superviews).",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      defaultValue: null
    },
    collapsable: {
      group: _types.GROUPS.advanced,
      name: "collapsable",
      label: "collapsable",
      description: "Views that are only used to layout their children or otherwise don't draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      defaultValue: null
    },
    needsOffscreenAlphaCompositing: {
      group: _types.GROUPS.advanced,
      name: "needsOffscreenAlphaCompositing",
      label: "needsOffscreenAlphaCompositing",
      description: "Whether this View needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior. The default (false) falls back to drawing the component and its children with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value. This default may be noticeable and undesired in the case where the View you are setting an opacity on has multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).Rendering offscreen to preserve correct alpha behavior is extremely expensive and hard to debug for non-native developers, which is why it is not turned on by default. If you do need to enable this property for an animation, consider combining it with renderToHardwareTextureAndroid if the view contents are static (i.e. it doesn't need to be redrawn each frame). If that property is enabled, this View will be rendered off-screen once, saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      defaultValue: null
    },
    renderToHardwareTextureAndroid: {
      group: _types.GROUPS.advanced,
      name: "renderToHardwareTextureAndroid",
      label: "renderToHardwareTextureAndroid",
      description: "Whether this View should render itself (and all of its children) into a single hardware texture on the GPU.On Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale: in those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. The texture can be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      defaultValue: null
    },
    shouldRasterizeIOS: {
      group: _types.GROUPS.advanced,
      name: "shouldRasterizeIOS",
      label: "shouldRasterizeIOS",
      description: "Whether this View should be rendered as a bitmap before compositing.On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view and quickly composite it during each frame.Rasterization incurs an off-screen drawing pass and the bitmap consumes memory. Test and measure when using this property.",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      defaultValue: null
    }
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=View.js.map