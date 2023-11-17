import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FF2156" style="light" />
      <Image
        source={require("../assets/images/SplashScreen.jpg")}
        style={{ width: wp(100), height: hp(100) }}
      />
      <View style={styles.containerWrapper}>
        <LinearGradient
          colors={["transparent", "#18181b"]}
          style={{ width: wp(100), height: hp(100), alignItems: "center" }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1.1 }}
        >
          <Animated.Image
            entering={FadeInUp.delay(300).duration(2000).damping(5).springify()}
            source={require("../assets/images/Logo.png")}
            style={styles.logo}
          />

          <Animated.View
            entering={FadeInDown.delay(100).springify()}
            style={{ alignItems: "center" }}
          >
            <Text style={styles.logoTitle}>Dare 2 Donate</Text>
            <Text style={styles.logoSubtitle}>
              "Saving Lives Drop by Drop: Connecting Hearts{"\n"} Through Blood
              Transfusion."
            </Text>
          </Animated.View>

          <Animated.View
            style={styles.buttonWrapper}
            entering={FadeInDown.delay(300).springify()}
          >
            <TouchableOpacity
              onPress={() => router.push("/home")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </Animated.View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FF2156",
  },
  containerWrapper: {
    alignItems: "center",
    justifyContent: "center",
    ...StyleSheet.absoluteFillObject,
  },
  logo: {
    width: 114,
    height: 171,
    marginTop: hp(25),
    marginBottom: hp(5),
  },
  logoTitle: {
    fontSize: hp(4),
    fontWeight: "700",
    color: "#ffffff",
  },
  logoSubtitle: {
    fontSize: hp(1.5),
    fontWeight: "400",
    color: "#ffffff",
    textAlign: "center",
    padding: 3,
  },
  buttonWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(20),
  },
  button: {
    backgroundColor: "#940B92",
    height: hp(7),
    width: wp(65),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderColor: "#fff",
    borderWidth: 1,
    elevation: 5,
  },
  buttonText: {
    fontSize: hp(2),
    color: "#ffffff",
    fontWeight: "500",
    letterSpacing: 2,
  },
});
