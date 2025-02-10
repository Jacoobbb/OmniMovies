import React from "react";
import { StyleSheet, Text } from "react-native";
import Header from "../common/components/Header";
import Listing, { LISTING_MODE } from "../common/components/Listing";
import { useSelector } from "react-redux";
import { getFavoriteMovies } from "../store/movies/selectors";

export default function FavoriteScreen() {
  const favoriteMovies = useSelector(getFavoriteMovies); 
  const leftElement = <Text style={styles.leftElement}>Favorites</Text>;

  return (
    <>
      <Header 
        leftElement={leftElement} 
        hasGradient={false} 
      />
      <Listing 
        data={favoriteMovies}
        mode={LISTING_MODE.FAVORITE}
        loading={false}
        onEndReached={()=>{}}
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
