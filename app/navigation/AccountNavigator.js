import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "./AuthNavigator";
import FeedNavigator from "./FeedNavigator";
import AccountScreen from "../screens/AccountScreen";
import BookingsScreen from "../screens/BookingsScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();
const filter = false;
const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen component={AccountScreen} name="Account" options={{ headerShown: false }} />
    <Stack.Screen component={BookingsScreen} name="Bookings" />
    <Stack.Screen
      component={FeedNavigator}
      name="My listings"
      options={{ headerShown: false }}
      initialParams={{ filter: false }}
    />
    <Stack.Screen component={MessagesScreen} name="Messages" />
    <Stack.Screen component={AuthNavigator} name="Auth" />
    {/* <Stack.Screen component={EntrAideScreen} name="EntrAide" /> */}
    {/* <Stack.Screen component={HelpScreen} name="Help" /> */}
  </Stack.Navigator>
);
export default AccountNavigator;
