import { Button, StyleSheet, Text, View } from "react-native";

import Card from "../shared/Card";
import FlatButton from "../shared/Button";
import React from "react";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  const sellHandler = () => {
    navigation.navigate("Selling");
  };
  const buyHandler = () => {
    navigation.navigate("Buying");
  };
  const profileHandler = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
        <View style={styles.homeBarButton}>
          <FlatButton text="Selling" onPress={sellHandler} />
        </View>
        <View style={styles.homeBarButton}>
          <FlatButton text="Buying" onPress={buyHandler} />
        </View>
        <View style={styles.homeBarButton}>
          <FlatButton text="Profile" onPress={profileHandler} />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homeBarButton: {
    marginRight: 2,
  },
});
