import * as Font from "expo-font";

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppLoading } from "expo";
import Navigator from "./navigation/Drawer";

const getFonts = () =>
  Font.loadAsync({
    "baloo2-regular": require("./fonts/Baloo2-Regular.ttf"),
    "baloo2-bold": require("./fonts/Baloo2-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
