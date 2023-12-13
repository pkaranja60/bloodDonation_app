import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import BackButton from "./BackButton";
import { Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function SubMenuHeader({ name }: { name: string }) {
  return (
    <View>
      <StatusBar backgroundColor="#E5E5E5" style="dark" />

      <View style={styles.headerWrapper}>
        <BackButton />
        <Text style={styles.headerText}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
  },
  headerText: {
    flex: 1,
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    marginEnd: 15,
  },
});
