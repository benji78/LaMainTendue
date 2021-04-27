import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ViewImageScreen from "../screens/ViewImageScreen";

const Stack = createStackNavigator();

const FeedNavigator = ({ route }) => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: "vertical",
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    }}
  >
    <Stack.Screen component={ListingsScreen} name="Listings" initialParams={route.params} />
    <Stack.Screen
      component={ListingDetailsScreen}
      name="ListingDetails"
      options={{
        gestureResponseDistance: { vertical: 300 },
      }}
    />
    <Stack.Screen component={ViewImageScreen} name="ViewImage" />
  </Stack.Navigator>
);
export default FeedNavigator;
