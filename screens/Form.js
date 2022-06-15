import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function Form() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}>
        Which days would you like to block out?
      </Text>
      <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>
        Start Date:
      </Text>
      <TextInput
        placeholder="Start Date"
        style={{ borderWidth: 1, borderColor: "#ccc", width: 250 }}
      ></TextInput>
      <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>
        End Date:
      </Text>
      <TextInput
        placeholder="End Date"
        style={{ borderWidth: 1, borderColor: "#ccc", width: 250}}
      ></TextInput>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 5,
          backgroundColor: "red",
          marginTop: 15,
        }}
        onPress={() => {}}
      >
        <Text style={{ color: "white"}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
