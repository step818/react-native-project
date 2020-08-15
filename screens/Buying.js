import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { globalStyles } from "../styles/global";

export default function Buying({ navigation }) {
  const [listings, setListings] = useState([
    {
      title: "USB wired touch computer keyboard",
      description: "Barely used. Feels great to type.",
      condition: "Like new",
      price: "$15.00",
      coverPhoto: "1",
      key: "1",
    },
    {
      title: "Turquoise Gem Necklace",
      description:
        "Genuine turquoise stones in sterling silver. Indian - bohemian style necklace.",
      condition: "Good",
      price: "$80.00",
      coverPhoto: "2",
      key: "2",
    },
    {
      title: "Headphones",
      description: "Noise cancelling, comfy.",
      condition: "Fair",
      price: "$35.00",
      coverPhoto: "3",
      key: "3",
    },
    {
      title: "Rubber duck",
      description: "Classic yellow rubber duck.",
      condition: "Like new",
      price: "$10.00",
      coverPhoto: "4",
      key: "4",
    },
    {
      title: "Pull-out couch Blue",
      description: "Blue, satin cushions. 7' x 3' x 2.5'",
      condition: "Used, clean",
      price: "$150.00",
      coverPhoto: "5",
      key: "5",
    },
    {
      title: "25lb kettle bell",
      description: "dark gray, weighs exactly 25lbs",
      condition: "Like new",
      price: "$80.00",
      coverPhoto: "6",
      key: "6",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={listings}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("BuyingDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <Button title="Back to home screen" onPress={pressHandler} /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
