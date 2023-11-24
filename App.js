import { STYLES } from "./src/assets/constants";
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./src/navigations/AuthNavigator";
export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
