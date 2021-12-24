import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default function CalculatorScreen() {
  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
    // do something
  };
  const number = [
    "/",
    "±",
    "C",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    ".",
    "0",
  ];
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Text>25</Text>
      </View>
      <View styles={styles.keyboard}>
        <View styles={styles.leftKeyboard}>
          <View style={styles.Btn}>
            {number.map((item, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={buttonClickedHandler}
                  style={styles.leftBtn}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View styles={styles.rightKeyboard}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    margin: "5%",
    flexDirection: "column",
    backgroundColor: "red",
  },
  header: {
    flex: 2,
    paddingHorizontal: 20,
    backgroundColor: "lightgray",
  },

  leftBtn: {
    margin: 10,
    width: 65,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "orange",
  },
  leftKeyboard: {
    width: "75%",
    flexWrap: "wrap",
    flexDirection: "row-reverse",
  },
});
