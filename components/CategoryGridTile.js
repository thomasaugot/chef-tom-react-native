import { Pressable, View, Text, StyleSheet, Platform, Image } from "react-native";

const CategoryGridTile = ({ title, onPress, image }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
      >
        <View style={styles.titleContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white", // for IOS
    shadowColor: "#34322f", // for IOS
    shadowOpacity: 0.25, // for IOS
    shadowOffset: {
      // for IOS
      width: 0,
      height: 2,
    },
    shadowRadius: 8, // for IOS
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 120,
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#c8d25f",
    paddingVertical: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#34322f",
    textAlign: "center",
    paddingTop: 6,
  },
});
