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
      onPress={() => router.replace('../branches')}>
      <View style={styles.topBar}>
        <View style={styles.topBarIn}>
          <View style={styles.topBarParts}>
            <Text style = {styles.text}>Outlet</Text>
            <Text style={{ fontWeight: '900', color: "red"}}>{props.branchName}</Text>
          </View>
          <View style={styles.topBarParts}>
            <Text style = {styles.text}>Order For</Text>
            <Text style={{ fontWeight: "900", color: "red" }}>{props.orderType}</Text>
          </View>
          <View style={[styles.topBarParts, { borderRightColor: "white" }]}>
            <Text style = {styles.text}>Serving Time</Text>
            <Text style={{ fontWeight: "900", color: "red" }}>Open</Text>
          </View>
        </View>
      </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    height: 80,
    padding: 10,
  },
  text : {
    fontWeight : '700'
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
