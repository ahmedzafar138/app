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
import Info from "../components/Info";
import Topbar from "../components/Top";
import Foodcard from "../components/Foodcard";
import { useLocalSearchParams } from "expo-router";

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
};

const App = () => {
  const { branchName, branchAddress, branchPhoneNo, orderType } = useLocalSearchParams<{
    branchName: string;
    branchAddress: string;
    branchPhoneNo: string;
    orderType: string;
  }>();
  const [selectedTab, setSelectedTab] = useState<string>("Deals");

  const scrollViewRef = useRef<ScrollView>(null);
  const tabScrollViewRef = useRef<ScrollView>(null);

  const tabs = Object.keys(Foods);

  const handleTabPress = (tab: string, index: number) => {
    setSelectedTab(tab);
    scrollViewRef.current?.scrollTo({ x: width * index, animated: true });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setSelectedTab(tabs[index]);

    // Scroll the tab navigation to align the selected tab
    tabScrollViewRef.current?.scrollTo({
      x: (index - 1) * 100, // Adjust scrolling to focus on the selected tab
      animated: true,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Image */}
        <Image style={styles.topImage} source={require("../assets/img/burger.jpg")} />

        {/* Top Bar */}
        <Topbar branchName={branchName} orderType={orderType} />

        {/* Info Section */}
        <Info branchName={branchName} branchAddress={branchAddress} branchPhoneNo={branchPhoneNo} />

        {/* Tab Navigation */}
        <ScrollView
          ref={tabScrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
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
        </ScrollView>

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
    padding: 10,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 15,
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
