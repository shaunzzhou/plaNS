import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function CustomizeScreen({ navigation }) {
  const [consecutiveDutyDays, setconsecutiveDutyDays] = useState("");
  const [dutyPersonnelPerDay, setdutyPersonnelPerDay] = useState("");
  const [consecutiveRestDays, setconsecutiveRestDays] = useState("");
  const [scheduleName, setscheduleName] = useState("");

  const [dutyPersonnelName, setdutyPersonnelName] = useState("");
  const [dutyPersonnels, setDutyPersonnels] = useState([]);

  const [allInfo, setAllInfo] = useState([]);

  // rendering items for the flatlist
  function renderItem({ item }) {
    return (
      <View
        style={{
          padding: 10,
          paddingTop: 10,
          paddingBottom: 10,
          borderBottomColor: "black",
          borderBottomWidth: 1,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            deleteItem(item.id);
          }}
        >
          <MaterialIcons name="cancel" size={30} color="red" />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, textAlign: "left", marginLeft: 20 }}>
          {item.title}
        </Text>
      </View>
    );
  }

  // adding names to
  function addName() {
    setDutyPersonnels([
      {
        id: dutyPersonnelName,
        title: dutyPersonnelName,
      },
      ...dutyPersonnels,
    ]);
    setdutyPersonnelName("");
  }

  function deleteItem(id) {
    return setDutyPersonnels(dutyPersonnels.filter((item) => item.id !== id));
  }

  function addAllInfo() {
    setAllInfo([
      ...allInfo,
      {
        name: scheduleName,
        consecutiveDutyDays: consecutiveDutyDays,
        dutyPersonnelPerDay: dutyPersonnelPerDay,
        consecutiveRestDays: consecutiveRestDays,
        dutyPersonnels: dutyPersonnels,
      },
    ]);
    // clearing all textInputs
    setconsecutiveDutyDays("");
    setdutyPersonnelPerDay("");
    setconsecutiveRestDays("");
    setscheduleName("");
    setDutyPersonnels([]);
  }

  // just for visualisation
  // useEffect(() => {
  //   console.log(dutyPersonnels);
  // }, [dutyPersonnels]);

  // useEffect(() => {
  //   console.log(allInfo);
  // }, [allInfo]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ borderBottomColor: "black", borderBottomWidth: 1 }}>
        <Text style={styles.label}>Customize</Text>
        <Text style={styles.text}>Number of consecutive duty days:</Text>
        <Text style={{ fontSize: 12, marginLeft: 45 }}>
          (If each duty duration is 24hrs or less, please indicate 1.)
        </Text>
        <TextInput
          style={styles.textInput}
          value={consecutiveDutyDays}
          onChangeText={(newText) => setconsecutiveDutyDays(newText)}
        />
        <Text style={styles.text}>Number of personnel on duty each day:</Text>
        <TextInput
          style={styles.textInput}
          value={dutyPersonnelPerDay}
          onChangeText={(newText) => setdutyPersonnelPerDay(newText)}
        />
        <Text style={styles.text}>Days of rest after duty required:</Text>
        <TextInput
          style={styles.textInput}
          value={consecutiveRestDays}
          onChangeText={(newText) => setconsecutiveRestDays(newText)}
        />
        <Text style={styles.text}>Name of schedule:</Text>
        <TextInput
          style={styles.textInput}
          value={scheduleName}
          onChangeText={(newText) => setscheduleName(newText)}
        />
        <Text style={styles.text}>Name of Duty Personnel:</Text>
        <View style={styles.buttons}>
          <TextInput
            style={styles.nameInput}
            value={dutyPersonnelName}
            onChangeText={(newText) => setdutyPersonnelName(newText)}
          />
          <TouchableOpacity style={styles.button} onPress={addName}>
            <AntDesign name="pluscircle" size={30} color="#648839" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <FlatList
        style={styles.list}
        data={dutyPersonnels}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
        }}
        onPress={() => {
          navigation.navigate("Get Commitments");
          addAllInfo;
        }}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 50,
    marginBottom: 30,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    marginLeft: 45,
    textAlign: "left",
  },
  textInput: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 30,
    width: "80%",
    padding: 0,
    bottomBorderColor: "black",
    borderBottomWidth: 1,
  },
  nameInput: {
    marginLeft: 42,
    marginTop: 0,
    marginBottom: 10,
    width: "65%",
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    padding: 10,
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 20,
  },
  list: {
    fontSize: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    alignSelf: "center",
  },
});
