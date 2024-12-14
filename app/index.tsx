import React, { useCallback, useLayoutEffect, useState } from "react";
import Animated, { LinearTransition } from "react-native-reanimated";
import { useNavigation } from "expo-router";
import { activities, ActivityData } from "@/mock/ActivityData";
import { RenderItem } from "@/components/RenderItem";
import { AddButton } from "@/components/AddButton";

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <AddButton isMinus={index < 0} onPress={addItem} />,
    });
  }, [navigation, index]);

  return (
    <Animated.FlatList
      itemLayoutAnimation={LinearTransition.springify()
        .damping(18)
        .stiffness(200)}
      data={state}
      contentInsetAdjustmentBehavior="automatic"
      keyExtractor={(item) => item.activity_name}
      contentContainerStyle={{ padding: 20 }}
      renderItem={({ item, index }) => (
        <RenderItem activity={item} isLast={state.length - 1 === index} />
      )}
    />
  );
};

export default List;
