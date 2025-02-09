import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Movie } from "../typings/movie";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../typings/navigator";
import { AnimatedAutoHeightImage } from "../common/components/AutoHeightImage";
import Animated from "react-native-reanimated";

export interface MovieDetailsScreenOwnProps extends Movie {
    isFavorite: boolean
}

type MovieDetailsScreenProps = NativeStackScreenProps<
    RootStackParamList,
    "MovieDetails"
>;
  
export default function MovieDetailsScreen(props: MovieDetailsScreenProps) {
    const { imdbID, Poster } = props.route.params;
    return (
        <AnimatedAutoHeightImage
            sharedTransitionTag={`movie_card_${imdbID}`}
            width={Dimensions.get('window').width}
            style={styles.image}
            source={{ uri: Poster }}
        />
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