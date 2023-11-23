import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import NavbarLayout from "../components/Navbar/NavbarLayout";
import RenderCondicional from "../components/RenderCondicional/RenderCondicional";

export default () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RenderCondicional />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  retangulo: {
    width: 200,
    height: 100,
    backgroundColor: "#1cd",
  },
});
