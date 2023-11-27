import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "../../components/ProfileHeader";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";

export default function profile() {
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <View style={styles.profileContainer}>
        {/* Profile Image */}
        <Image
          source={{
            uri: "https://media.gq-magazine.co.uk/photos/621688bb1feae1d12c8572d1/master/w_1600%2Cc_limit/230222_oppenheimer_HP.jpg",
          }}
          style={{ width: 103, height: 103, borderRadius: 10 }}
        />

        {/* Profile info*/}
        <View style={styles.profileTextWrapper}>
          <Text style={styles.profileTextTitle}>John Doe</Text>

          <View
            style={{
              flexDirection: "row",
              paddingTop: wp(1),
              alignItems: "center",
            }}
          >
            <Feather
              name="map-pin"
              size={16}
              color="#FF2156"
              style={{ marginEnd: 3 }}
            />
            <Text style={styles.profileTextSubtitle}>
              Chittagong, Bangladesh
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    flex: 1,
  },
  profileContainer: {
    alignItems: "center",
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  profileTextWrapper: {
    paddingVertical: hp(3),
  },
  profileTextTitle: {
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  },
  profileTextSubtitle: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    color: "#7C7C7C",
  },
});
