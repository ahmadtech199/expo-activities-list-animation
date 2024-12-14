import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Activity } from "@/mock/ActivityData";
import { useTheme } from "@react-navigation/native";
import { Heading, Paragraph, SubHeading } from "./CustomText";
import { Line } from "./Line";
import Animated, {
  AnimatedProps,
  FadeInUp,
  FadeOutDown,
  ZoomIn,
} from "react-native-reanimated";

type RenderItemType = {
  activity: Activity;
  isLast: boolean;
};

type ActivityImageType = {
  activity: Activity;
  isLast: boolean;
};

const AnimatedImage = Animated.createAnimatedComponent(Image);

export const RenderItem = (params: RenderItemType) => {
  const { activity, isLast } = params;
  const theme = useTheme();
  return (
    <Animated.View
      entering={FadeInUp.springify().damping(18).stiffness(200)}
      exiting={FadeOutDown}
      style={styles.container}
    >
      <ActivityImage activity={activity} isLast={isLast} />
      {/* To make card animate separate  */}
      <CardContainer entering={FadeInUp.springify().damping(18).stiffness(200)}>
        <Heading style={{ color: theme.colors.text }}>
          {activity.activity_name}
        </Heading>
        <SubHeading
          style={[styles.subHeadingStyle, { color: theme.colors.text }]}
        >
          {activity.time}
        </SubHeading>
        <Paragraph style={{ color: theme.colors.text }}>
          {activity.activity_description}
        </Paragraph>
      </CardContainer>
    </Animated.View>
  );
};

const CardContainer = (props: AnimatedProps<ViewProps>) => {
  const theme = useTheme();
  const themedContainerStyle = {
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
  };
  return (
    <Animated.View
      {...props}
      style={[styles.card, themedContainerStyle, props.style]}
    />
  );
};

const ActivityImage = (params: ActivityImageType) => {
  const { activity, isLast } = params;
  const theme = useTheme();
  const backgroundColor = activity.activity_color;
  const imageMargin = 16;
  return (
    <Animated.View>
      <View
        style={[
          styles.imageWrapper,
          { backgroundColor, marginTop: imageMargin },
        ]}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          colors={[theme.colors.text, "transparent"]}
          style={styles.imageGradient}
        />
        <AnimatedImage
          entering={ZoomIn.springify().damping(18).stiffness(200)}
          source={activity.activity_image}
          style={styles.image}
        />
      </View>
      <Line
        style={{
          opacity: isLast ? 0 : 1,
          marginBottom: -imageMargin - styles.image.height / 2,
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  imageWrapper: {
    width: 45,
    height: 45,
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  imageGradient: {
    width: 45,
    height: 45,
    borderRadius: 25,
    position: "absolute",
  },
  image: {
    width: 25,
    height: 25,
    zIndex: 1,
  },
  card: {
    padding: 16,
    flexShrink: 1,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: StyleSheet.hairlineWidth,
  },
  subHeadingStyle: {
    marginTop: 5,
    marginBottom: 10,
  },
});
5;
