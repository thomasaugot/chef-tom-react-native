import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import MealsOverview from "./MealsOverview";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        onPress={pressHandler}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      key={(item) => {
        item.id;
      }}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
