import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./extra/NewListingButton";
import NewListingScreen from "../screens/NewListingScreen";
import routes from "./routes";

const Tab = createBottomTabNavigator();
const filter = true;
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      // initialParams={{ depuis: "AppNav" }}
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
      }}
      initialParams={{ filter: true }}
    />
    <Tab.Screen
      name={routes.LISTING_EDIT}
      component={NewListingScreen}
      options={({ navigation }) => ({
        tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
      }}
    />
  </Tab.Navigator>
);
// <Image source={require("../assets/icon.png")} style={{ height: 30, width: 30 }} />
export default AppNavigator;
