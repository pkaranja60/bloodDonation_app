import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function BackButton() {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
      <Feather name="chevron-left" size={30} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    backgroundColor: "#FFE1E1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
