import React from "react";
import { View, Text, Pressable, StyleSheet, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetail/MealDetails";

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
  const navigation = useNavigation();

  const selectmealItemHandler = () => {
    navigation.navigate("MealDetails", { mealId: id });
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={selectmealItemHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} affordability={affordability} complexity={complexity} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "#c8d25f",
    elevation: 4,
    shadowColor: "#34322f",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
    color: "#34322f",
  },
});

export default MealItem;
