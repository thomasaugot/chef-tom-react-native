import { View, Text, StyleSheet } from "react-native";

const MealDetails = ({ duration, complexity, affordability, style, textStyle }) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>Duration: {duration} min.</Text>
      {complexity && <Text style={[styles.detailItem, textStyle]}>{complexity}</Text>}
      {affordability && <Text style={[styles.detailItem, textStyle]}>$ {affordability}</Text>}
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
    color: "white",
  },
});
