import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function InstructionScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 50,
          marginBottom: 20,
        }}
      >
        Instructions
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Image style={styles.logo} source={require("../assets/customize.png")} />
        <Text style={styles.instructions_text1}>  Step 1: Customize metrics{"\n"}  based on your scheduling needs!</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.instructions_text2}>Step 2: Share the link and wait for  {"\n"}the responses to come in!  </Text>
        <Image style={styles.logo} source={require("../assets/input.png")} />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
      <Image style={styles.logo} source={require("../assets/algo.png")} />
        <Text style={styles.instructions_text1}>  Step 3: Run the algorithm to{"\n"}  generate a schedule! </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Customize")}
      >
        <Text style={styles.button_text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginTop: 20,
    width: 150,
    backgroundColor: "#648839",
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    borderWidth: 2,
    borderColor: "`rgba(0,0,0,0.4)`",
    justifyContent: "center",

  },
  button_text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 60,
    marginBottom: 50,
  },
  logo: {
    width: 72,
    height: 148,
  },
  instructions_text1: {
    fontSize: 16,
    marginTop: 40,
    marginBottom: 50,
    textAlign: "left",
    marginLeft: 10,
  },
  icon: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
  },
  instructions_text2: {
    fontSize: 16,
    marginTop: 40,
    marginBottom: 50,
    textAlign: "right",
    marginRight: 10,
  },
});
