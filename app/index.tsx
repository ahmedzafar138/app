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
import Topbar from "./mainmenu/Top";
import Info from "./mainmenu/Info";

const { width } = Dimensions.get("window");

const Foods = {
  Deals : [
    {name : "Deal 1",detail : "Burger, small fries, Chicken piece, 330ml Drink",price : 999},
    {name : "Deal 2",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999},
    {name : "Deal 3",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999},
    {name : "Deal 4",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999},
    {name : "Deal 5",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999}
  ],
  Appetizers : [
    {name : "Deal 1",detail : "Burger, small fries, Chicken piece, 330ml Drink",price : 999},
    {name : "Deal 2",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999},
    {name : "Deal 3",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999},
    {name : "Deal 4",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999},
    {name : "Deal 5",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999}
  ],
  Sweet : [
    {name : "Deal 1", detail : "Burger, small fries, Chicken piece, 330ml Drink",price : 999},
    {name : "Deal 2",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999},
    {name : "Deal 3",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999},
    {name : "Deal 4",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999},
    {name : "Deal 5",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999}
  ],
  Meals : [
    {name : "Deal 1", detail : "Burger, small fries, Chicken piece, 330ml Drink",price : 999},
    {name : "Deal 2",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999},
    {name : "Deal 3",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999},
    {name : "Deal 4",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999},
    {name : "Deal 5",detail : "Burger, Small fries, Chicken Piece, 330ml Drink",price : 1999}
  ]
}

const App = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Deals");
  const scrollViewRef = useRef<ScrollView>(null);

  const tabs = Object.keys(Foods);

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
        <View>
          <Topbar/>
        </View>

        {/* Info Section */}
        <View>
          <Info/>
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
              data={Foods.Deals}
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
              data={Foods.Appetizers}
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
              data={Foods.Sweet}
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
  topImage: {
    width: "100%",
    height: 200,
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
