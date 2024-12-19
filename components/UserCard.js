import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
import Loader from "./Loader";

const UserCard = ({ user, onPress }) => {
  // const userData = user;
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setLoading] = useState(true);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get("https://picsum.photos/200/300", {
        responseType: "blob",
      });
      setImageUrl(response.request.responseURL); // Get the actual image URL
      setLoading(false);
    } catch (error) {
      console.error("Error fetching image:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  // onPressed = () => {
  //   console.log("UserCard pressed");
  // };

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      {isLoading ? (
        // <Text>Loading...</Text>
        // <ActivityIndicator size="large" color="#0000ff" />
        <Loader />
      ) : (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      )}
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    color: "#555",
  },
});

export default UserCard;

// import React, { useState, useEffect } from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

// import axios from "axios";

// // const imageLocal = '../assets/user-dir.png';
// const imageLocal = "../assets//user-dir.png";
// const UserCard = ({ user, onPress }) => {
//   const [imageUrl, setImageUrl] = useState("");
//   const [isLoading, setLoading] = useState(true);
//   const fetchRandomImage = async () => {
//     try {
//       const response = await axios.get(
//         "https://picsum.photos/200/300?random=1"
//       );
//       const imageUrl = response.data; // Access the image URL directly from response data
//       setImageUrl(imageUrl);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching image:", error);
//       setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchRandomImage();
//   }, []);
//   return (
//     <TouchableOpacity onPress={onPress} style={styles.card}>
//       {isLoading ? (
//         <Text>Loading...</Text>
//       ) : (
//         <Image
//           // source={require("../assets/user-dir.png")}
//           source={imageLocal}
//           style={styles.image}
//         />
//       )}
//       <View>
//         <Text style={styles.name}>{user.name}</Text>
//         <Text style={styles.email}>{user.email}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     flexDirection: "row",
//     padding: 10,
//     borderBottomWidth: 1,
//     borderColor: "#ccc",
//   },
//   image: { width: 50, height: 50, marginRight: 10, borderRadius: 25 },
//   name: { fontSize: 16, fontWeight: "bold" },
//   email: { color: "#555" },
// });

// export default UserCard;
