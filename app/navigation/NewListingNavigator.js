import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NewListingScreen from "../screens/NewListingScreen";
import ViewImageScreen from "../screens/ViewImageScreen";

const Stack = createStackNavigator();
// this navigator will be for clicking on a picture on the NewListingScreen
const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listing" component={NewListingScreen} />
    <Stack.Screen name="ViewImage" component={ViewImageScreen} />
  </Stack.Navigator>
);
export default AccountNavigator;
