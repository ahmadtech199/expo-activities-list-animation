import React from "react";
import { Pressable } from "react-native";
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
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        transform: [{ scale: pressed ? 0.95 : 1 }],
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <AntDesign
        name={isMinus ? "minuscircleo" : "pluscircleo"}
        size={22}
        color={theme.colors.primary}
      />
    </Pressable>
  );
};
