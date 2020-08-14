import About from "../screens/About";
import Header from "../shared/Header";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About GarageSale" />
        ),
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#9bbcf2", height: 60, width: "100%" },
  },
});

export default AboutStack;
