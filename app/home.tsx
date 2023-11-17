import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { EvilIcons } from "@expo/vector-icons";

export default function home() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E5E5E5" style="dark" />
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://media.gq-magazine.co.uk/photos/621688bb1feae1d12c8572d1/master/w_1600%2Cc_limit/230222_oppenheimer_HP.jpg",
          }}
          style={{ width: 50, height: 50, borderRadius: 100 }}
        />
        <EvilIcons name="bell" size={35} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
