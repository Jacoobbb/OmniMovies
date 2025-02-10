import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import Header from "../common/components/Header";
import Listing, { LISTING_MODE } from "../common/components/Listing";
import { useSharedValue } from "react-native-reanimated";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getMoviesLoading, getTotalResults } from "../store/movies/selectors";
import MovieActions from "../store/movies/actions";

export default function MovieListScreen() {
  const route = useRoute();
  const dispatch = useDispatch();
  const scrollY = useSharedValue(0);

  const searchQuery = (route.params as any)?.search || null;
  const search = searchQuery || 'Marvel';
  
  const movies = useSelector(getMovies);
  const loading = useSelector(getMoviesLoading);
  const totalResults = useSelector(getTotalResults);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (search) {
      setPage(1);
      dispatch(MovieActions.fetchMoviesRequest({ search, page: 1 }));
    }
  }, [search, dispatch]);

  useEffect(() => {
    if (page > 1) {
      dispatch(MovieActions.fetchMoviesRequest({ search, page }));
    }
  }, [page, search, dispatch]);

  const loadMore = () => {
    if (!loading && movies.length < totalResults) {
      setPage((prev) => prev + 1);
    }
  };

  const leftElement = <Text style={styles.leftElement}>OmniMovies</Text>;
  const rightElement = <Icons.MagnifyingGlassIcon color={styles.rightElement.color} />;

  return (
    <>
      <Header 
        leftElement={leftElement} 
        rightElement={rightElement} 
        scrollY={scrollY} 
        hasGradient={true} 
      />
      <Listing 
        data={movies}
        mode={LISTING_MODE.NORMAL}
        scrollY={scrollY}
        loading={loading}
        onEndReached={loadMore}
      />
    </>
  );
}

const styles = StyleSheet.create({
  leftElement: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  rightElement: {
    color: "#ffffff",
  },
});
