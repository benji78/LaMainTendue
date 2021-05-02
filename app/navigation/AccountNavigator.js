import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "./AuthNavigator";
import FeedNavigator from "./FeedNavigator";
import AccountScreen from "../screens/AccountScreen";
import BookingsScreen from "../screens/BookingsScreen";
import MessagesScreen from "../screens/MessagesScreen";
import { useTheme } from "../theme/ThemeContext";

const Stack = createStackNavigator();
const AccountNavigator = () => {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.white },
        headerTitleStyle: { color: theme.black },
      }}
    >
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
      {/* <Stack.Screen component={EntraideScreen} name="EntrAide" /> */}
      {/* <Stack.Screen component={HelpScreen} name="Help" /> */}
    </Stack.Navigator>
  );
};
export default AccountNavigator;
