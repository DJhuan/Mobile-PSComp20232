import { Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { STYLES } from "../assets/constants";
import CalendarPicker from "react-native-calendar-picker";
import colors from "../assets/constants/colors";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const updateDate = (date) => {
    setDate(date);
  };

  return (
    <View style={STYLES.sContainer}>
      <View style={{ margin: 20 }}>
        <Text style={[STYLES.ligth, { fontSize: 20, textAlign: "center" }]}>
          {`Pick a date!\nYour memories are waiting!`}
        </Text>
      </View>

      <View
        style={[STYLES.calendar, { width: width - 10, height: width - 20 }]}
      >
        <CalendarPicker
          height={width - 60}
          selectedDayColor={colors.undertone}
          todayBackgroundColor={colors.fadeOut}
          textStyle={STYLES.ligth}
          onDateChange={updateDate}
        />
      </View>
    </View>
  );
};

export default Calendar;
