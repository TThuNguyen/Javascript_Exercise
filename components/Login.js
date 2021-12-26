import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/linkedsite.png")}
      />
      <Text style={styles.intro}>
        Acciona Account Users (eg. @acciona, @colemanrail etc.)>Sign in with
        your corporate ID
      </Text>
      <TouchableOpacity
        style={styles.acciBtn}
        onPress={() => Alert.alert("Coming soon.")}
      >
        <Text style={styles.acciText}>AccionaCorporateLogin</Text>
      </TouchableOpacity>
      <View style={styles.orText}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#6B6B78" }} />
        <View>
          <Text
            style={{
              color: "#6B6B78",

              width: 50,
              textAlign: "center",
            }}
          >
            OR
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "#6B6B78" }} />
      </View>

      <Text style={styles.guideText}>
        All Other Users > Use the login form below
      </Text>

      <View>
        <Text style={styles.titleEmail}>Email</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputEmail}
          placeholder="name@host.com"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View>
        <Text style={styles.titlePassword}>Password</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputPass}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text
          style={{
            paddingTop: 5,
            color: "#6B6B78",
          }}
        >
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => Alert.alert("Coming soon.")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.contactText}>
        {"\n"}
        Forgot password or having trouble signing in?{"\n"}
        {"  "}Contact the Service Desk on:{" "}
        <Text style={{ color: "red", fontWeight: "bold" }}>
          (03) 9624 4236{"\n"}
        </Text>
        {"       "}Raise an incident via{" "}
        <Text style={{ color: "red", fontWeight: "bold" }}>
          {" "}
          Service Now Portal
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Open Sans",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    color: "#6B6B78",
  },
  orText: {
    color: "#6B6B78",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 28,
  },
  guideText: {
    color: "#5F5F6C",
    alignSelf: "flex-start",
    paddingLeft: 28,
    paddingVertical: 15,
  },
  btn: {
    alignSelf: "flex-end",
    paddingRight: 28,
  },
  titleEmail: {
    paddingBottom: 10,
    paddingRight: 270,
    fontWeight: "bold",
  },
  titlePassword: {
    paddingBottom: 10,
    paddingRight: 240,
    fontWeight: "bold",
  },
  image: {
    marginTop: 30,
    marginBottom: 5,
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  intro: {
    color: "#000000",
    padding: 10,
    margin: 10,

    alignItems: "center",
    justifyContent: "center",
  },
  acciBtn: {
    width: "85%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#E00000",
  },
  loginBtn: {
    width: "85%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,

    backgroundColor: "#141434",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
  },
  inputView: {
    backgroundColor: "#ffff",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#dcdcdc",
    width: "85%",
    height: 45,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInputPass: {
    height: 50,

    padding: 10,
    marginLeft: -200,
  },
  TextInputEmail: {
    height: 50,

    padding: 10,
    marginLeft: -158,
  },

  acciText: {
    color: "#ffffff",

    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  contactText: {
    lineHeight: 20,
  },
});
