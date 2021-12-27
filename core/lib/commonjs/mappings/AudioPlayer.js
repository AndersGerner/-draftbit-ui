"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Audio Player",
  tag: "AudioPlayer",
  description: "Given a source URL, plays sounds & audio!",
  category: _types.COMPONENT_TYPES.media,
  layout: {},
  props: {
    source: {
      group: _types.GROUPS.data,
      label: "Source",
      description: "The source URL for the audio file.",
      editable: true,
      required: true,
      defaultValue: "https://static.draftbit.com/audio/intro-to-draftbit-audio.mp3",
      formType: _types.FORM_TYPES.sourceUrl,
      propType: _types.PROP_TYPES.OBJECT
    }
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=AudioPlayer.js.map