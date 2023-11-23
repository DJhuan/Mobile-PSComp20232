import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "../assets/constants";
import colors from "../assets/constants/colors";

import { Login, Register } from "../screens";
const Stack = createStackNavigator();

import HomeNavigator from "./HomeNavigator";

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.ligth,
        headerStyle: {
          backgroundColor: colors.header,
        },
      }}
      initialRouteName={ROUTES.LOGIN}
    >
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen
        name={ROUTES.HOME}
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
