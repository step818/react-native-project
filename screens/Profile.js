import {
  FlatList,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import ProfileForm from "../components/EditProfileForm";
import { globalStyles } from "../styles/global";

export default function Profile() {
  const [modalOpen, setModalOpen] = useState(false);

  const [profile, setProfile] = useState([
    {
      firstName: "Stephen",
      lastName: "Trewick",
      location: "Seattle, WA",
      bio: "I love developing software!",
    },
  ]);
  // Edit profile functionality
  const editProfile = (profile) => {
    setProfile(() => {
      return [profile];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="fade">
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
            <ProfileForm editProfile={editProfile} profile={profile} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="edit"
        size={26}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={profile}
        renderItem={({ item }) => (
          <View>
            <Text style={globalStyles.paragraph}>
              {item.firstName + " " + item.lastName}
            </Text>
            <Text>Location: {item.location}</Text>
            <Text>Bio: {item.bio}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
