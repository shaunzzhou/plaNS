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
          fontSize: 55,
          marginBottom: 60,
        }}
      >
        Instructions
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <FontAwesome style={styles.icon} name="user" color={"blue"} size={60} />
        <Text style={styles.instructions_text}> bla bla bla</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.instructions_text}> bla bla bla</Text>
        <FontAwesome style={styles.icon} name="home" color={"blue"} size={60} />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <FontAwesome style={styles.icon} name="gear" color={"blue"} size={60} />
        <Text style={styles.instructions_text}> bla bla bla</Text>
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
    padding: 20,
    backgroundColor: "transparent",
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    borderWidth: 2,
    borderColor: `rgba(0,0,0,0.4)`,
  },
  button_text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  text: {
    fontWeight: "bold",
    fontSize: 60,
    marginBottom: 90,
  },
  logo: {
    width: 305.62,
    height: 370,
    marginBottom: 25,
  },
  instructions_text: {
    fontSize: 20,
    marginTop: 40,
    marginBottom: 50,
  },
  icon: {
    marginTop: 20,
  },
});
