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
    height: 40,
    width: 350,
    borderWidth: 1,
    padding: 10,
    backgroundColor: COLORS.ligth,
    borderColor: COLORS.primary,
    borderRadius: 100,
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

  // Fontes
  bold: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default STYLES;
