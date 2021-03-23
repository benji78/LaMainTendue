import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    {/* <Stack.Screen name="Bookings" component={BookingsScreen} /> */}
    <Stack.Screen name="My listings" component={ListingsScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    {/* <Stack.Screen name="EntrAide" component={EntrAideScreen} /> */}
    {/* <Stack.Screen name="Help" component={HelpScreen} /> */}
  </Stack.Navigator>
);
export default AccountNavigator;
