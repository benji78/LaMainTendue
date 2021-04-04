import React from "react";
import { Text as ReactText } from "react-native";

import defaultStyles from "../config/styles";

function Text({ children, style, ...otherProps }) {
  return (
    <ReactText style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </ReactText>
  );
}

export default Text;
