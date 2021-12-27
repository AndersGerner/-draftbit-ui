"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AudioPlayer;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _expoAv = require("expo-av");

var _vectorIcons = require("@expo/vector-icons");

var _slider = _interopRequireDefault(require("@react-native-community/slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function formatDuration(duration) {
  if (duration === 0 || duration === 1) return "00:00";
  const seconds = Math.floor(duration / 1000 % 60);
  const minutes = Math.floor(duration / (1000 * 60) % 60);
  const hours = Math.floor(duration / (1000 * 60 * 60) % 24);
  const renderedHours = hours < 10 ? "0" + hours : hours;
  const renderedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const renderedSeconds = seconds < 10 ? "0" + seconds : seconds;

  if (hours > 0) {
    return renderedHours + ":" + renderedMinutes + ":" + renderedSeconds;
  }

  return renderedMinutes + ":" + renderedSeconds;
}

function AudioPlayer(_ref) {
  let {
    source
  } = _ref;
  const [sound, setSound] = React.useState();
  const [playing, setPlay] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [durationMillis, setDurationMillis] = React.useState(1);
  const [isDraggingSlider, setIsDraggingSlider] = React.useState(false);
  const [sliderPositionMillis, setSliderPositionMillis] = React.useState(0);

  const onPlaybackStatusUpdate = status => {
    if (status.isLoaded) {
      if (status.isPlaying && !isDraggingSlider) {
        setSliderPositionMillis(status.positionMillis);
      }
    }
  };

  const setOnPlaybackStatusUpdate = () => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    }
  };

  React.useEffect(() => {
    return sound ? () => {
      sound.unloadAsync();
    } : undefined;
  }, [sound]);

  async function loadAudio() {
    setLoading(true);
    const {
      sound: s,
      status
    } = await _expoAv.Audio.Sound.createAsync(source);
    setSound(s);
    setLoading(false);
    setOnPlaybackStatusUpdate();

    if (status.isLoaded && status.durationMillis) {
      setDurationMillis(status.durationMillis);
    }

    s.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    await s.playAsync();
    setPlay(true);
  }

  async function playSound() {
    if (sound && playing) {
      await sound.pauseAsync();
      setPlay(false);
      return;
    }

    if (sound && !playing) {
      await sound.playAsync();
      setPlay(true);
      return;
    }

    await loadAudio();
  }

  const setTrackPosition = async positionMillis => {
    if (sound) {
      await sound.setPositionAsync(positionMillis);
    }
  };

  const onSlidingComplete = sliderValue => {
    if (isDraggingSlider) {
      setIsDraggingSlider(false);
    }

    setTrackPosition(sliderValue);
  };

  const onSliderChange = () => {
    if (!isDraggingSlider) {
      setIsDraggingSlider(true);
    }
  };

  const iconName = loading ? "loading1" : !sound || !playing ? "play" : "pause";
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(_reactNative.TouchableHighlight, {
    onPress: playSound,
    style: {
      marginRight: 8
    }
  }, /*#__PURE__*/React.createElement(_vectorIcons.AntDesign, {
    name: iconName,
    size: 24
  })), /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: {
      marginRight: 8
    }
  }, formatDuration(sliderPositionMillis || 0), " /", " ", formatDuration(durationMillis || 0)), /*#__PURE__*/React.createElement(_slider.default, {
    style: {
      flex: 1
    },
    minimumTrackTintColor: "#333",
    maximumTrackTintColor: "#000000",
    thumbTintColor: "black",
    minimumValue: 0,
    value: sliderPositionMillis,
    maximumValue: durationMillis,
    onValueChange: onSliderChange,
    onSlidingComplete: onSlidingComplete
  }));
}

const styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center"
  }
});
//# sourceMappingURL=AudioPlayer.js.map