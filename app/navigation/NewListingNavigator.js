import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingEditScreen from "../screens/ListingEditScreen";
import ViewImageScreen from "../screens/ViewImageScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listing" component={ListingEditScreen} />
    <Stack.Screen name="ViewImage" component={ViewImageScreen} />
  </Stack.Navigator>
);
export default AccountNavigator;
