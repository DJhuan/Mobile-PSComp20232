import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "../assets/constants";
import colors from "../assets/constants/colors";

import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();

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
    </Stack.Navigator>
  );
}

export default AuthNavigator;
