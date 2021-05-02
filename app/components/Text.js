import React from "react";
import { Text as ReactText } from "react-native";

import defaultStyles from "../config/styles";
import { useTheme } from "../theme/ThemeContext";

function Text({ children, style, ...otherProps }) {
  const { theme } = useTheme();

  return (
    <ReactText style={[defaultStyles.text, { color: theme.darkGray }, style]} {...otherProps}>
      {children}
    </ReactText>
  );
}

export default Text;
