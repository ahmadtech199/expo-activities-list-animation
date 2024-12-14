import { StyleSheet, View, ViewProps } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import Animated, { AnimatedProps } from "react-native-reanimated";

export const Line = (props: AnimatedProps<ViewProps>) => {
  const theme = useTheme();
  return (
    <Animated.View
      {...props}
      style={[
        { backgroundColor: theme.colors.border },
        styles.line,
        props.style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    flex: 1,
    width: 3,
    alignSelf: "center",
  },
});
