import React, { useState, useCallback } from "react";
import { TextInput, Button, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import useDebounce from "../hooks/useDebounce";
import { RootStackParamList, TabStackParamList } from "../typings/navigator";

type MovieSearchScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "MovieList">,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function MovieSearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const go = useNavigation<MovieSearchScreenNavigationProp>();

  const handleSearch = useCallback(
    useDebounce(() => {
      if (searchQuery.trim()) {
        go.navigate("MovieList", { search: searchQuery.trim() });
      }
    }, 500),
    [searchQuery]
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a movie..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
