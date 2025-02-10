import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteMoviesScreen from "../screens/FavoriteMoviesScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import { RootStackParamList } from "../typings/navigator";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function FavoritesNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false, 
        contentStyle: styles.container,
      }}>
      <Stack.Screen name="FavoriteMovies" component={FavoriteMoviesScreen} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000'
  }
})