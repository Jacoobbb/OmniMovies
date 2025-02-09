import React from "react";
import { StyleSheet } from "react-native";
import { Movie } from "../typings/movie";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../typings/navigator";

export interface MovieDetailsScreenOwnProps extends Movie {
    isFavorite: boolean
}

type MovieDetailsScreenProps = NativeStackScreenProps<
    RootStackParamList,
    "MovieDetails"
>;
  
export default function MovieDetailsScreen(props: MovieDetailsScreenProps) {
    const {} = props.route;
    return (
        <></>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  imageContainer: {
    margin: 24,
  },
  image: {
    resizeMode: 'contain',
    borderRadius: 10,
  }
});