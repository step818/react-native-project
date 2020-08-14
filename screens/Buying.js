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
