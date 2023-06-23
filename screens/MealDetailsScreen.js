import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetail/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailsScreen = ({ route, navigation }) => {
  const favoriteMealContext = useContext(FavoritesContext);

  const mealId = route?.params?.mealId;
  // console.log(mealId);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealContext.ids.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealContext.removeFavorite(mealId);
    } else {
      favoriteMealContext.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="#34322f"
            onPress={changeFavoriteStatusHandler}
            style={styles.favIcon}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailstext}
      />
      <View style={styles.subTitleContainer}>
        <Subtitle>Ingredients</Subtitle>
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <List data={selectedMeal.ingredients} />
        </View>
      </View>
      <Subtitle>Steps</Subtitle>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 18,
    textAlign: "center",
    color: "#34322f",
  },
  detailstext: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
