import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ViewImageScreen from "../screens/ViewImageScreen";

const Stack = createStackNavigator();

const FeedNavigator = ({ route }) => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen component={ListingsScreen} name="Listings" initialParams={route.params} />
    <Stack.Screen component={ListingDetailsScreen} name="ListingDetails" />
    <Stack.Screen component={ViewImageScreen} name="ViewImage" />
  </Stack.Navigator>
);
export default FeedNavigator;
