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
} from "react-native";
import Info from "./mainmenu/Info";
import Topbar from "./mainmenu/Top";
import Foodcard from "./mainmenu/Foodcard";

const { width } = Dimensions.get("window");

const Foods = {
  Deals: [
    { name: "Deal 1", detail: "Burger, small fries, Chicken piece, 330ml Drink", price: 999 },
    { name: "Deal 2", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
    { name: "Deal 3", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
    { name: "Deal 4", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
    { name: "Deal 5", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
  ],
  Appetizers: [
    { name: "Deal 1", detail: "Burger, small fries, Chicken piece, 330ml Drink", price: 999 },
    { name: "Deal 2", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
    { name: "Deal 3", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
    { name: "Deal 4", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
    { name: "Deal 5", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
  ],
  Sweet: [
    { name: "Deal 1", detail: "Burger, small fries, Chicken piece, 330ml Drink", price: 999 },
    { name: "Deal 2", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
    { name: "Deal 3", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
    { name: "Deal 4", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
    { name: "Deal 5", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
  ],
  Meals: [
    { name: "Deal 1", detail: "Burger, small fries, Chicken piece, 330ml Drink", price: 999 },
    { name: "Deal 2", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
    { name: "Deal 3", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
    { name: "Deal 4", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
    { name: "Deal 5", detail: "Burger, Small fries, Chicken Piece, 330ml Drink", price: 1999 },
  ],
};

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
        <Topbar />

        {/* Info Section */}
        <Info />

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
          {tabs.map((tab, index) => (
            <View style={styles.page} key={index}>
              <Text style={styles.pageTitle}>{tab}</Text>
              <Foodcard foods={Foods[tab as keyof typeof Foods]} />
            </View>
          ))}
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
    marginLeft: 10,
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
    fontWeight: "900",
    borderBottomColor: "red",
    borderBottomWidth: 2.5,
  },
});

export default App;
