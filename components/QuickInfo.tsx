import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function QuickInfo() {
  return (
    <View style={styles.quickInfo}>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>A+</Text>
        <Text style={styles.infoSubtitle}>Blood Type</Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>05</Text>
        <Text style={styles.infoSubtitle}>Donated</Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>02</Text>
        <Text style={styles.infoSubtitle}>Requested</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  quickInfo: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: wp(5),
    marginBottom: wp(5),
  },
  infoCard: {
    width: 100,
    height: 100,
    borderRadius: 3,
    elevation: 2,
    alignItems: "center",
    margin: 10,
    justifyContent: "center",
    paddingVertical: wp(3),
    backgroundColor: "#ECF2FF",
  },
  infoTitle: {
    fontSize: 30,
    fontWeight: "500",
    color: "#272A2F",
  },
  infoSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#7C7C7C",
  },
  quickMenuCard: {
    width: wp(90),
    height: 55,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    borderRadius: 4,
  },
  quickMenuTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#7C7C7C",
    marginStart: 5,
  },
});
