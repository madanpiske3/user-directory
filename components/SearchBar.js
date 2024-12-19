import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const SearchBar = ({ onSearch, onSortToggle, currentSort }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (text) => {
    setSearchText(text);
    onSearch(text); // Pass search text back to parent component
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search By Name..."
        value={searchText}
        onChangeText={handleSearchChange}
      />
      <TouchableOpacity style={styles.sortButton} onPress={onSortToggle}>
        <Text style={styles.sortText}>
          Sort by {currentSort === "name" ? "Email" : "Name"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    // backgroundColor: "#f0f0f0",
    backgroundColor: "#FFE1BA",
    borderRadius: 8,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 8,
    // backgroundColor: "#fff",
    backgroundColor: "#DE6553",
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  sortButton: {
    marginLeft: 10,
    padding: 8,
    backgroundColor: "#173835",
    borderRadius: 8,
  },
  sortText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SearchBar;

// import React, { useState } from "react";
// import { View, TextInput, Button, StyleSheet } from "react-native";

// const SearchBar = ({ onSearch, onSort }) => {
//   const [searchText, setSearchText] = useState("");

//   const handleSearchChange = (text) => {
//     setSearchText(text);
//     onSearch(text); // Trigger the parent component's search logic
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Search users..."
//         value={searchText}
//         onChangeText={handleSearchChange}
//       />
//       <View style={styles.sortButtons}>
//         <Button title="Sort by Name" onPress={() => onSort("name")} />
//         <Button title="Sort by Email" onPress={() => onSort("email")} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "column", // Adjust layout to stack input and buttons
//     padding: 10,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     elevation: 2,
//     marginBottom: 15,
//   },
//   input: {
//     height: 40,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10, // Add spacing between input and buttons
//   },
//   sortButtons: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
// });

// export default SearchBar;

// // SearchBar.js
// import React, { useState } from "react";
// import { TextInput, View, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons"; // For the search icon

// const SearchBar = ({ onSearch }) => {
//   const [searchText, setSearchText] = useState("");

//   // Handle input change and trigger the search callback
//   const handleSearchChange = (text) => {
//     setSearchText(text);
//     onSearch(text); // Pass the search text to the parent component
//   };

//   return (
//     <View style={styles.container}>
//       <Ionicons name="search" size={24} color="gray" style={styles.icon} />
//       <TextInput
//         style={styles.input}
//         placeholder="Search users..."
//         value={searchText}
//         onChangeText={handleSearchChange}
//         autoCapitalize="none"
//         autoCorrect={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f0f0f0",
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     borderRadius: 25,
//     marginBottom: 15,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: "#333",
//   },
// });

// export default SearchBar;
