import { Image, View, ScrollView, StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
// import FavoritesContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Drawernavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#c8d25f" },
        headerTintColor: "#34322f",
        sceneContainerStyle: { backgroundColor: "white" },
        drawerContentStyle: { backgroundColor: "#c8d25f" },
        drawerInactiveTintColor: "#34322f",
        drawerActiveTintColor: "#34322f",
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
      <Provider store={store}>
        {/* <FavoritesContextProvider> */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#c8d25f" },
              headerTintColor: "#34322f",
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
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
