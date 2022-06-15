import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Cell, Row, Table, TableWrapper } from "react-native-table-component";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { CSVLink, CSVDownload } from "react-csv";

// reading the JSON file
const loadData = require("../sample.json");
const schedule = loadData["001"];
const day = schedule["Final_Schedule"];

let comp = JSON.stringify([loadData]);
const obj = JSON.parse(comp);

let csvData = Object.values(obj[0]["001"]["Final_Schedule"]);
let hold = [];
for (let each in csvData) {
  hold.push(Object.values(csvData[each]));
  hold[each].unshift(parseInt(each) + 1);
}
console.log(hold);
let names = Object.keys(obj[0]["001"]["Final_Schedule"]["1"]);
names.unshift("Days");

console.log(csvData[0]);
const Log = ({ value, replacer = null, space = 2 }) => (
  <pre>
    <code>{JSON.stringify(value, replacer, space)}</code>
  </pre>
);

export default function CalendarScreen() {
  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  var dict = day;
  var arr2 = [];
  for (var key in dict) {
    arr2.push([[key], dict[key]]);
  }

  var dutyRoster = [];
  for (let i = 0; i < arr2.length; i++) {
    var fukthis = day[arr2[i][0][0]];
    var dutyPerson = getKeyByValue(fukthis, "duty");
    dutyRoster.push(dutyPerson);
  }

  //calendar calculations
  // input our own month, Jan = 1
  // Jan, May, Oct 30/31 logic has not been added yet
  const [whatMonth, setWhatMonth] = useState(6);

  var monthDict = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  // to get how many days in a month, e.g. 28, 30, 31
  var getDates = (year, month) => {
    return new Date(year, month, 0).getDate();
  };
  var daysInMonth = getDates(2022, whatMonth);

  // to get what the first day on the week is
  var getDays = (year, month) => {
    return new Date(year, month, 0).getDay();
  };
  var startDay = getDays(2022, whatMonth - 1, 1);

  // WeekOne's list
  var firstWeekDays = 7 - startDay;
  var weekOne = Array.from({ length: firstWeekDays }, (_, index) => index + 1);
  for (let i = 0; i < weekOne.length; i++) {
    weekOne[i] += "\n";
    weekOne[i] += dutyRoster.slice(0, weekOne.length)[i];
  }
  for (let i = 0; i < startDay; i++) {
    weekOne.unshift("");
  }
  // weekTwo, weekThree, weekFour's list
  var weekTwo = Array.from({ length: 7 }, (_, index) => index + 8 - startDay);
  for (let i = 0; i < weekTwo.length; i++) {
    weekTwo[i] += "\n";
    weekTwo[i] += dutyRoster.slice(7 - startDay, 14 - startDay)[i];
  }
  var weekThree = Array.from(
    { length: 7 },
    (_, index) => index + 15 - startDay
  );
  for (let i = 0; i < weekThree.length; i++) {
    weekThree[i] += "\n";
    weekThree[i] += dutyRoster.slice(14 - startDay, 21 - startDay)[i];
  }
  var weekFour = Array.from({ length: 7 }, (_, index) => index + 22 - startDay);
  for (let i = 0; i < weekFour.length; i++) {
    weekFour[i] += "\n";
    weekFour[i] += dutyRoster.slice(21 - startDay, 28 - startDay)[i];
  }

  //weekFive's list
  var weekFive = Array.from(
    { length: daysInMonth - 28 + startDay },
    (_, index) => index + 29 - startDay
  );
  for (let i = 0; i < weekFive.length; i++) {
    weekFive[i] += "\n";
    weekFive[i] += dutyRoster.slice(28 - startDay, daysInMonth)[i];
  }

  if (weekFive.length < 7) {
    var diff = weekFive.length;
    for (let i = 0; i < 7 - diff; i++) {
      weekFive.push("");
    }
  } else if (weekFive.length > 7) {
    var diff = weekFive.length - 7;
    for (let i = 0; i < diff; i++) {
      weekFive.pop();
    }
  }

  // Header data
  const tableHead = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Table data
  const tableData = [weekOne, weekTwo, weekThree, weekFour, weekFive];
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <TouchableOpacity onPress={() => setWhatMonth(whatMonth - 1)}>
          <Feather name="chevron-left" size={50} color="black" />
        </TouchableOpacity>
        <Text style={styles.titleText}>
          {" "}
          2022 {"\n"}
          {monthDict[whatMonth]}
        </Text>
        <TouchableOpacity onPress={() => setWhatMonth(whatMonth + 1)}>
          <Feather name="chevron-right" size={50} color="black" />
        </TouchableOpacity>
      </View>
      <Table
        borderStyle={{
          borderStyle: "solid",
          borderColor: "orange",
          flex: 1,
        }}
      >
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.cellHeaderText}
        />
        {tableData.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={cellData}
                textStyle={styles.cellText}
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
      <View style={styles.container2}>
        {/* <Log value={loadData} /> */}
        <Text style={{color: "blue" }}>Download</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "white",
  },
  head: {
    backgroundColor: "#648839",
    height: 40,
  },
  cellHeaderText: {
    margin: 6,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  cellText: {
    margin: 6,
    textAlign: "right",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#ffeccf",
    height: 80,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",

  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
