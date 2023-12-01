import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ProfileHeader from "../../components/ProfileHeader";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function profile() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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

        {/* quick Info */}
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

        {/* quick menu */}
        <View style={{ paddingHorizontal: wp(5) }}>
          <View style={styles.quickMenuCard}>
            <MaterialIcons
              name="event-available"
              size={24}
              color="#FF2156"
              style={{ paddingHorizontal: wp(3) }}
            />
            <Text style={styles.quickMenuTitle}>Available to Donate</Text>
          </View>
          <TouchableOpacity style={styles.quickMenuCard}>
            <Feather
              name="mail"
              size={24}
              color="#FF2156"
              style={{ paddingHorizontal: wp(3) }}
            />
            <Text style={styles.quickMenuTitle}>Invite a friend</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickMenuCard}>
            <MaterialCommunityIcons
              name="information-variant"
              size={24}
              color="#FF2156"
              style={{ paddingHorizontal: wp(3) }}
            />
            <Text style={styles.quickMenuTitle}>Get Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickMenuCard}>
            <Ionicons
              name="ios-trail-sign-outline"
              size={24}
              color="#FF2156"
              style={{ paddingHorizontal: wp(3) }}
            />
            <Text style={styles.quickMenuTitle}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F4F4",
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
    elevation: 0.4,
    alignItems: "center",
    margin: 10,
    justifyContent: "center",
    paddingVertical: wp(3),
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
    alignContent: "center",
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
