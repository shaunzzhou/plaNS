import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Form from "./Form";
import Name from "./Name";

export default function SetCommitmentScreen() {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Form />));
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 100 }}>
        State your commitments
      </Text>
      <Name />
      {inputList}
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: "transparent",
          borderRadius: 10,
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 3,
          borderWidth: 2,
          borderColor: `rgba(0,0,0,0.4)`,
        }}
        onPress={() => onAddBtnClick()}
      >
        <Text>Add Commitment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: "transparent",
          borderRadius: 10,
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 3,
          borderWidth: 2,
          borderColor: `rgba(0,0,0,0.4)`,
          marginBottom: 40,
          marginTop: 40,
        }}
        onPress={() => {}}
      >
        <Text>Submit</Text>
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
