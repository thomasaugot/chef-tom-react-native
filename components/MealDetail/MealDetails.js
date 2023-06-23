import { View, Text, StyleSheet } from "react-native";
import Meal from "../../models/meal";

const MealDetails = ({ duration, complexity, affordability, style, textStyle }) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
      {complexity && <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>}
      {affordability && (
        <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
      )}
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 6,
    fontSize: 12,
    color: "#34322f",
  },
});
