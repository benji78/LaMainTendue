import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";
import ListingsScreen from "../screens/ListingsScreen";
import BookingsScreen from "../screens/BookingsScreen";
import AuthNavigator from "./AuthNavigator";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen component={AccountScreen} name="Account" options={{ headerShown: false }} />
    <Stack.Screen component={BookingsScreen} name="Bookings" />
    <Stack.Screen component={ListingsScreen} name="My listings" />
    <Stack.Screen component={MessagesScreen} name="Messages" />
    <Stack.Screen component={AuthNavigator} name="Auth" />
    {/* <Stack.Screen component={EntrAideScreen} name="EntrAide" /> */}
    {/* <Stack.Screen component={HelpScreen} name="Help" /> */}
  </Stack.Navigator>
);
export default AccountNavigator;
