import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Info = () => {
  return (
    <View>
      <View style={styles.infoContainer}>
        <Text style={styles.branch}>Juicy Chuck - Gulberg</Text>
        <View style={styles.info}>
          <Text style={{ color: "white", margin: 4 }}>
            6c/3 opposite Shoppe, Gulberg III, Lahore
          </Text>
          <Text style={{ color: "white", margin: 4 }}>📞 03201472839</Text>
          <Text style={{ color: "white", margin: 4 }}>⏱ Closed</Text>
          <Text style={{ color: "white", margin: 4 }}>
            💵 Min Order : Rs. 400
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
  },
  info: {
    paddingLeft: 15,
  },
});
export default Info;
