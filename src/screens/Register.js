import { Text, TextInput, View, TouchableOpacity } from "react-native";
import React from "react";
import { STYLES } from "../assets/constants";

const Register = (props) => {
  const { navigator } = props;
  return (
    <View style={STYLES.sContainer}>
      <Text style={[STYLES.bold, { marginBottom: 30 }]}>Let's sign up!</Text>

      <TextInput
        style={[STYLES.loginInput, { margin: 5, padding: 10 }]}
        placeholder="Name"
        textAlign="left"
      />
      <TextInput
        style={[STYLES.loginInput, { margin: 5, padding: 10 }]}
        placeholder="E-mail"
        textAlign="left"
      />
      <TextInput
        style={[STYLES.loginInput, { margin: 5, padding: 10 }]}
        placeholder="Password"
        textAlign="left"
      />
      <TouchableOpacity style={[STYLES.loginButton, { margin: 5 }]}>
        <Text style={[STYLES.bold]}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
