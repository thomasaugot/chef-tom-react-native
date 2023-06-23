import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    margin: 4,
    borderBottomColor: "#34322f",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
  },
});
