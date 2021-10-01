import React from "react";
import { Text, StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialCommunityIcons";

import { FONTS, SIZES } from "../constants";

function Key({ num, isDeleteBtn, addDigit, onDelete }) {
  return (
    <TouchableOpacity
      style={styles.key}
      onPress={() => (isDeleteBtn ? onDelete() : addDigit(num))}
    >
      {isDeleteBtn ? (
        <Icon name="backspace" size={30} color="white" />
      ) : (
        <Text style={{ ...FONTS.h2, color: "white" }}>{num}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  key: {
    width: "30%",
    height: SIZES.width / 4,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Key;
