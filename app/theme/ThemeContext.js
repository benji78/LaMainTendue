import React, { createContext, useContext, useState } from "react";
import { StatusBar } from "react-native";

import lightTheme from "./light";
import darkTheme from "./dark";

const ThemeContext = createContext({
  dark: false,
  theme: lightTheme,
  toggle: () => {},
});
// export const useTheme = () => React.useContext(ThemeContext);

// const ManageThemeProvider = ({ children }) => {
//   const [themeState, setThemeState] = useState(defaultMode);
//   const setMode = (mode) => {
//     setThemeState(mode);
//   };
//   return (
//     <ThemeContext.Provider value={{ mode: themeState, setMode }}>
//       <ThemeProvider theme={themeState === "dark" ? darkTheme.theme : lightTheme.theme}>
//         <>
//           <StatusBar barStyle={themeState === "dark" ? "light-content" : "dark-content"} />
//           {children}
//         </>
//       </ThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const toggle = () => {
    setDark(!dark);
  };
  const theme = dark ? darkTheme : lightTheme;

  return <ThemeContext.Provider value={{ dark, theme, toggle }}>{children}</ThemeContext.Provider>;
}
const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
