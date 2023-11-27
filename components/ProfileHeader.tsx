import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BackButton from "./BackButton";

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E5E5E5" style="dark" />
      <View style={styles.headerWrapper}>
        <BackButton />
        <Text style={{ fontSize: 22, fontWeight: "500", textAlign: "center" }}>
          Profile
        </Text>
        <Feather name="edit" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: wp(100),
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
  },
});
