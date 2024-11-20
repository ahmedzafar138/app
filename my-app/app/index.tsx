import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState, useRef } from "react";

const { width } = Dimensions.get("window");

const App = () => {
  const Deals = [
    {
      name: "Deal1",
      detail: "Burger, small fries, Chicken piece, 330 ml Drink",
      price: 999,
    },
    {
      name: "Deal2",
      detail: "",
      prie: 1999,
    },
  ];

  const [selectedTab, setSelectedTab] = useState<string>("Deals");
  const scrollViewRef = useRef<ScrollView>(null);

  const tabs = ["Deals", "Appetizers", "Meals"];

  const handleTabPress = (tab: string, index: number) => {
    setSelectedTab(tab);
    scrollViewRef.current?.scrollTo({ x: width * index, animated: true });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setSelectedTab(tabs[index]);
  };

  return (
    //top view
    <View>
      <Image
        style={styles.topImage}
        source={require("./img/burger.jpg")}
      ></Image>

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

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTabPress(tab, index)}
            style={styles.tab}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.selectedTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Scrollable Content */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        <ScrollView>
          <View style={styles.page}>
            <Text style={styles.pageTitle}>Deals</Text>

            <View style={styles.foodItems}>
              <TouchableOpacity onPress={() => console.warn("Meal1 added")}>
                <View style={styles.foodCard}>
                  <View style={styles.foodImage}>
                    <Image
                      resizeMode="cover"
                      style={styles.image}
                      source={require("./img/meal1.jpg")}
                    ></Image>
                  </View>
                  <View style={styles.foodNameView}>
                    <Text style={styles.foodName}>Deal 1</Text>
                  </View>
                  <View style={styles.foodPriceView}>
                    <Text style={styles.foodPrice}>Rs 999</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  console.warn("Meal2 added");
                }}
              >
                <View style={styles.foodCard}>
                  <View style={styles.foodImage}>
                    <Image
                      resizeMode="cover"
                      style={styles.image}
                      source={require("./img/meal2.jpg")}
                    ></Image>
                  </View>
                  <View style={styles.foodNameView}>
                    <Text style={styles.foodName}>Deal 2</Text>
                  </View>
                  <View style={styles.foodPriceView}>
                    <Text style={styles.foodPrice}>Rs 1,899</Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* Add more content here */}
            </View>
            
          </View>
        </ScrollView>

        <View style={styles.page}>
          <Text style={styles.pageTitle}>Appetizers</Text>
          <View style={styles.foodItems}>
            <Text>Appetizer 1 - Rs 200</Text>
            <Text>Appetizer 2 - Rs 300</Text>
          </View>
          {/* Add more content here */}
        </View>
        <View style={styles.page}>
          <Text style={styles.pageTitle}>Meals</Text>
          <Text>Meal 1 - Rs 500</Text>
          <Text>Meal 2 - Rs 800</Text>
          {/* Add more content here */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    height: 60,
    padding: 10,
  },
  topImage: {
    width: 360,
    height: 200,
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
  infoContainer: {
    height: 180,
    backgroundColor: "red",
  },
  branch: {
    fontSize: 20,
    color: "white",
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 15,
    fontWeight: "bold",
  },
  info: {
    paddingLeft: 15,
  },
  container: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 10,
  },
  page: {
    width,
    padding: 20,
    // backgroundColor: "orange",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    color: "#444",
  },
  selectedTabText: {
    color: "#d32f2f",
    fontWeight: "bold",
    borderBottomColor: "red",
    borderBottomWidth: 2.5,
  },
  foodCard: {
    height: 200,
    width: 150,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    // padding: 10,
    margin: 6,
  },
  foodImage: {
    flex: 5,
    backgroundColor: "orange",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
  },
  foodNameView: {
    flex: 1,
  },
  foodPriceView: {
    flex: 1,
  },
  foodItems: {
    flexDirection: "row",
    flexWrap: "wrap",
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
  image: {
    height: "100%",
    width: "100%",
  },
});

export default App;
