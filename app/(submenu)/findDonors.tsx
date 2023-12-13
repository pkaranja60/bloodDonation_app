import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SubMenuHeader from "../../components/SubMenuHeader";
import { donors } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface donor {
  id: number;
  name: string;
  age: number;
  gender: string;
  bloodType: string;
}

interface MenuCardProps {
  donor: donor;
  index: any;
}

export default function findDonors() {
  return (
    <View style={{ flex: 1 }}>
      <SubMenuHeader name="Find Donors" />
      <SearchBar />
      <ScrollView style={styles.container}>
        {donors.map((donor, index) => (
          <DonorCard key={donor.id} index={index} donor={donor} />
        ))}
      </ScrollView>
    </View>
  );
}

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons
          style={styles.searchIcon}
          name="ios-search"
          size={20}
          color="#9F9AA1"
        />
        <TextInput
          style={styles.input}
          placeholder="Restaurants, groceries, dishes"
        />
      </View>
      <Link href={"/"} asChild>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="options" size={30} color="#20E1B2" />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

const DonorCard: React.FC<MenuCardProps> = ({ donor, index }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{
          uri: "https://www.pngkey.com/png/detail/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png",
        }}
        style={styles.donorImage}
      />
      <View style={styles.cardWrapper}>
        <Text style={styles.donorTitle}>{donor.name}</Text>
        <Text style={styles.donorSubtitle}>{donor.gender}</Text>
        <Text style={styles.donorSubtitle}>{donor.age}</Text>
      </View>

      <Text style={styles.bloodType}>{donor.bloodType}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  card: {
    flexDirection: "row",
    marginBottom: wp(5),
    paddingVertical: wp(3),
    paddingHorizontal: wp(2),
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#ECF2FF",
    backgroundColor: "#ECF2FF",
    elevation: 3,
  },
  donorImage: {
    width: 85,
    height: 85,
    borderRadius: 10,
  },

  cardWrapper: {
    flex: 1,
    paddingHorizontal: wp(5),
    justifyContent: "center",
  },
  bloodType: {
    fontSize: 28,
    paddingVertical: 30,
    paddingEnd: 15,
    fontWeight: "700",
    color: "#FF2156",
  },
  donorTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  donorSubtitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#7E7E7E",
  },
  searchContainer: {
    height: 60,
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  searchField: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECF2FF",
    borderRadius: 3,
  },
  input: {
    padding: 10,
    color: "#424242",
  },
  optionButton: {
    paddingLeft: 15,
  },
});
