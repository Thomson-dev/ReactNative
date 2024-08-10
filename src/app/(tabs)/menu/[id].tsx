import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import Product from "@/assets/Food Ordering Asset bundle/data/products";
import { forwardRef } from "react";
import Colors from '@/src/constants/Colors';

const sizes = ["S", "M", "L", "XL"];

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <Pressable ref={ref} {...pressableProps} style={styles.btn}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }
);

const addToCart = () => {
 
  console.warn('Add to cart');
};

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const [selectedSize, setselectedSize] = useState("S");

  const product = Product.find((p) => p.id.toString() === id);

  if (!product) {
    return <Text>Product not found </Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />

      <Image source={{ uri: product.image }} style={styles.image} />
      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setselectedSize(size)}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selectedSize === size ? "black" : "gray" },
              ]}
              key={size}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "auto",
  },
  sizes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    fontSize: 20,
    width: 50,
    backgroundColor: "gainsboro",
    aspectRatio: 1,
    justifyContent: "center",
    borderRadius: 25,
    alignItems: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },

  btn: {
    backgroundColor: '#0a7ea4',
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});
