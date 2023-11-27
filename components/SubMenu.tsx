import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { subMenuOptions } from "../constants";
import { Link } from "expo-router";

interface SubMenuItem {
  name: string;
  image: number;
  href: any;
}

interface MenuCardProps {
  item: SubMenuItem;
  index: any;
}

export default function SubMenu() {
  return (
    <View>
      <FlatList
        numColumns={3}
        data={subMenuOptions}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingBottom: 20 }}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        renderItem={({ item, index }) => <MenuCard index={index} item={item} />}
      />
    </View>
  );
}

const MenuCard: React.FC<MenuCardProps> = ({ item, index }) => {
  return (
    <View style={{ alignContent: "center" }}>
      <Link href={item.href} key={index} asChild>
        <TouchableOpacity style={styles.menuCard}>
          <Image source={item.image} style={styles.menuImage} />
          <Text style={styles.menuText}>{item.name}</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  menuCard: {
    backgroundColor: "#ffffff",
    width: 111,
    height: 111,
    margin: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  menuImage: {
    width: 40,
    height: 40,
  },
  menuText: {
    fontSize: 14,
    color: "#7E7E7E",
    fontWeight: "700",
    padding: 10,
  },
});
