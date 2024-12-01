import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import React, { useState } from 'react';
import AddToCart from './addToCart';

// Define the Food type
type Food = {
  name: string;
  detail: string;
  price: number;
};

type FoodcardProps = {
  foods: Food[];
};

const { width } = Dimensions.get("window");

const Foodcard = ({ foods }: FoodcardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <FlatList
        data={foods}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.foodItems}>
            <TouchableOpacity onPress={() => setIsVisible(true) }>
              <View style={styles.foodCard}>
                <View style={styles.foodImage}>
                  <Image
                    resizeMode="cover"
                    style={styles.image}
                    source={require("../assets/img/meal1.jpg")} // Image placeholder
                  />
                </View>
                <View style={styles.foodNameView}>
                  <Text style={styles.foodName}>{item.name}</Text>
                </View>
                <View style={styles.foodPriceView}>
                  <Text style={styles.foodPrice}>Rs. {item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
            {
              isVisible ? <AddToCart></AddToCart> : null
            }
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  foodItems: {
    flex: 1,
  },
  foodCard: {
    height: width * 0.5,
    width : width * 0.38,
    borderRadius: 20,
    margin: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  foodImage: {
    flex: 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  foodNameView: {
    flex: 1,
    paddingLeft: 10,
  },
  foodPriceView: {
    flex: 1,
    paddingLeft: 10,
  },
  foodName: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  foodPrice: {
    marginLeft: 10,
    fontSize: 15,
  },
});

export default Foodcard;
