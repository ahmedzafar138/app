import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";

const index = () => {
  return (
    <View style={{flex : 1, backgroundColor: "black" }}>
      <View style={styles.logo}>
        <Image
          style={{ height: 200, width: 200, margin: 20 }}
          source={require("./img/logo.jpg")}
        ></Image>
        <ActivityIndicator size="large" color="yellow" />
      </View>
      <View style={styles.companyText}>
        <Text style={styles.company}>Powered by AH TECHS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  companyText: {
    flex : 1,
    margin: 10,
    justifyContent: "center",
    alignItems : 'center'
    
  },
  company: {
    fontSize: 20,
    color: "yellow",
    fontWeight: "bold",
    justifyContent : 'center'
  },
});

export default index;
