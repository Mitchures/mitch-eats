import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = ({ text, activeTab, setActiveTab }) => (
  <TouchableOpacity
    style={{
      backgroundColor: activeTab === text ? "black" : "white",
      ...styles.button,
    }}
    onPress={() => setActiveTab(text)}
  >
    <Text
      style={{ color: activeTab === text ? "white" : "black", ...styles.text }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginHorizontal: 4,
  },
  text: {
    fontSize: 15,
    fontWeight: "900",
  },
});
