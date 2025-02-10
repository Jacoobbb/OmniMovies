import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions, Pressable, StyleSheet, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../typings/navigator";
import Header from "../common/components/Header";
import * as Icons from 'react-native-heroicons/solid';
import AutoHeightImage from "react-native-auto-height-image";
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';
import { Movie } from "../typings/movie";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteMovies, getMovieDetails, getMovieDetailsLoading } from "../store/movies/selectors";
import MovieActions from "../store/movies/actions";
import MovieBannerInfo from "../common/components/MovieBannerInfo";
import MovieIMDBRatings from "../common/components/MovieVotes";
import MovieSypnosis from "../common/components/MovieSypnosis";
import MovieCredits from "../common/components/MovieCredits";
import MovieRatings from "../common/components/MovieRatings";
import { AnimatedAutoHeightImage } from "../common/components/AutoHeightImage";

export interface MovieDetailsScreenOwnProps extends Movie {
  isFavorite: boolean;
}

type MovieDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MovieDetails"
>;

export default function MovieDetailsScreen(props: MovieDetailsScreenProps) {
  const { Poster, imdbID, isFavorite } = props.route.params;

  const dispatch = useDispatch();
  const movieData = useSelector(getMovieDetails);
  const loading = useSelector(getMovieDetailsLoading);
  const favoriteMovies = useSelector(getFavoriteMovies);

  const isMovieFavorite = favoriteMovies.some((movie) => movie.imdbID === imdbID);

  const leftElement = (
    <Pressable onPress={() => props.navigation.goBack()}>
      <Icons.ChevronLeftIcon color={'#ffffff'} />
    </Pressable>
  );

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  useEffect(() => {
    if (!isMovieFavorite) {
      dispatch(MovieActions.fetchMovieDetailsRequest({ imdbID }));
    }
  }, [dispatch, imdbID]);

  const handleFavoritePress = () => {
    if (isMovieFavorite) {
      dispatch(MovieActions.removeFavoriteMovie({ imdbID }));
    } else if (movieData) {
  
      dispatch(MovieActions.addFavoriteMovie({ movieDetails: movieData }));
    }
  };

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
          width={Dimensions.get('window').width}
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
      {movieData && !loading ? (
        <>
          <MovieBannerInfo {...movieData} />
          <MovieIMDBRatings {...movieData} onFavoritePress={handleFavoritePress} isMovieFavorite={isMovieFavorite} />
          <MovieSypnosis Plot={movieData.Plot} />
          <MovieCredits {...movieData} />
          <MovieRatings Ratings={movieData.Ratings} />
        </>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
  },
  bannerContainer: {
    height: 200,
    marginTop: -75,
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  poster: {
    marginLeft: 20,
    marginTop: -100,
    borderRadius: 10,
  },
  favoriteButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ff6347',
    borderRadius: 5,
    alignSelf: 'center',
  },
  favoriteText: {
    color: 'white',
    fontSize: 16,
  },
});
