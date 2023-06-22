import { Text } from "react-native";

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;
  return <Text>{mealId}</Text>;
};

export default MealDetailsScreen;
