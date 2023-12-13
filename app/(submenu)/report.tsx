import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SubMenuHeader from "../../components/SubMenuHeader";
import { Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import QuickInfo from "../../components/QuickInfo";
import Button from "../../components/Button";

export default function report() {
  return (
    <View>
      <SubMenuHeader name="Report" />

      <View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.imageWrapper}>
            <Feather
              name="map-pin"
              size={16}
              color="#FF2156"
              style={{ marginEnd: 3 }}
            />
            <Text>Dhaka Medical College, Dhaka.</Text>
          </View>

          <Image
            source={require("../../assets/images/Group44.png")}
            style={styles.screenImage}
          />
        </View>

        {/* Report Info */}
        <QuickInfo />
        <QuickInfo />

        <Button name="My Report" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: { flexDirection: "row", marginBottom: 50 },
  screenImage: { marginEnd: wp(20), width: 270, height: 260 },
});
