import Buying from "../screens/Buying";
import BuyingDetails from "../components/BuyingDetails";
import Header from "../shared/Header";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import React from "react";
import Selling from "../screens/Selling";
import SellingDetails from "../screens/SellingDetails";
import { createStackNavigator } from "react-navigation-stack";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="GarageSale" />
        ),
      };
    },
  },
  Selling: {
    screen: Selling,
    navigationOptions: {
      title: "Items you're selling",
    },
  },
  Buying: {
    screen: Buying,
    navigationOptions: {
      title: "Items for sale",
    },
  },
  BuyingDetails: {
    screen: BuyingDetails,
    navigationOptions: {
      title: "Listing details",
    },
  },
  SellingDetails: {
    screen: SellingDetails,
    navigationOptions: {
      title: "Your details",
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: "Your profile",
    },
  },
};

const AppNavigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#9bbcf2", height: 60 },
  },
});

export default AppNavigator;
