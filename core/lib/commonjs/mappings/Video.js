"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Video",
  tag: "Video",
  description: "Given a URL, display a video",
  doc_link: "https://docs.expo.io/versions/latest/sdk/video/",
  code_link: "https://github.com/expo/expo/blob/master/packages/expo-av/src/Video.tsx",
  category: _types.COMPONENT_TYPES.media,
  layout: {
    height: 215
  },
  props: {
    source: (0, _types.createSourceProp)({
      label: "Source",
      description: "The source of the video data to display.",
      defaultValue: "http://static.draftbit.com/videos/intro-to-draftbit.mp4"
    }),
    usePoster: (0, _types.createStaticBoolProp)({
      label: "Thumbnail",
      description: "Show a thumbnail before the video starts.",
      defaultValue: false
    }),
    posterSource: (0, _types.createSourceProp)({
      label: "Thumbnail Source",
      description: "The optional image to display over the video while it is loading.",
      defaultValue: "https://static.draftbit.com/videos/intro-to-draftbit.png",
      group: _types.GROUPS.basic
    }),
    resizeMode: (0, _types.createResizeModeProp)(),
    isMuted: (0, _types.createStaticBoolProp)({
      label: "Mute Audio",
      description: "Mute the audio of the video."
    }),
    useNativeControls: (0, _types.createStaticBoolProp)({
      label: "Use Native Controls",
      description: "Display the playback controls, allowing users to play or pause the video.",
      defaultValue: true
    }),
    shouldPlay: (0, _types.createStaticBoolProp)({
      label: "Play Automatically",
      description: "Start playing the video after loading is finished."
    }),
    isLooping: (0, _types.createStaticBoolProp)({
      label: "Loop Video",
      description: "Automatically replay the video."
    }),
    positionMillis: (0, _types.createNumberProp)({
      label: "Starting Point",
      description: "Set a certian starting point of the video",
      min: 0,
      step: 0.01,
      precision: 2,
      group: _types.GROUPS.basic
    }),
    rate: (0, _types.createNumberProp)({
      label: "Playback Rate",
      description: "The playback rate of the media. This value must be between 0.0 and 32.0 (Default: 1)",
      min: 0,
      max: 32,
      step: 0.25,
      precision: 2,
      group: _types.GROUPS.basic
    }),
    volume: (0, _types.createNumberProp)({
      label: "Volume",
      description: "The volume of the audio for this media. This value must be between 0.0 (silence) and 1.0 (maximum volume). (Default: .5)",
      min: 0,
      max: 1,
      step: 0.1,
      precision: 1,
      group: _types.GROUPS.basic
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Video.js.map