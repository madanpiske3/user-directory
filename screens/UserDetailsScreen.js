import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const UserDetailsScreen = ({ route }) => {
  const { user } = route.params;
  useEffect(() => {
    console.log("User Details Screen");
    // console.log(user);
  }, []);

  return (
    <View style={styles.entire}>
      <View style={styles.card}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </Text>
          </View>
          <View style={styles.headerText}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.username}>@{user.username}</Text>
          </View>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <View style={styles.infoRow}>
            <MaterialIcons name="email" size={20} color="#666" />
            <Text style={styles.infoText}>{user.email}</Text>
          </View>

          <View style={styles.infoRow}>
            <MaterialIcons name="phone" size={20} color="#666" />
            <Text style={styles.infoText}>{user.phone}</Text>
          </View>

          <View style={styles.infoRow}>
            <MaterialIcons name="language" size={20} color="#666" />
            <Text style={styles.infoText}>{user.website}</Text>
          </View>
        </View>

        {/* Address Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialIcons name="location-on" size={20} color="#666" />
            <Text style={styles.sectionTitle}>Address</Text>
          </View>
          <Text style={styles.addressText}>
            {user.address.street}, {user.address.suite}
          </Text>
          <Text style={styles.addressText}>
            {user.address.city}, {user.address.zipcode}
          </Text>
        </View>

        {/* Company Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialIcons name="business" size={20} color="#666" />
            <Text style={styles.sectionTitle}>Company</Text>
          </View>
          <Text style={styles.companyName}>{user.company.name}</Text>
          <Text style={styles.catchPhrase}>"{user.company.catchPhrase}"</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  entire: {
    flex: 1,
    backgroundColor: "#FFF2D7",
    padding: 20,
  },
  card: {
    // backgroundColor: "#fff",
    backgroundColor: "#F98866",
    borderRadius: 15,
    padding: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerText: {
    marginLeft: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    // color: "#333",
    color: "#fff",
  },
  username: {
    fontSize: 16,
    color: "#666",
  },
  section: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginLeft: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#666",
    marginLeft: 10,
  },
  addressText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  companyName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    // color: "#fff",
    marginBottom: 5,
  },
  catchPhrase: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#666",
  },
});

//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.title}>{JSON.stringify(user)}</Text> */}
//       <Text style={styles.title}>Name: {user.name}</Text>
//       <Text>Email: {user.email}</Text>
//       <Text>
//         Address: {user.address.street}, {user.address.city}
//       </Text>
//       <Text>Company: {user.company.name}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
// });

export default UserDetailsScreen;
