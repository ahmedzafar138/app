import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Modal,
} from "react-native";

const Branches = () => {
  const [selectedOption, setSelectedOption] = useState<
    "Delivery" | "Pickup" | "Curbside"
  >("Delivery");
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const branches = {
    Delivery: [
      {
        id: "1",
        name: "Gulberg",
        address: "6C/3, opposite Shoppe, Gulberg III, Lahore",
        phone: "0320-6969696",
      },
      {
        id: "2",
        name: "Lake City & DHA Rahbar",
        address: "Defence Rd, opposite DHA Rahbar, Block P 1, Valencia, Lahore",
        phone: "0320-1472839",
      },
    ],
    Pickup: [
      {
        id: "2",
        name: "Lake City & DHA Rahbar",
        address: "Defence Rd, opposite DHA Rahbar, Block P 1, Valencia, Lahore",
        phone: "0320-1472839",
      },
    ],
    Curbside: [
      {
        id: "2",
        name: "Lake City & DHA Rahbar",
        address: "Defence Rd, opposite DHA Rahbar, Block P 1, Valencia, Lahore",
        phone: "0320-1472839",
      },
    ],
  };

  const handleDone = () => {
    if (selectedBranch) {
      const selectedBranchData = branches[selectedOption].find(
        (branch) => branch.id === selectedBranch
      );
      if (selectedBranchData) {
        router.replace({
          pathname: "./mainmenu",
          params: {
            branchName: selectedBranchData.name,
            branchAddress: selectedBranchData.address,
            branchPhoneNo: selectedBranchData.phone,
            orderType: selectedOption,
          },
        });
      }
    }
  };

  const renderBranch = ({
    item,
  }: {
    item: { id: string; name: string; address: string };
  }) => {
    const isSelected = selectedBranch === item.id;
    return (
      <TouchableOpacity
        style={[styles.branchContainer, isSelected && styles.selectedBranch]}
        onPress={() => setSelectedBranch(item.id)}
      >
        <View style={styles.branchDetails}>
          <Text style={styles.branchName}>Juicy Cuck - {item.name}</Text>
          <Text style={styles.branchAddress}>{item.address}</Text>
        </View>
        {isSelected && <Text style={styles.tick}>✔</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <Modal
    animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("../assets/img/logo.jpg")} style={styles.logo} />
          <Text style={styles.title}>Juicy Chuck</Text>
        </View>

        {/* Toggle buttons */}
        <View style={styles.toggleContainer}>
          {["Delivery", "Pickup", "Curbside"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.toggleButton,
                selectedOption === option && styles.activeButton,
              ]}
              onPress={() => {
                setSelectedOption(option as "Delivery" | "Pickup" | "Curbside");
                setSelectedBranch(null);
              }}
            >
              <Text
                style={[
                  styles.toggleButtonText,
                  selectedOption === option && styles.activeButtonText,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          data={branches[selectedOption]}
          renderItem={renderBranch}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>
              No branches available for {selectedOption.toLowerCase()}.
            </Text>
          }
        />

        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ddd",
    borderColor: "orange",
    borderWidth: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#d00",
    marginHorizontal: 8,
  },
  activeButton: {
    backgroundColor: "#d00",
  },
  toggleButtonText: {
    color: "#d00",
    fontSize: 14,
    fontWeight: "600",
  },
  activeButtonText: {
    color: "#fff",
  },
  branchContainer: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderColor: "#ddd",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedBranch: {
    borderColor: "#d00",
    borderWidth: 2,
  },
  branchDetails: {
    flex: 1,
  },
  branchName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  branchAddress: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  tick: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d00",
  },
  emptyMessage: {
    textAlign: "center",
    color: "#888",
    fontSize: 16,
    marginVertical: 20,
  },
  doneButton: {
    backgroundColor: "#d00",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  doneButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Branches;
