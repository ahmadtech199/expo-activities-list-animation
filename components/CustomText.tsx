import { StyleSheet, Text, TextProps } from "react-native";

export const Heading = (props: TextProps) => (
  <Text {...props} style={[styles.heading, props.style]} />
);
export const SubHeading = (props: TextProps) => (
  <Text {...props} style={[styles.subHeading, props.style]} />
);
export const Paragraph = (props: TextProps) => (
  <Text {...props} style={[styles.paragraph, props.style]} />
);

const styles = StyleSheet.create({
  heading: {
    fontSize: 15,
    fontWeight: "600",
    opacity: 0.8,
  },
  subHeading: {
    fontSize: 13,
    opacity: 0.6,
  },
  paragraph: {
    fontSize: 15,
    opacity: 0.7,
  },
});
