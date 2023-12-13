import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Button({ name }: { name: string }) {
  return (
    <View>
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logout: {
    width: wp(60),
    height: wp(17),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF2156",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15,
    elevation: 5,
  },
  logoutText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#ffffff",
  },
});
