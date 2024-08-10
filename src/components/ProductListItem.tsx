import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import product from "../../assets/Food Ordering Asset bundle/data/products";
import { StyleSheet } from "react-native";
// import {Product} from '@/assets/Food Ordering Asset bundle/types'
import { Link } from "expo-router";

type Product = {
  id: number;
  image: string | null;
  name: string;
  price: number;
};

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.Container}>
        <Image
          source={{ uri: product.image || " " }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    maxWidth: "50%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
});
