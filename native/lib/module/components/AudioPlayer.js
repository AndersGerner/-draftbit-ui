import * as React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

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

export default function AudioPlayer(_ref) {
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
    } = await Audio.Sound.createAsync(source);
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
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(TouchableHighlight, {
    onPress: playSound,
    style: {
      marginRight: 8
    }
  }, /*#__PURE__*/React.createElement(AntDesign, {
    name: iconName,
    size: 24
  })), /*#__PURE__*/React.createElement(Text, {
    style: {
      marginRight: 8
    }
  }, formatDuration(sliderPositionMillis || 0), " /", " ", formatDuration(durationMillis || 0)), /*#__PURE__*/React.createElement(Slider, {
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
const styles = StyleSheet.create({
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