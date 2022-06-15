import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function NameInput() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Jason", value: "jason" },
    { label: "Mary", value: "mary" },
    { label: "David", value: "david" },
    { label: "Eric", value: "eric" },
  ]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Enter Unique Code:
      </Text>
      <TextInput
        placeholder="Input Code"
        style={{ borderWidth: 1, borderColor: "#ccc", marginBottom: 30, width: 250 }}
      ></TextInput>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
        Name
      </Text>
      <DropDownPicker
        style={{width: 250}}
        placeholder="Select Your Name"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
