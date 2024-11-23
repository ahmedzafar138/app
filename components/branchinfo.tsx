import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const branchinfo = () => {
  return (
  <View style={styles.infoContainer}>
    <Text style={styles.branch}>Juicy Chuck - Gulberg</Text>
    <View style={styles.info}>
      <Text style={{ color: "white", margin: 5 }}>
        6c/3 opposite Shoppe, Gulberg III, Lahore
      </Text>
      <Text style={{ color: "white", margin: 5 }}>📞 03201472839</Text>
      <Text style={{ color: "white", margin: 5 }}>⏱ Closed</Text>
      <Text style={{ color: "white", margin: 5 }}>
        💵 Min Order : Rs. 400
      </Text>
    </View>
  </View>
  )
}

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
})

export default branchinfo