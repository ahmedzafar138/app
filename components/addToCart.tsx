import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const { height } = Dimensions.get("window");

const { width } = Dimensions.get("window");

const AddToCart = () => {
  const price = 900;
  const [totalPrice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Modal transparent={true} animationType="slide" visible={isVisible}>
      <View style={styles.bottomView}>
        <View style={styles.ModalView}>
          <View style={styles.closeButtonView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsVisible(false)}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <View style={styles.container}>
              <View style={styles.food}>
                <View style={styles.ImageView}>
                  <Image
                    style={styles.Image}
                    resizeMode="cover"
                    source={require("../assets/img/meal1.jpg")}
                  ></Image>
                </View>

                <View style={styles.priceDetails}>
                  <Text style={styles.foodPrice}>Rs {price}</Text>
                  <Text style={styles.foodDetails}>
                    Beneath the ancient willow tree, whose gnarled branches
                    stretched skyward like the arms of a forgotten guardian, a
                    curious squirrel darted between patches of sunlight,
                    clutching a shiny acorn as if it held the secrets of the
                    universe, while a gentle
                  </Text>
                </View>
              </View>

              <View style={styles.Cart}>
                <View style={styles.cartContainer}>
                  <View style={styles.cartPrice}>
                    <Text style={styles.rsText}>Rs. </Text>
                    <Text style={styles.totalPrice}>{totalPrice}</Text>
                  </View>

                  <View style={styles.quantityView}>
                    <TouchableOpacity
                      style={styles.incrementButton}
                      onPress={() => {
                        quantity > 1 ? setQuantity(quantity - 1) : null;
                        quantity > 1 ? setTotalPrice(totalPrice - price) : null;
                      }}
                    >
                    <Text style = {styles.incrementButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity
                      style={styles.incrementButton}
                      onPress={() => {
                        setQuantity(quantity + 1);
                        setTotalPrice(totalPrice + price);
                      }}
                    >
                      <Text style = {styles.incrementButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.addToCart}>
                    <TouchableOpacity onPress={() => setIsVisible(false)}>
                      <Text style = {styles.AddToCartText}>Add to Cart</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  ModalView: {
    height: height * 0.8,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButtonView: {
    flex: 1,
  },
  closeButton: {
    alignSelf: "flex-end",
    backgroundColor: "red",
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
  container: {
    flex: 1,
  },
  food: {
    flexDirection: "row",
  },
  ImageView: {
    height: width * 0.38,
    width : width * 0.3,
  },
  Image: {
    width: '100%',
    height: '100%',
    borderRadius: 45,
    marginTop: 0,
    marginLeft: 0,
    borderColor : 'black',
    borderWidth : 2
  },
  priceDetails: {
    paddingLeft : 10,
    flexShrink: 1,
  },
  foodPrice: {
    fontSize: 30,
    fontWeight: "700",
  },
  foodDetails: {
    fontSize: 15,
    fontFamily: "Times New Roman",
    
  },
  Cart: {
    flex: 1,
    justifyContent: "flex-end",
    shadowColor: "black",
  },
  cartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  cartPrice: {
    flexDirection: "row",
  },
  rsText: {
    fontWeight: "900",
    fontSize: 28,
    marginTop : 5
  },
  totalPrice: {
    padding: 10,
    backgroundColor: "#e5dcda",
    borderRadius: 15,
    fontWeight: "bold",
  },
  quantityView: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 100,
    padding: 5,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    shadowOffset: { width: 0, height: 0.2 },
  },
  incrementButton: {
    backgroundColor: "red",
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  incrementButtonText : {
    fontSize: 25,
    fontWeight: "800",
    color: "#fff",
  },
  quantityText: {
    padding: 5,
    marginLeft: 8,
    marginRight: 8,
    fontWeight: "700",
  },
  addToCart: {
    backgroundColor: "red",
    width : 90,
    padding: 10,
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  AddToCartText : {
    color: "#fff",
    fontWeight : '900'
  }
});

export default AddToCart;
