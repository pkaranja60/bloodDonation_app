import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { sliderImages } from "../constants/index";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

export default function ImageSlider() {
  return (
    <Carousel
      autoplay={true}
      autoplayInterval={5000}
      loop={true}
      data={sliderImages}
      renderItem={ItemCard}
      firstItem={1}
      sliderWidth={wp(100)}
      itemWidth={wp(100) - 70}
      slideStyle={{ alignItems: "center", display: "flex" }}
      hasParallaxImages={true}
    />
  );
}

const ItemCard = ({ item, index }, parallaxProps) => {
  return (
    <View style={styles.container}>
      <ParallaxImage
        source={item}
        containerStyle={styles.card}
        style={{ resizeMode: "contain" }}
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(100) - 70,
    marginTop: wp(3),
  },
  card: {
    width: wp(100) - 35,
    height: hp(25),
    borderRadius: 50,
    flex: 1,
  },
});
