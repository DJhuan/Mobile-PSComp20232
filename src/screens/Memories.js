import { Text, View, Dimensions } from "react-native";
import React from "react";
import { STYLES } from "../assets/constants";
import Carousel from "react-native-reanimated-carousel";
import colors from "../assets/constants/colors";

const width = Dimensions.get("window").width - 10;

const HomeScreen = () => {
  return (
    <View style={STYLES.sContainer}>
      <Text style={[STYLES.ultraBold, { marginBottom: 50 }]}>
        A Beautiful Header
      </Text>
      <Carousel
        loop
        width={width}
        height={width}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={500}
        style={{ borderRadius: 20, borderCurve: "circular" }}
        renderItem={({ index }) => (
          <View
            style={[STYLES.sContainer, { backgroundColor: colors.undertone }]}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
          </View>
        )}
      />
      <Text style={STYLES.ligth}>
        Liquorice tart marshmallow tiramisu apple pie sweet roll lemon drops
        toffee.
      </Text>
    </View>
  );
};

export default HomeScreen;
