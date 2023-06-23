import {
  Image,
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Drawernavigator = () => {
  const DrawerContent = () => (
    <View style={styles.container}>
      <Image source={require("./assets/logo.png")} style={styles.logo} />
    </View>
  );

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#DDAA00" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "white" },
        drawerContentStyle: { backgroundColor: "#DDAA00" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#DDAA00" },
              headerTintColor: "white",
              cardStyle: { backgroundColor: "white" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={Drawernavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverview} />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
