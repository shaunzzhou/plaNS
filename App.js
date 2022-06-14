import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import WelcomeScreen from "./screens/WelcomeScreen";
import InstructionScreen from "./screens/InstructionScreen";
import CustomizeScreen from "./screens/CustomizeScreen";
import CommitmentScreenStack1 from "./screens/CommitmentScreenStack1";
import IndividualCommitmentScreen from "./screens/IndividualCommitmentScreen";
import GeneratingScreen from "./screens/GeneratingScreen";
import CalendarScreen from "./screens/CalendarScreen";
import SetCommitmentScreen from "./screens/SetCommitmentScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Set Commitments" component={SetCommitmentScreen} />
      <Stack.Screen name="Instructions" component={InstructionScreen} />
      <Stack.Screen name="Customize" component={CustomizeScreen} />
      <Stack.Screen name="Get Commitments" component={CommitmentScreenStack1} />
      <Stack.Screen
        name="Individual Commitments"
        component={IndividualCommitmentScreen}
      />
      <Stack.Screen
        name="Generating Schedule..."
        component={GeneratingScreen}
      />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
