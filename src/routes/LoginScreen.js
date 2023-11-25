import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { STYLES } from "../assets/constants";
import { useForm, Controller } from "react-hook-form";
import { ErrorText } from "../components/texts";
import { signInFormSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import colors from "../assets/constants/colors";
import { AuthContext } from "../contexts/Auth";
import { ROUTES } from "../assets/constants";

const Login = (props) => {
  const { navigation } = props;

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(signInFormSchema) });

  const { logIn } = AuthContext();

  const handleSignIn = (data) => {
    logIn(data.email, data.password);
  };

  return (
    <View style={STYLES.sContainer}>
      {/* Login, senha e botão de envio */}

      <View style={[STYLES.sContainer, { flex: 3 }]}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[
                STYLES.loginInput,
                { borderTopLeftRadius: 20, borderTopRightRadius: 20 },
              ]}
              placeholder="E-mail"
              textAlign="left"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[
                STYLES.loginInput,
                { borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
              ]}
              placeholder="Password"
              textAlign="left"
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="password"
        />

        <TouchableOpacity
          style={[STYLES.loginButton, { margin: 5 }]}
          onPress={handleSubmit(handleSignIn)}
        >
          {isSubmitting ? (
            <ActivityIndicator color={colors.ligth} />
          ) : (
            <Text style={[STYLES.bold]}>Sign up</Text>
          )}
        </TouchableOpacity>
      </View>

      {!isValid && (
        <View style={STYLES.loginErrorBox}>
          {!!errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          {!!errors.password && (
            <ErrorText>{errors.password.message}</ErrorText>
          )}
        </View>
      )}

      <View style={STYLES.sContainer}>
        {/* Esqueci minha senha */}
        <TouchableOpacity style={[STYLES.bold, { margin: 20 }]}>
          <Text style={[STYLES.bold, { height: 25, color: "#8F5B3B" }]}>
            I Forgot my password!
          </Text>
        </TouchableOpacity>

        {/* Quero me inscrever */}
        <TouchableOpacity
          style={STYLES.bold}
          onPress={() => navigation.navigate(ROUTES.REGISTER)}
        >
          <Text style={[STYLES.bold, { height: 25, color: "#8F5B3B" }]}>
            Let's register!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
