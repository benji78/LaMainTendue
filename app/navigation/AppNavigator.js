import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./extra/NewListingButton";
import NewListingScreen from "../screens/NewListingScreen";
import routes from "./routes";
import { useTheme } from "../theme/ThemeContext";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{ activeBackgroundColor: theme.white, inactiveBackgroundColor: theme.white }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        initialParams={{ filter: true }}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={"NewListing"}
        component={NewListingScreen}
        options={({ navigation }) => ({
          tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.NEW_LISTING)} />,
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
// <Image source={require("../assets/icon.png")} style={{ height: 30, width: 30 }} />
export default AppNavigator;
