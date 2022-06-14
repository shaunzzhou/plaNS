import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function GeneratingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>Generating Schedule...</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Calendar")}
      >
        <Text>Next</Text>
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
    alignSelf: "center",
    marginHorizontal: 45,
  },
  logo: {
    width: 305.62,
    height: 370,
    marginBottom: 25,
  },
});
