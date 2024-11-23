import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Topbar = () => {
  return (
    <View>
      <View style={styles.topBar}>
        <View style={styles.topBarIn}>
          <View style={styles.topBarParts}>
            <Text>Outlet</Text>
            <Text style={{ fontWeight: "bold", color: "red" }}>Johar Town</Text>
          </View>
          <View style={styles.topBarParts}>
            <Text>Order For</Text>
            <Text style={{ fontWeight: "bold", color: "red" }}>Delivery</Text>
          </View>
          <View style={[styles.topBarParts, { borderRightColor: "white" }]}>
            <Text>Serving Time</Text>
            <Text style={{ fontWeight: "bold", color: "red" }}>Closed</Text>
          </View>
        </View>
      </View>
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
