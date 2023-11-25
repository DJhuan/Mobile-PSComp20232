import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { ROUTES } from "../assets/constants";
import { Memories, Calendar } from "../routes";

const Tab = createMaterialTopTabNavigator();

function HomeNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator style={{ paddingTop: insets.top }}>
      <Tab.Screen name={ROUTES.MEMORIES} component={Memories} />
      <Tab.Screen name={ROUTES.CALENDAR} component={Calendar} />
    </Tab.Navigator>
  );
}

export default HomeNavigator;
