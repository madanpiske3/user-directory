import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

const Temp = () => {
  const [data, setData] = useState(null);

  // Mock API or Local Data
  const fetchData = async () => {
    try {
      // Simulating an API request
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Render the data
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data ? (
        <View style={styles.card}>
          <Text style={styles.header}>User Details</Text>

          {/* Basic Information */}
          <Text style={styles.label}>
            Name: <Text style={styles.value}>{data.name}</Text>
          </Text>
          <Text style={styles.label}>
            Username: <Text style={styles.value}>{data.username}</Text>
          </Text>
          <Text style={styles.label}>
            Email: <Text style={styles.value}>{data.email}</Text>
          </Text>
          <Text style={styles.label}>
            Phone: <Text style={styles.value}>{data.phone}</Text>
          </Text>
          <Text style={styles.label}>
            Website: <Text style={styles.value}>{data.website}</Text>
          </Text>

          {/* Address */}
          <Text style={styles.subHeader}>Address</Text>
          <Text style={styles.label}>
            Street: <Text style={styles.value}>{data.address.street}</Text>
          </Text>
          <Text style={styles.label}>
            Suite: <Text style={styles.value}>{data.address.suite}</Text>
          </Text>
          <Text style={styles.label}>
            City: <Text style={styles.value}>{data.address.city}</Text>
          </Text>
          <Text style={styles.label}>
            Zipcode: <Text style={styles.value}>{data.address.zipcode}</Text>
          </Text>
          <Text style={styles.label}>
            Geo:
            <Text style={styles.value}>
              {" "}
              {data.address.geo.lat}, {data.address.geo.lng}
            </Text>
          </Text>

          {/* Company */}
          <Text style={styles.subHeader}>Company</Text>
          <Text style={styles.label}>
            Name: <Text style={styles.value}>{data.company.name}</Text>
          </Text>
          <Text style={styles.label}>
            Catchphrase:{" "}
            <Text style={styles.value}>{data.company.catchPhrase}</Text>
          </Text>
          <Text style={styles.label}>
            BS: <Text style={styles.value}>{data.company.bs}</Text>
          </Text>
        </View>
      ) : (
        <Text style={styles.loading}>Loading...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    color: "#444",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginVertical: 2,
  },
  value: {
    fontWeight: "normal",
    color: "#333",
  },
  loading: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
    color: "gray",
  },
});

export default Temp;
