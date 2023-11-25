import { StyleSheet } from "react-native";
import COLORS from "./colors";

const STYLES = StyleSheet.create({
  // Estilos básicos
  sContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.bkg,
  },

  justNAlign: {
    justifyContent: "center",
    alignItems: "center",
  },

  // Estilos da tela de login
  loginInput: {
    height: 50,
    width: 350,
    borderWidth: 1,
    padding: 10,
    backgroundColor: COLORS.ligth,
    borderColor: COLORS.primary,
  },

  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 350,
    padding: 10,
    borderRadius: 100,
    backgroundColor: COLORS.button,
  },

  loginErrorBox: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: 300,
    borderRadius: 100,
    backgroundColor: COLORS.ligth,
  },

  calendar: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.ligth,
    borderRadius: 20,
    borderWidth: 5,
  },

  // Fontes
  bold: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ultraBold: {
    fontSize: 24,
    fontWeight: "900",
  },
  ligth: {
    fontSize: 14,
    fontWeight: "300",
    color: COLORS.black,
  },
});

export default STYLES;
