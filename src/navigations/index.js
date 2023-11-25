import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, AuthContext } from "../contexts/Auth";

import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";

const NavigatorSwap = () => {
  const { isLoggedIn } = AuthContext();
  return isLoggedIn ? <AuthNavigator /> : <HomeNavigator />;
};

export default () => {
  const context = AuthContext();
  return (
    <NavigationContainer>
      <AuthProvider>
        <NavigatorSwap />
      </AuthProvider>
    </NavigationContainer>
  );
};
