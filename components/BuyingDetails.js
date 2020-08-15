import { Button, Image, StyleSheet, Text, View } from "react-native";
import { globalStyles, images } from "../styles/global";

import Card from "../shared/Card";
import React from "react";

export default function BuyingDetails({ navigation }) {
  const listing = navigation.getParam("coverPhoto");

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText2}>
          {navigation.getParam("title")}
        </Text>
        <Text style={globalStyles.paragraph}>
          {navigation.getParam("description")}
        </Text>
        <Text>{navigation.getParam("condition")}</Text>
        <Text>{navigation.getParam("price")}</Text>
      </Card>
      <View style={styles.coverPhoto}>
        <Image source={images.listings[listing]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  coverPhoto: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    maxWidth: "50%",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
