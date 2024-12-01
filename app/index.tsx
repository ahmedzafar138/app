import { View, Text, Image, Animated, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import { router } from "expo-router";

const LoadingScreen = () => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false, 
    }).start(() => {
      router.replace('./branches');
    });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.logo}>
        <Image
          style={{ height: 200, width: 200, margin: 20 }}
          source={require("../assets/img/logo.jpg")}
        />
        <View style={styles.barContainer}>
          <Animated.View
            style={[
              styles.bar,
              { width: progress.interpolate({ inputRange: [0, 100], outputRange: ["0%", "100%"] }) },
            ]}
          />
        </View>
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
  barContainer: {
    width: "50%",
    height: 10,
    backgroundColor: "#333",
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 20,
  },
  bar: {
    height: "100%",
    backgroundColor: "yellow",
    borderRadius: 5,
  },
  companyText: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  company: {
    fontSize: 20,
    color: "yellow",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LoadingScreen;
