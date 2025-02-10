import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions, Pressable, StyleSheet, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Header from "../common/components/Header";
import * as Icons from "react-native-heroicons/solid";
import AutoHeightImage from "react-native-auto-height-image";
import Animated, { useSharedValue, useAnimatedScrollHandler } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteMovies, getMovieDetails, getMovieDetailsLoading } from "../store/movies/selectors";
import MovieActions from "../store/movies/actions";
import MovieBannerInfo from "../common/components/MovieBannerInfo";
import MovieIMDBRatings from "../common/components/MovieVotes";
import MovieSypnosis from "../common/components/MovieSypnosis";
import MovieCredits from "../common/components/MovieCredits";
import MovieRatings from "../common/components/MovieRatings";
import { AnimatedAutoHeightImage } from "../common/components/AutoHeightImage";
import { RootStackParamList } from "../typings/navigator";
import { Movie } from "../typings/movie";

export interface MovieDetailsScreenOwnProps extends Movie {
  isFavorite: boolean;
}

type MovieDetailsScreenProps = NativeStackScreenProps<RootStackParamList, "MovieDetails">;

export default function MovieDetailsScreen(props: MovieDetailsScreenProps) {
  const { Poster, imdbID, isFavorite } = props.route.params;

  const dispatch = useDispatch();
  const favoriteMovies = useSelector(getFavoriteMovies);
  const loading = useSelector(getMovieDetailsLoading);

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const isMovieFavorite = favoriteMovies.some((movie) => movie.imdbID === imdbID);

  const movieData = (isFavorite)
    ? favoriteMovies.find((movie) => movie.imdbID === imdbID)
    : useSelector(getMovieDetails);

  useEffect(() => {
    if (!isMovieFavorite) {
      dispatch(MovieActions.fetchMovieDetailsRequest({ imdbID }));
    }
  }, [dispatch, imdbID, isFavorite, isMovieFavorite]);

  const handleFavoritePress = () => {
    if (isFavorite || isMovieFavorite) {
      dispatch(MovieActions.removeFavoriteMovie({ imdbID }));
    } else if (movieData) {
      dispatch(MovieActions.addFavoriteMovie({ movieDetails: movieData }));
    }
  };

  const leftElement = (
    <Pressable onPress={() => props.navigation.goBack()}>
      <Icons.ChevronLeftIcon color="#ffffff" />
    </Pressable>
  );

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      stickyHeaderIndices={[0]}
      scrollEventThrottle={16}
    >
      <Header leftElement={leftElement} hasGradient={false} scrollY={scrollY} />
      <View style={styles.bannerContainer}>
        <AutoHeightImage
          style={styles.image}
          width={Dimensions.get("window").width}
          height={200}
          source={{ uri: Poster }}
          blurRadius={3}
        />
      </View>
      <AnimatedAutoHeightImage
        sharedTransitionTag={`movie_card_${imdbID}`}
        width={120}
        source={{ uri: Poster }}
        style={styles.poster}
      />
      {movieData ? (
        <>
          <MovieBannerInfo {...movieData} />
          <MovieIMDBRatings
            {...movieData}
            onFavoritePress={handleFavoritePress}
            isMovieFavorite={isMovieFavorite}
          />
          <MovieSypnosis Plot={movieData.Plot} />
          <MovieCredits {...movieData} />
          <MovieRatings Ratings={movieData.Ratings} />
        </>
      ) : loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <Text style={styles.errorText}>Movie details not available</Text>
      )}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
  },
  bannerContainer: {
    height: 200,
    marginTop: -75,
    position: "relative",
    overflow: "hidden",
    alignItems: "center",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  poster: {
    marginLeft: 20,
    marginTop: -100,
    borderRadius: 10,
  },
  errorText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "red",
  },
});
