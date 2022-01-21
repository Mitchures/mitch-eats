import { View, Text, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: styles.input,
          textInputContainer: styles.inputContainer,
        }}
        renderLeftButton={() => (
          <View style={styles.leftButtonIcon}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.rightButton}>
            <AntDesign
              style={styles.rightButtonIcon}
              name="clockcircle"
              size={11}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#eee",
    borderRadius: 20,
    fontWeight: "700",
    marginTop: 7,
  },
  inputContainer: {
    backgroundColor: "#eee",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  leftButtonIcon: {
    marginLeft: 20,
  },
  rightButton: {
    flexDirection: "row",
    marginRight: 10,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
  },
  rightButtonIcon: {
    marginRight: 6,
  },
});
