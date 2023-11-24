import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ROUTES } from "../assets/constants";
import { Memories, Calendar } from "../screens";

import colors from "../assets/constants/colors";

const Stack = createStackNavigator();

function HomeNavigatorrr() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.ligth,
        headerStyle: {
          backgroundColor: colors.header,
        },
      }}
      initialRouteName={ROUTES.MEMORIES}
    >
      <Stack.Screen name={ROUTES.MEMORIES} component={Memories} />
      <Stack.Screen name={ROUTES.CALENDAR} component={Calendar} />
    </Stack.Navigator>
  );
}

export default HomeNavigatorrr;
