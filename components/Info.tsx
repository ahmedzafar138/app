import { View, Text, StyleSheet } from "react-native";
import React from "react";

type InfoProps = {
  branchName : string;
  branchAddress : string;
  branchPhoneNo : string;
};

const Info = (props:InfoProps) => {
  return (
    <View>
      <View style={styles.infoContainer}>
        <Text style={styles.branch}>Juicy Chuck - {props.branchName}</Text>
        <View style={styles.info}>
          <Text style={{ color: "white", margin: 4 }}>{props.branchAddress}</Text>
          <Text style={{ color: "white", margin: 4 }}>📞  {props.branchPhoneNo}</Text>
          <Text style={{ color: "white", margin: 4 }}> ⏱   Open</Text>
          <Text style={{ color: "white", margin: 4 }}>💵  Min Order : Rs. 690
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: "red",
    padding: 15,
  },
  branch: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginBottom : 10
  },
  info: {
    paddingLeft: 0,
  },
});
export default Info;
