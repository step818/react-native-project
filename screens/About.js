import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";
import { globalStyles } from "../styles/global";

const About = ({ navigation }) => {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text style={globalStyles.container}>The About screen</Text>
      <Button title="Back to home screen" onPress={pressHandler} />
    </View>
  );
};

export default About;
