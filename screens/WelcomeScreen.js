import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image style={styles.logo} source={require("../assets/LOGOINPNG.png")} />
      <Text style={styles.text}>plaNS</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Instructions")}
      >
        <Text style={styles.button_text}>Start Planning</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Set Commitments")}
      >
        <Text style={styles.button_text}>Set Commitments</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginTop: 20,
    width: 200,
    backgroundColor: "#648839",
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    borderWidth: 2,
    borderColor: "`rgba(0,0,0,0.4)`",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 30,
    alignItems: "center",
    marginBottom: 30,
  },
  button_text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 60,
    marginBottom: 30,
  },
  logo: {
    width: 305.62,
    height: 370,
    marginBottom: 25,
  },
});
