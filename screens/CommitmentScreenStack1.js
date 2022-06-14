import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import uuid from "react-native-uuid";

export default function CommitmentScreenStack1({ navigation }) {
  const [data, setdata] = useState([
    {
      id: 1,
      name: "Jason",
      start_date: "1 June 2022",
      end_date: "3 June 2022",
      reason: "leave",
    },
    {
      id: 2,
      name: "Mike",
      start_date: "20 June 2022",
      end_date: "23 June 2022",
      reason: "leave",
    },
    {
      id: 3,
      name: "Peter",
      start_date: "30 June 2022",
      end_date: "30 June 2022",
      reason: "leave",
    },
  ]);

  function renderItem({ item }) {
    return (
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
        <Text>
          {item.start_date} and {item.end_date}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Individual Commitments")}
        >
          <Text style={{ color: "blue" }}>...Read More</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 35 }}>Get Commitments</Text>
      <Text style={{ fontSize: 20, marginTop: 35, marginBottom: 55 }}>
        Copy code generated below
      </Text>
      <Text
        style={{
          color: "blue",
          textDecorationLine: "underline",
          marginBottom: 10,
        }}
      >
        {uuid.v4()}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Copy</Text>
      </TouchableOpacity>
      <View
        style={{
          alignSelf: "flex-end",
          alignItems: "flex-end",
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Refresh</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Generating Schedule...")}
        >
          <FontAwesome
            style={styles.icon}
            name="plus-circle"
            color={"green"}
            size={30}
          />
          <Text
            style={{
              fontSize: 16,
              lineHeight: 20,
              fontWeight: "bold",
              letterSpacing: 0.25,
              color: "black",
              marginHorizontal: 35,
              marginBottom: 5,
            }}
          >
            Generate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "transparent",
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    borderWidth: 2,
    borderColor: `rgba(0,0,0,0.4)`,
    marginBottom: 80,
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
    marginHorizontal: -2,
    marginBottom: -26,
  },
});
