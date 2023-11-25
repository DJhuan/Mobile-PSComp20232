import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { ROUTES, STYLES } from "../assets/constants";
import Carousel from "react-native-reanimated-carousel";
import colors from "../assets/constants/colors";
import { Entypo } from "@expo/vector-icons";

const width = Dimensions.get("window").width - 10;

const HomeScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={[STYLES.sContainer, { alignContent: "space-between" }]}>
      <TouchableOpacity
        style={[
          STYLES.loginButton,
          { width: 50, margin: 5, alignSelf: "flex-end" },
        ]}
        onPress={() => navigation.navigate(ROUTES.CALENDAR)}
      >
        <Entypo name="calendar" size={30} color={colors.ligth} />
      </TouchableOpacity>

      <Carousel
        loop
        width={width}
        height={width * 1.5}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={500}
        style={{ borderRadius: 20 }}
        snapEnabled
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
