import {
  Button,
  FlatList,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import SellForm from "../components/SellForm";
import { globalStyles } from "../styles/global";

export default function Selling({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

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

  const addSellListing = (listing) => {
    listing.key = Math.random().toString();
    setListings((currentListings) => {
      return [listing, ...currentListings];
    });
    setModalOpen(false);
  };

  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{
                ...globalStyles.modalToggle,
                ...globalStyles.modalClose,
              }}
              onPress={() => setModalOpen(false)}
            />
            <SellForm addSellListing={addSellListing} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={globalStyles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={listings}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("SellingDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Back to home screen" onPress={pressHandler} />
    </View>
  );
}
