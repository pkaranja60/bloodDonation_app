import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React from "react";

export default function DonationRequests() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 15,
      }}
    >
      <TouchableOpacity style={styles.requestCard}>
        <View>
          <Text style={styles.cardTitle}>Name</Text>
          <Text style={styles.cardContent}>Amir Hamza</Text>
          <Text style={styles.cardTitle}>Location</Text>
          <Text style={styles.cardContent}>Hertford British Hospital</Text>
          <Text style={{ ...styles.cardTitle, paddingTop: 5 }}>5 Min Ago</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 28,
              paddingVertical: 30,
              fontWeight: "700",
              color: "#FF2156",
            }}
          >
            B+
          </Text>
          <Text style={styles.cardMessage}>Donate</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  requestCard: {
    width: 374,
    height: 146,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 14,
    color: "#7E7E7E",
    paddingBottom: 1,
  },
  cardContent: {
    fontSize: 14,
    fontWeight: "700",
    color: "#272A2F",
    paddingBottom: 10,
  },
  cardImage: {
    width: 38,
    height: 55,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  cardMessage: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FF2156",
    paddingTop: 1,
  },
});
