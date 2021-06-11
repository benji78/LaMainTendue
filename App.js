import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavigationTheme from "./app/navigation/extra/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import { ThemeProvider } from "./app/theme/ThemeContext";

export default function App() {
  const [user, setUser] = useState();

  return (
    <ThemeProvider>
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer theme={NavigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}
// independent={true}
