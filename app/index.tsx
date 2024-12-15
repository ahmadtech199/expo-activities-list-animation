import React, { useCallback, useLayoutEffect, useState } from "react";
import Animated, { LinearTransition } from "react-native-reanimated";
import { useNavigation } from "expo-router";
import { activities, ActivityData } from "@/mock/ActivityData";
import { RenderItem } from "@/components/RenderItem";
import { AddButton } from "@/components/AddButton";
import { StyleSheet, View } from "react-native";

const List = () => {
  const navigation = useNavigation();
  const [state, setState] = useState<ActivityData>([]);
  const [index, setIndex] = useState(activities.length - 1);

  const addItem = useCallback(() => {
    if (index >= 0) {
      setState((prevState) => [activities[index], ...prevState]);
      setIndex(index - 1);
    } else {
      setIndex(activities.length - 1);
      setState([]);
    }
  }, [index]);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => <AddButton isMinus={index < 0} onPress={addItem} />,
  //   });
  // }, [navigation, index]);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        itemLayoutAnimation={LinearTransition.springify()
          .damping(18)
          .stiffness(200)}
        data={state}
        contentInsetAdjustmentBehavior="never"
        keyExtractor={(item) => item.activity_name}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <RenderItem activity={item} isLast={0 === index} />
        )}
        inverted
      />
      <AddButton isMinus={index < 0} onPress={addItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 0,
    paddingTop: 40, // Add extra padding at the top for the header
  },
  listContent: {
    padding: 20,
    paddingBottom: 80, // Add extra padding at the bottom for the floating button
  },
  floatingButton: {
    backgroundColor: "#00000015",
    padding: 30,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default List;
