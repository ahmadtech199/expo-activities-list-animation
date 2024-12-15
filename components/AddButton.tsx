import React from "react";
import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

export const AddButton = ({
  isMinus,
  onPress,
}: {
  isMinus: boolean;
  onPress: () => void;
}) => {
  const theme = useTheme();
  const hasCustomStyles = Object.keys(styles).length > 0;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.addButtonStyle,
        { opacity: pressed ? 0.5 : 1 },
      ]}
    >
      <AntDesign
        name={isMinus ? "minus" : "plus"}
        size={hasCustomStyles ? 18 : 18}
        color={theme.colors.primary}
      />
      <Text
        style={{
          marginLeft: 5,
          color: theme.colors.primary,
          fontWeight: "bold",
        }}
      >
        {isMinus ? "Remove" : "Add"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  addButtonStyle: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    paddingBottom: 40,
    backgroundColor: "#00000010",
    padding: 30,
    borderRadius: 3,
    alignItems: "center",
  },
});
