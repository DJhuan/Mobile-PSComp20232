import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { ROUTES } from "../assets/constants";
import { Memories, Calendar } from "../screens";

import colors from "../assets/constants/colors";

const Tab = createMaterialBottomTabNavigator();

function HomeNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      activeColor={colors.primary}
      inactiveColor={colors.bkg}
      barStyle={{
        backgroundColor: colors.header,
      }}
    >
      <Tab.Screen name={ROUTES.MEMORIES} component={Memories} />
      <Tab.Screen name={ROUTES.CALENDAR} component={Calendar} />
    </Tab.Navigator>
  );
}

export default HomeNavigator;
