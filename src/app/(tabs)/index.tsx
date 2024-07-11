import {  StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/src/components/HelloWave";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { View, Text, Image } from "react-native";
import product from "../../../../food-app/assets/Food Ordering Asset bundle/data/products";


 const products = product[0];

export default function HomeScreen() {
  return (
    <View style={styles.Container}>
      <Image
        source={{ uri: products.image }}
        style = {styles.image}/>
      <Text style={styles.title}>{products.name}</Text>
      <Text style={styles.price}>{products.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
  },
  image:{
    width: '100%',
 aspectRatio: 1,
    borderRadius: 10,
  }
});
