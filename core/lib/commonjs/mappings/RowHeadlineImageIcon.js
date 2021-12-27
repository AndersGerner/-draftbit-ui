"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA_PROPS = {
  title: (0, _types.createTextProp)({
    label: "Title",
    description: "Headline text to display"
  }),
  icon: (0, _types.createIconProp)({
    defaultValue: null
  })
};
const IMAGE_PROP = (0, _types.createImageProp)();
const MULTILINE_PROP = (0, _types.createStaticBoolProp)({
  defaultValue: true,
  editable: false
});
const SUBTITLE_PROP = (0, _types.createTextProp)({
  label: "Subtitle",
  description: "Subtitle text to display",
  defaultValue: "San Diego"
});
const SEED_DATA = [{
  name: "Row Single Line Headline Icon",
  tag: "RowHeadlineImageIcon",
  description: "A row with left aligned headline text and a right aligned icon",
  category: _types.COMPONENT_TYPES.row,
  layout: {},
  props: { ...SEED_DATA_PROPS
  }
}, {
  name: "Row Single Line Headline Icon Image",
  tag: "RowHeadlineImageIcon",
  description: "A row with left aligned image and headline text and a right aligned icon",
  category: _types.COMPONENT_TYPES.row,
  layout: {},
  props: { ...SEED_DATA_PROPS,
    image: IMAGE_PROP
  }
}, {
  name: "Row Double Line Headline Icon",
  tag: "RowHeadlineImageIcon",
  description: "A row with left aligned headline text and subtitle text and a right aligned icon",
  category: _types.COMPONENT_TYPES.row,
  layout: {},
  props: { ...SEED_DATA_PROPS,
    subtitle: SUBTITLE_PROP
  }
}, {
  name: "Row Double Line Headline Image Icon",
  tag: "RowHeadlineImageIcon",
  description: "A row with left aligned headline text and subtitle text and a right aligned icon",
  category: _types.COMPONENT_TYPES.row,
  layout: {},
  props: { ...SEED_DATA_PROPS,
    image: IMAGE_PROP,
    subtitle: SUBTITLE_PROP
  }
}, {
  name: "Row Multiline Headline Icon",
  tag: "RowHeadlineImageIcon",
  description: "A row with left aligned headline text and multiline subtitle text and a right aligned icon",
  category: _types.COMPONENT_TYPES.row,
  layout: {},
  props: { ...SEED_DATA_PROPS,
    multilineSubtitle: MULTILINE_PROP,
    subtitle: (0, _types.createTextProp)({
      label: "Subtitle",
      description: "Subtitle text to display",
      defaultValue: "San Diego is a city on the Pacific coast of California known for its beaches, parks and warm climate"
    })
  }
}, {
  name: "Row Multiline Headline Image Icon",
  tag: "RowHeadlineImageIcon",
  description: "A row with left aligned image, headline text, and multiline subtitle text, and a right aligned icon",
  category: _types.COMPONENT_TYPES.row,
  layout: {},
  props: { ...SEED_DATA_PROPS,
    image: IMAGE_PROP,
    multilineSubtitle: MULTILINE_PROP,
    subtitle: (0, _types.createTextProp)({
      label: "Subtitle",
      description: "Subtitle text to display",
      defaultValue: "San Diego is a city on the Pacific coast of California known for its beaches, parks and warm climate"
    })
  }
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=RowHeadlineImageIcon.js.map