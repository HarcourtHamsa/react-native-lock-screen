import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialCommunityIcons";

import Box from "../components/Box";
import { COLORS, FONTS, SIZES } from "../constants";
import KeyPad from "../components/KeyPad";

function LockScreen() {
  const inputRef = React.useRef(null);
  const [userInput, setUserInput] = React.useState();

  return (
    <View style={styles.screen}>
      <Box>
        {/* top half */}
        <View style={styles.top}>
          <View style={{ alignItems: "center" }}>
            <Icon name="lock" size={30} color="white" />
            <TextInput
              ref={inputRef}
              style={styles.input}
              maxLength={4}
              keyboardType="number-pad"
              secureTextEntry={true}
              showSoftInputOnFocus={false}
              value={userInput}
              onKeyPress={({ nativeEvent }) => {
                nativeEvent.key === "Backspace" ? console.log("Yes") : null;
              }}
            />
          </View>
        </View>

        {/* bottom half */}
        <View style={styles.bottom}>
          <KeyPad fns={setUserInput} />
        </View>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 2,
  },
  input: {
    color: "white",
    height: 50,
    width: SIZES.width / 2,
    borderRadius: SIZES.base,
    borderWidth: 2,
    borderColor: COLORS.transparentWhite,
    letterSpacing: SIZES.margin,
    marginTop: SIZES.margin,
    textAlign: "center",
    backgroundColor: COLORS.gray,
    ...FONTS.h1,
  },
});

export default LockScreen;
