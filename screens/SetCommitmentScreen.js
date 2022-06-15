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
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 50, marginBottom:50 }}>
        State your commitments
      </Text>
      <Name />
      {inputList}
      <TouchableOpacity
        style={{
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
          alignSelf: "center",
          marginBottom: 30,
          alignItems: "center",
          marginBottom: 30,
        }}
        onPress={() => onAddBtnClick()}
      >
        <Text style={{color: "white"}}>Add Commitment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
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
          alignSelf: "center",
          marginBottom: 30,
          alignItems: "center",
          marginBottom: 30,
        }}
        onPress={() => {}}
      >
        <Text style={{color: "white"}}>Submit</Text>
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
