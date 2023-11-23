import { Text, TextInput, View, TouchableOpacity } from "react-native";
import React from "react";
import { ROUTES, STYLES } from "../assets/constants";

const Login = (props) => {
  const { navigation } = props;
  return (
    <View style={STYLES.sContainer}>
      {/* Login, senha e botão de envio */}
      <TextInput
        style={[STYLES.loginInput, { margin: 5, padding: 10 }]}
        placeholder="E-mail"
        textAlign="left"
      />

      <TextInput
        style={[STYLES.loginInput, { margin: 5, padding: 10 }]}
        placeholder="Password"
        textAlign="left"
        secureTextEntry={true}
      />

      <TouchableOpacity style={[STYLES.loginButton, { margin: 5 }]}>
        <Text style={[STYLES.bold]}>Sign up</Text>
      </TouchableOpacity>

      {/* Esqueci minha senha */}
      <TouchableOpacity style={[STYLES.bold, { marginTop: 100 }]}>
        <Text style={[STYLES.bold, { height: 25, color: "#8F5B3B" }]}>
          I Forgot my password!
        </Text>
      </TouchableOpacity>

      {/* Quero me inscrever */}
      <TouchableOpacity
        style={[STYLES.bold, { marginTop: 100 }]}
        onPress={() => navigation.navigate(ROUTES.REGISTER)}
      >
        <Text style={[STYLES.bold, { height: 25, color: "#8F5B3B" }]}>
          Let's register!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
