import { StyleSheet, Platform, SafeAreaView, FlatList } from "react-native";

import { HelloWave } from "@/src/components/HelloWave";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { View, Text, Image } from "react-native";
import product from "../../../../assets/Food Ordering Asset bundle/data/products";
import ProductListItem from "@/src/components/ProductListItem";
import { Stack } from "expo-router";

export default function HomeScreen() {
  return (
  
    <SafeAreaView>
      <Stack.Screen options={{title:'Menu'}}/>
      <FlatList
        data={product}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
