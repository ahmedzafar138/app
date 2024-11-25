import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

type branch ={
  branchName : string;
  orderType : string;
}

const Topbar = (props:branch) => {
  return (
    <View>
      <Pressable
      onPress={() => router.replace('./branches')}>
      <View style={styles.topBar}>
        <View style={styles.topBarIn}>
          <View style={styles.topBarParts}>
            <Text>Outlet</Text>
            <Text style={{ fontWeight: "bold", color: "red" }}>{props.branchName}</Text>
          </View>
          <View style={styles.topBarParts}>
            <Text>Order For</Text>
            <Text style={{ fontWeight: "bold", color: "red" }}>{props.orderType}</Text>
          </View>
          <View style={[styles.topBarParts, { borderRightColor: "white" }]}>
            <Text>Serving Time</Text>
            <Text style={{ fontWeight: "bold", color: "red" }}>Open</Text>
          </View>
        </View>
      </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    height: 60,
    padding: 10,
  },
  topBarIn: {
    flex: 1,
    flexDirection: "row",
  },
  topBarParts: {
    flex: 1,
    justifyContent: "space-evenly",
    borderRightColor: "black",
    borderRightWidth: 1,
    alignItems: "center",
    marginRight: 1,
  },
});

export default Topbar;
