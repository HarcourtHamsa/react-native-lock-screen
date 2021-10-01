import React from "react";
import { View, StyleSheet } from "react-native";
import Box from "../components/Box";

export default function Add() {
  return (
    <View style={styles.screen}>
      <Box></Box>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
