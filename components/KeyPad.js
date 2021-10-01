import React from "react";
import { View, StyleSheet } from "react-native";

import Key from "./Key";

function KeyPad({ fns }) {
  let digitsEntered = ["0"];

  const getDigitsFromArray = (arr) => {
    const v = arr.splice("").join("").toString();
  };

  const addDigit = (num) => {
    // if (count === 5) {
    //   // console.log("total pin", digitsEntered);
    //   fns(digitsEntered);
    //   return; // break out
    // }

    // digitsEntered += num;
    digitsEntered.push(num);
    console.log(getDigitsFromArray(digitsEntered));
    // fns(digitsEntered);
  };

  const backspace = () => {
    console.log("backspace");
  };

  return (
    <View style={styles.kdb}>
      {/* nnumeric key */}
      <Key num="1" addDigit={addDigit} />
      <Key num="2" addDigit={addDigit} />
      <Key num="3" addDigit={addDigit} />
      <Key num="4" addDigit={addDigit} />
      <Key num="5" addDigit={addDigit} />
      <Key num="6" addDigit={addDigit} />
      <Key num="7" addDigit={addDigit} />
      <Key num="8" addDigit={addDigit} />
      <Key num="9" addDigit={addDigit} />
      <Key num="" addDigit={addDigit} />
      <Key num="0" addDigit={addDigit} />
      <Key num="" isDeleteBtn={true} onDelete={backspace} />
    </View>
  );
}

const styles = StyleSheet.create({
  kdb: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default KeyPad;
