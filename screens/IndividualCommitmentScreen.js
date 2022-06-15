import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";

export default function IndividualCommitmentScreen({ navigation }) {
  const [data, setdata] = useState([
    {
      id: 1,
      name: "Jason",
      start_date: "1 June 2022",
      end_date: "3 June 2022",
      reason: "MC",
    },
    {
      id: 2,
      name: "Jason",
      start_date: "5 June 2022",
      end_date: "7 June 2022",
      reason: "MC",
    },
    {
      id: 3,
      name: "Jason",
      start_date: "10 June 2022",
      end_date: "11 June 2022",
      reason: "MC",
    },
    {
      id: 4,
      name: "Jason",
      start_date: "15 June 2022",
      end_date: "16 June 2022",
      reason: "MC",
    },
    {
      id: 5,
      name: "Jason",
      start_date: "18 June 2022",
      end_date: "20 June 2022",
      reason: "MC",
    },
    {
      id: 6,
      name: "Jason",
      start_date: "21 June 2022",
      end_date: "23 June 2022",
      reason: "MC",
    },
    {
      id: 7,
      name: "Jason",
      start_date: "24 June 2022",
      end_date: "26 June 2022",
      reason: "MC",
    },
    {
      id: 8,
      name: "Jason",
      start_date: "30 June 2022",
      end_date: "30 June 2022",
      reason: "MC",
    },
  ]);

  function renderItem({ item }) {
    return (
      <View
        style={{
          padding: 10,
          paddingTop: 20,
          paddingBottom: 20,
          borderWidth: 1,
          borderColor: "#ccc",
        }}
      >
        <Text style={{ textAlign: "center", marginBottom: 10 }}>
          {item.start_date} to {item.end_date}
        </Text>
        <Text style={{ textAlign: "center", marginBottom: 10 }}>
          Reason: {item.reason}
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: "#ccc",
            width: "50%",
            alignSelf: "center",
          }}
          onPress={() => setmodalOpen(true)}
        >
          <Text style={{ textAlign: "center" }}>Proof of commitment</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const [modalOpen, setmodalOpen] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={StyleSheet.modal}>
          <TouchableOpacity
            style={{ padding: 10, marginTop: 1, marginLeft: 10 }}
            onPress={() => setmodalOpen(false)}
          >
            <AntDesign name="leftcircle" size={35} color="black" />
          </TouchableOpacity>
          <ScrollView directionalLockEnabled={false} horizontal={true}>
            <Image source={require("../assets/MC.jpg")}></Image>
          </ScrollView>
        </View>
      </Modal>
      <View>
        <Text style={styles.label}>Jason</Text>
      </View>

      <FlatList
        style={{ textAlign: "center" }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
});
