import React, { useState, useRef } from "react";
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
} from "react-native";

const { width } = Dimensions.get("window");

const Deals = [
  {
    name: "Deal1",
    detail: "Burger, small fries, Chicken piece, 330 ml Drink",
    price: 999,
  },
  {
    name: "Deal2",
    detail: "",
    price: 1999,
  },
  {
    name: "Deal3",
    detail: "",
    price: 1599,
  },
  {
    name: "Deal4",
    detail: "",
    price: 2599,
  },
  {
    name: "Deal5",
    detail: "",
    price: 2599,
  },
];

const App = () => {
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
    <View style={{ flex: 1 }}>
      <ScrollView>
        {/* Top Image */}
        <Image style={styles.topImage} source={require("./img/burger.jpg")} />

        {/* Top Bar */}
        <View style={styles.topBar}>
          <View style={styles.topBarIn}>
            <View style={styles.topBarParts}>
              <Text>Outlet</Text>
              <Text style={{ fontWeight: "bold", color: "red" }}>
                Johar Town
              </Text>
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

        {/* Info Section */}
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
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {/* Deals Tab */}
          <View style={styles.page}>
            <Text style={styles.pageTitle}>Deals</Text>
            <FlatList
              data={Deals}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={styles.foodItems}>
                  <TouchableOpacity onPress={() => console.log("Meal added")}>
                    <View style={styles.foodCard}>
                      <View style={styles.foodImage}>
                        <Image
                          resizeMode="cover"
                          style={styles.image}
                          source={require("./img/meal1.jpg")}
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
                </View>
              )}
            />
          </View>

          {/* Appetizers Tab */}
          <View style={styles.page}>
            <Text style={styles.pageTitle}>Appetizers</Text>
            <FlatList
              data={Deals}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={styles.foodItems}>
                  <TouchableOpacity onPress={() => console.log("Meal added")}>
                    <View style={styles.foodCard}>
                      <View style={styles.foodImage}>
                        <Image
                          resizeMode="cover"
                          style={styles.image}
                          source={require("./img/meal1.jpg")}
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
                </View>
              )}
            />
          </View>

          {/* Meals Tab */}
          <View style={styles.page}>
            <Text style={styles.pageTitle}>Meals</Text>
            <FlatList
              data={Deals}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={styles.foodItems}>
                  <TouchableOpacity onPress={() => console.log("Meal added")}>
                    <View style={styles.foodCard}>
                      <View style={styles.foodImage}>
                        <Image
                          resizeMode="cover"
                          style={styles.image}
                          source={require("./img/meal1.jpg")}
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
                </View>
              )}
            />
          </View>
        </ScrollView>
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
    width: "100%",
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
  page: {
    width,
    padding: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft : 10
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
    margin: 15,
  },
  foodImage: {
    flex: 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
  },
  foodNameView: {
    flex: 1,
    paddingLeft: 10,
  },
  foodPriceView: {
    flex: 1,
    paddingLeft: 10,
  },
  foodItems: {
    flex: 1,
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
