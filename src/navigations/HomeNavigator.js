import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../assets/constants/colors";

import { ROUTES } from "../assets/constants";
import { Memories, Calendar } from "../routes";

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.ligth,
        headerStyle: {
          backgroundColor: colors.header,
        },
        transitionSpec: { open: ANIMATIONS, close: ANIMATIONS },
      }}
      initialRouteName={ROUTES.MEMORIES}
    >
      <Stack.Screen name={ROUTES.MEMORIES} component={Memories} />
      <Stack.Screen name={ROUTES.CALENDAR} component={Calendar} />
    </Stack.Navigator>
  );
}

const ANIMATIONS = {
  animation: "spring",
  config: {
    stiffness: 800,
    damping: 500,
    mass: 5,
    overshootClamping: true,
    restDisplacementThreshold: 1,
    restSpeedThreshold: 1,
  },
};

export default HomeNavigator;
