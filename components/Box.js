import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { COLORS, SIZES } from "../constants";

export default function Box({ children }) {
  return <View style={styles.box}>{children}</View>;
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.margin,
    paddingTop: StatusBar.currentHeight + 50,
  },
});
