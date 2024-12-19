import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
// import SearchBar from "./SearchBar";
// import UserCard from "./UserCard";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
const UserListScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("name"); // Default sort by name

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        setFilteredUsers(response.data); // Initially, show all users
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleSearch = (text) => {
    if (text.trim() === "") {
      setFilteredUsers(users); // Reset the list if the search text is empty
    } else {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };

  const handleSortToggle = () => {
    const newSortBy = sortBy === "name" ? "email" : "name";
    setSortBy(newSortBy);

    const sortedUsers = [...filteredUsers].sort((a, b) =>
      a[newSortBy].localeCompare(b[newSortBy])
    );
    setFilteredUsers(sortedUsers);
  };

  const onPress = (user) => {
    // Handle user press event
    console.log("User pressed:");
    // console.log(user);
    console.log(user.name);

    navigation.navigate("Details", { user: user });
  };

  const renderItem = ({ item }) => (
    <UserCard
      user={item}
      onPress={() => {
        onPress(item);
      }}
    />
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <SearchBar
            onSearch={handleSearch}
            onSortToggle={handleSortToggle}
            currentSort={sortBy}
          />
          <FlatList
            data={filteredUsers}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#F5D268",
  },
});

export default UserListScreen;

// import React, { useState, useEffect } from "react";
// import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
// import axios from "axios";
// import UserCard from "../components/UserCard";
// import SearchBar from "../components/SearchBar";
// import SortButton from "../components/SortButton";

// // import SearchBar from "./SearchBar";
// // import UserCard from "./UserCard"/
// // import SortButton from "./SortButton"; // Import the SortButton component

// const UserListScreen = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         setUsers(response.data);
//         setFilteredUsers(response.data); // Initially, show all users
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const handleSearch = (text) => {
//     if (text.trim() === "") {
//       setFilteredUsers(users); // Reset the list if the search text is empty
//     } else {
//       const filtered = users.filter((user) =>
//         user.name.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredUsers(filtered);
//     }
//   };

//   const handleSort = (criteria) => {
//     const sorted = [...filteredUsers].sort((a, b) =>
//       a[criteria].toLowerCase() > b[criteria].toLowerCase() ? 1 : -1
//     );
//     setFilteredUsers(sorted);
//   };

//   const renderItem = ({ item }) => <UserCard user={item} />;

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" />
//       ) : (
//         <>
//           <SearchBar onSearch={handleSearch} />
//           <SortButton onSort={handleSort} /> {/* Add the SortButton */}
//           <FlatList
//             data={filteredUsers}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id.toString()}
//           />
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//   },
// });

// export default UserListScreen;

// import React, { useState, useEffect } from "react";
// import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
// import axios from "axios";
// // import SearchBar from './SearchBar';
// // import UserCard from './UserCard';
// import UserCard from "../components/UserCard";
// import SearchBar from "../components/SearchBar";

// const UserListScreen = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         setUsers(response.data);
//         setFilteredUsers(response.data); // Initially, show all users
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const handleSearch = (text) => {
//     if (text.trim() === "") {
//       setFilteredUsers(users); // Reset the list if the search text is empty
//     } else {
//       const filtered = users.filter((user) =>
//         user.name.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredUsers(filtered);
//     }
//   };

//   const renderItem = ({ item }) => <UserCard user={item} />;

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" />
//       ) : (
//         <>
//           <SearchBar onSearch={handleSearch} />
//           <FlatList
//             data={filteredUsers}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id.toString()}
//           />
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "lightblue",
//     // padding: 15,
//     paddingTop: 20,
//     paddingBottom: 5,
//   },
// });

// export default UserListScreen;

// import React, { useEffect, useState } from "react";
// import { View, FlatList, StyleSheet, Text } from "react-native";
// // import UserCard from "../components/UserCard";
// import UserCard from "../components/UserCard";
// import Loader from "../components/Loader";
// // import Loader from "../components/Loader";
// // import { fetchUsers } from "../services/userService";
// // import { fetchUsers } from "../api/userService";
// import { fetchUsers } from "../api/userService";
// // import { SearchBar } from "react-native-screens";
// import SearchBar from "../components/SearchBar";

// const UserListScreen = ({ navigation }) => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     loadUsers();
//   }, [page]);

//   const loadUsers = async () => {
//     setLoading(true);
//     try {
//       const newUsers = await fetchUsers(page);
//       setUsers([...users, ...newUsers]);
//     } catch (error) {
//       console.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderUser = ({ item }) => (
//     <UserCard
//       user={item}
//       onPress={() => navigation.navigate("Details", { user: item })}
//     />
//   );
//   const handleSearch = (text) => {
//     if (text.trim() === "") {
//       setFilteredUsers(users); // Reset the list if the search text is empty
//     } else {
//       console.log(users);
//       const filtered = users.filter((user) =>
//         user.name.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredUsers(filtered);
//     }
//     // setSearchText(text);
//     // console.log(text);
//     // const filteredUsers = users.filter(
//     //   (user) =>
//     //     user.name.toLowerCase().includes(text.toLowerCase()) ||
//     //     user.email.toLowerCase().includes(text.toLowerCase())
//     // );
//     // setUsers(filteredUsers);
//     // console.log(");
//   };
//   return (
//     <View style={styles.container}>
//       <Text>User List Screen</Text>
//       <SearchBar onSearch={handleSearch} />
//       <Text>User List Screen</Text>
//       <FlatList
//         data={filteredUsers}
//         // keyExtractor={(item, index) => (index + item.id).toString()}
//         keyExtractor={(item, index) => index}
//         renderItem={renderUser}
//         onEndReached={() => setPage(page + 1)}
//         onEndReachedThreshold={0.5}
//         ListFooterComponent={loading && <Loader />}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: "#fff",
//     backgroundColor: "pink",
//   },
// });

// export default UserListScreen;
