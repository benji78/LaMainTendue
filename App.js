import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavigationTheme from "./app/navigation/extra/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";

// temporarily the dark mode can be activated by changing the color pallet in app/config/colors.js and the statusBar style to light in app/components/Screen.js

export default function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
// independent={true}
