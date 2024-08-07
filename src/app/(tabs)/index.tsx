import { StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/src/components/HelloWave";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { View, Text, Image } from "react-native";
import product from "../../../../food-app/assets/Food Ordering Asset bundle/data/products";
import ProductListItem from "@/src/components/ProductListItem";



export default function HomeScreen() {
  return (
    <View >
     <ProductListItem  product = {product[1]} />
     <ProductListItem  product = {product[2]} />
    </View>
  );
}

const styles = StyleSheet.create({


});
