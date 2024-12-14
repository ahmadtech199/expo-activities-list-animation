export type Activity = {
  time: string;
  activity_color: string;
  activity_name: string;
  activity_description: string;
  duration: string;
  activity_image: string;
};

export type ActivityData = Activity[];

export const activities: ActivityData = [
  {
    time: "10:00 PM",
    activity_color: "#74B421",
    activity_name: "Sleep",
    activity_description: "Went to bed early for a full night's rest.",
    duration: "8 hrs",
    activity_image: require("@/assets/svg/moon.svg"),
  },
  {
    time: "07:00 PM",
    activity_color: "#09A6C4",
    activity_name: "Evening Swim",
    activity_description:
      "Practiced freestyle strokes for 30 minutes. Water was calm and refreshing.",
    duration: "30 mins",
    activity_image: require("@/assets/svg/swim.svg"),
  },
  {
    time: "05:30 PM",
    activity_color: "#DD413B",
    activity_name: "Gym Workout",
    activity_description:
      "Intense upper body session:\n1. Bench press - 3 sets of 12 reps\n2. Pull-ups - 3 sets to failure\n3. Dumbbell curls - 3 sets of 15 reps",
    duration: "1 hr 30 mins",
    activity_image: require("@/assets/svg/dumbbell.svg"),
  },
  {
    time: "01:00 PM",
    activity_color: "#15A294",
    activity_name: "Office Yoga",
    activity_description:
      "Focused on improving posture and relieving tension in the back and neck.",
    duration: "45 mins",
    activity_image: require("@/assets/svg/yoga.svg"),
  },
  {
    time: "09:00 AM",
    activity_color: "#3A83FC",
    activity_name: "Mountain Hike",
    activity_description:
      "Key highlights:\n- Reached the summit at 10 AM\n- Spotted diverse flora and fauna\n- Enjoyed breathtaking views of the valley",
    duration: "3 hrs",
    activity_image: require("@/assets/svg/hike.svg"),
  },
  {
    time: "08:00 AM",
    activity_color: "#25B353",
    activity_name: "Garden Walk",
    activity_description:
      "Strolled through the botanical garden, appreciating the vibrant flowers and serene environment.",
    duration: "40 mins",
    activity_image: require("@/assets/svg/garden.svg"),
  },
  {
    time: "06:30 AM",
    activity_color: "#5F6B79",
    activity_name: "Morning Run",
    activity_description:
      "Covered 5 kilometers around the park with a steady pace.",
    duration: "30 mins",
    activity_image: require("@/assets/svg/run.svg"),
  },
  {
    time: "06:00 AM",
    activity_color: "#E9B306",
    activity_name: "Wake Up",
    activity_description: "Started the day feeling refreshed and energized.",
    duration: "",
    activity_image: require("@/assets/svg/sun.svg"),
  },
];

