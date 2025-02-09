import React from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../typings/navigator";
import { DETAILS } from "../common/constants/mock";
import Header from "../common/components/Header";
import * as Icons from 'react-native-heroicons/solid';
import AutoHeightImage from "react-native-auto-height-image";
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';
import MovieBannerInfo from "../common/components/MovieBannerInfo";
import MovieIMDBRatings from "../common/components/MovieVotes";
import MovieSypnosis from "../common/components/MovieSypnosis";
import MovieCredits from "../common/components/MovieCredits";
import MovieRatings from "../common/components/MovieRatings";
import { Movie } from "../typings/movie";

export interface MovieDetailsScreenOwnProps extends Movie {
    isFavorite: boolean
}

type MovieDetailsScreenProps = NativeStackScreenProps<
    RootStackParamList,
    "MovieDetails"
>;

const data = DETAILS;

export default function MovieDetailsScreen(props: MovieDetailsScreenProps) {
    const { Poster } = props.route.params;

    const leftElement = (
      <Pressable onPress={()=>props.navigation.goBack()}>
          <Icons.ChevronLeftIcon color={'#ffffff'} />
      </Pressable>
    );

    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler({
      onScroll: (event) => {
          scrollY.value = event.contentOffset.y;
      },
    });

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
            <MovieBannerInfo {...data} />
            <MovieIMDBRatings {...data} onFavoritePress={() => {}} />
            <MovieSypnosis Plot={data.Plot} />
            <MovieCredits {...data} />
            <MovieRatings Ratings={data.Ratings} />
      </Animated.ScrollView>
    )
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
    alignItems:'center'
  }
});
