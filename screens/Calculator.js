import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function CalculatorScreen() {
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
  const [isResult, setIsResult] = useState("");
  const rightItems = ["x", "-", "+"];
  const [isPress, setIsPress] = useState("");
  const handleClick = (item) => {
    if (item === "C") {
      setIsPress("");
      setIsResult("");
    } else {
      setIsPress(`${isPress}${item}`);
    }
  };

  const handleClickEq = () => {
    setIsResult(eval(isPress.replace(/x/g, "*")));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20 }}>{isPress}</Text>
        <Text style={{ fontSize: 50 }}>{isResult}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.leftBtn}>
          {leftItems.map((item, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => handleClick(item)}
                style={styles.roundButton1}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.rightBtn}>
          {rightItems.map((item, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => handleClick(item)}
                style={styles.roundButton1}
              >
                <Text style={{ fontSize: 30 }}>{item}</Text>
              </TouchableOpacity>
            );
          })}

          <View>
            <TouchableOpacity
              onPress={() => handleClickEq()}
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
    backgroundColor: "coral",
  },
  header: {
    flex: 2,
    alignItems: "flex-end",
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "white",
  },
  btnEq: {
    marginTop: 15,
    margin: 6,
    width: 65,
    height: 154,
    backgroundColor: `#f08080`,
    borderRadius: 50,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  leftBtn: {
    flex: 3,
    backgroundColor: "white",
    flexDirection: "row-reverse",

    flexWrap: "wrap",
  },
  rightBtn: {
    flex: 1,

    backgroundColor: "white",
  },

  roundButton1: {
    marginTop: 15,
    margin: 6,
    width: 67,
    height: 67,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: `#d3d3d3`,
  },
  content: {
    flex: 4,
    borderTopEndRadius: 20,
    flexDirection: "row",
  },
});
