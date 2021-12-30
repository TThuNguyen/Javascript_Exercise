import React from "react";
import { useState } from "react";
import Btn from "./Btn";

import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  Alert,
  View,
  TouchableOpacity,
} from "react-native";
export default function FlatList2() {
  const DATA = [
    {
      id: "02-08-20_01",
      title: "Thu 05 Nov (Total: 1h 40m)",
      subTitle: "02:15pm to 04:10pm - 15m lunch",
      jobName: "835-853 High St, Armadale OH - Overheads",
      leaveType: "N/A",
      timeAllowance: "N/A",
      laha: "N/A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet, elementum augue velit orci risus cras. Pretium tortor condimentum.",
      payroll: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: "02-08-20_02",
      title: "Fri 06 Nov (Total: 2h 10m)",
      subTitle: "02: 30pm to 04:10pm - 15m lunch",
      jobName: "835-853 High St, Armadale (11466) OH - Overheads",
      leaveType: "N/A",
      timeAllowance: "N/A",
      laha: "N/A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet, elementum augue velit orci risus cras. Pretium tortor condimentum.",
      payroll: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: "02-08-20_03",
      title: "Fri 06 Nov (Total: 2h 10m)",
      subTitle: "02: 30pm to 04:10pm - 15m lunch",
      jobName: "835-853 High St, Armadale (11466) OH - Overheads",
      leaveType: "N/A",
      timeAllowance: "N/A",
      laha: "N/A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet, elementum augue velit orci risus cras. Pretium tortor condimentum.",
      payroll: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const setSelectedItem = (itemId) => {
    {
      if (itemId === selectedId) {
        setSelectedId(null);
      } else setSelectedId(itemId);
    }
  };
  const Item = ({ item }) => {
    return (
      <View style={styles.post}>
        <Text style={[styles.title]}>{item.title}</Text>
        <Text style={[styles.subtitle]}>{item.subTitle}</Text>
        <View style={styles.hr}></View>
        <View style={styles.line}>
          <Text style={styles.txtChild}>Job name:</Text>
          <Text style={styles.jobName}>{item.jobName}</Text>
        </View>
        <TouchableOpacity
          onPress={() => setSelectedItem(item.id)}
          style={[styles.icon]}
        >
          {selectedId === item.id ? (
            <Image source={require("../assets/tr.jpg")} style={styles.image} />
          ) : (
            <Image
              source={require("../assets/down.jpg")}
              style={styles.image}
            />
          )}
        </TouchableOpacity>
        {selectedId === item.id ? (
          <View style={styles.detail}>
            <View style={styles.second}>
              <View style={styles.nA}>
                <Text style={styles.txtChild}>Leave Type:</Text>
                <Text style={styles.txtDetail}>{item.leaveType}</Text>
              </View>

              <View>
                <Text style={styles.txtChild}>Time Allowance:</Text>
                <Text style={styles.txtDetail}>{item.timeAllowance}</Text>
              </View>

              <View>
                <Text style={styles.txtChild}>LAHA:</Text>
                <Text style={styles.txtDetail}>{item.laha}</Text>
              </View>
            </View>
            <Text style={styles.txtChild}>Description:</Text>
            <Text style={styles.txtDetail}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet,
              elementum augue velit orci risus cras. Pretium tortor condimentum.
            </Text>
            <Text style={styles.txtChild}>Payroll Notes</Text>
            <Text style={styles.txtDetail}>
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </Text>
            <View style={styles.btn}>
              <Btn
                style={styles.btnEdit}
                textStyle={styles.txtEdit}
                text="Edit"
              ></Btn>
              <Btn
                style={styles.btnDele}
                textStyle={styles.txtDele}
                text="Delete"
              ></Btn>
            </View>
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topText}>FlatList And ScrollView</Text>
      <View style={styles.hr}></View>
      <Text style={styles.postText}>Mon 02 Nov - Sun 08 Nov 2020 (3h 20m)</Text>
      <FlatList
        data={DATA}
        renderItem={Item}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    fontFamily: "Avenir Next",
    flexWrap: "wrap",
    marginLeft: 31,
    marginRight: 25,
    color: "#141434",
  },
  jobName: {
    color: "#141434",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
    letterSpacing: -0.1,
  },
  post: {
    marginVertical: 10,
    paddingHorizontal: 16,
    borderColor: "#E8E8EB",
    borderWidth: 1,
    borderRadius: 6,
  },

  txtDetail: {
    color: "#141434",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18,
  },

  txtChild: {
    color: "#838393",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18,
  },
  icon: {
    position: "absolute",
    top: 8,
    right: 16,
  },

  topText: {
    paddingTop: "7.47%",
    fontWeight: "normal",
    alignSelf: "center",
    fontSize: 24,
    color: "#141434",
  },
  postText: {
    paddingVertical: 10,
    paddingHorizontal: "7.47%",
    fontWeight: "normal",
    alignSelf: "flex-start",
    fontSize: 24,
    color: "#414151",
  },

  hr: {
    marginHorizontal: -16,
    paddingHorizontal: -16,
    borderBottomColor: "#E8E8EB",
    borderBottomWidth: 1,
    width: "100%",
  },
  title: {
    alignSelf: "flex-start",
    paddingTop: 6,
    fontSize: 19,
    fontWeight: "600",
    color: "#141434",
  },
  second: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    flexDirection: "row",
  },
  btnEdit: {
    backgroundColor: "#D00C04",
    height: 40,
    width: 136,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  txtEdit: {
    color: "#ffff",
  },
  btnDele: {
    backgroundColor: "#fff",
    height: 40,
    width: 136,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#838393",
  },
  txtDele: {
    color: "#838393",
  },
});
