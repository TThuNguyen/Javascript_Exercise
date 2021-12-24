import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function CalculatorScreen() {
  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
    // do something
  };
  const leftItems = [
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
  const rightItems = ["x", "-", "+"];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20 }}>{5 * 5}</Text>
        <Text style={{ fontSize: 50 }}>25</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.leftBtn}>
          <View style={styles.item}>
            {leftItems.map((item, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={buttonClickedHandler}
                  style={styles.roundButton1}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.rightBtn}>
          <View style={styles.item}>
            {rightItems.map((item, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={buttonClickedHandler}
                  style={styles.roundButton1}
                >
                  <Text style={{ fontSize: 30 }}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View>
            <TouchableOpacity
              onPress={buttonClickedHandler}
              style={styles.btnEq}
            >
              <Text style={{ fontSize: 50, color: "white" }}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flex: 1,
    padding: 20,
    flexDirection: "column",
  },
  header: {
    flex: 2,
    alignItems: "flex-end",
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "lightgray",
  },
  btnEq: {
    margin: 10,
    width: 65,
    height: 120,
    backgroundColor: `#f08080`,
    borderRadius: 50,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  leftBtn: {
    flex: 3,
    backgroundColor: "lightblue",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
  },
  rightBtn: {
    flex: 1,

    backgroundColor: "gray",
  },

  roundButton1: {
    margin: 10,
    width: 65,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: `#d3d3d3`,
  },
  content: {
    flex: 5,
    backgroundColor: "coral",
    flexDirection: "row",
  },
});
