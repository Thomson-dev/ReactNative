import React from "react";
import { View, Text, Image } from "react-native";
import product from "../../assets/Food Ordering Asset bundle/data/products";
import { StyleSheet } from "react-native";
const ProductListItem = ({ product }) => {
  return (
    <View style={styles.Container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
});
