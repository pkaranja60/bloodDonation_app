import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { EvilIcons } from "@expo/vector-icons";
import ImageSlider from "../components/ImageSlider";
import SubMenu from "../components/SubMenu";
import DonationRequests from "../components/DonationRequests";
import { Link } from "expo-router";

export default function home() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E5E5E5" style="dark" />
      <View style={styles.headerWrap}>
        <View style={styles.header}>
          <Link href={"/(profile)/profile"} asChild>
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://media.gq-magazine.co.uk/photos/621688bb1feae1d12c8572d1/master/w_1600%2Cc_limit/230222_oppenheimer_HP.jpg",
                }}
                style={{ width: 50, height: 50, borderRadius: 100 }}
              />
            </TouchableOpacity>
          </Link>

          <View style={styles.bellIcon}>
            <EvilIcons name="bell" size={hp(3)} color="black" />
          </View>
        </View>

        {/* image slider */}
        <View style={styles.headerSlider}>
          <Image source={require("../assets/images/Rectangle13.png")} />
        </View>
      </View>

      {/* Menu List */}
      <SubMenu />

      <View>
        <Text style={styles.textHeader}>Donation Request</Text>
        {/* Donation Request Notification */}
        <DonationRequests />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    paddingHorizontal: wp(5),
    paddingVertical: 10,
  },
  headerWrap: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bellIcon: {
    backgroundColor: "#F5EBEB",
    width: hp(5.5),
    height: hp(5.5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  textHeader: {
    fontSize: 17,
    fontWeight: "500",
    color: "#272A2F",
  },
  headerSlider: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#000",
  },
});
