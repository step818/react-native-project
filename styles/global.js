import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#008040",
  },
  titleText: {
    fontFamily: "baloo2-bold",
    fontSize: 18,
    color: "#b3daff",
  },
  titleText2: {
    fontFamily: "baloo2-bold",
    fontSize: 18,
    color: "#4d4d00",
  },
  paragraph: {
    fontFamily: "baloo2-regular",
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
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

export const images = {
  listings: {
    "1": require("../assets/keyboard.png"),
    "2": require("../assets/turquoiseNecklace.png"),
    "3": require("../assets/headphones.png"),
    "4": require("../assets/rubberduck.png"),
    "5": require("../assets/pullOutCouch.png"),
    "6": require("../assets/kettleBell.png"),
  },
};
