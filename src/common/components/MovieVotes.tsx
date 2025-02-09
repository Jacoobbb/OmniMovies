import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Icons from "react-native-heroicons/solid"

interface MovieIMDBRatingsProps {
  imdbRating: string;
  imdbVotes: string;
  onFavoritePress: () => void;
};

export default function MovieIMDBRatings(props: MovieIMDBRatingsProps) {
  const { imdbVotes, onFavoritePress } = props;

  return (
    <View style={styles.container}>

      <View style={styles.column}>
        <Text style={styles.label}>IMDb Votes</Text>
        <Text style={styles.value}>{imdbVotes}</Text>
      </View>

      <View style={styles.column}>
        <TouchableOpacity style={styles.favoriteButton} onPress={onFavoritePress}>
          <Icons.BookmarkIcon size={24} color="#ffffff" />
          <Text style={styles.favoriteText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    color: '#EDF0FF',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '600',
    marginBottom: 5,
  },
  value: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  marginRight: {
    marginRight: 8
  },
  favoriteButton: {
    marginTop: -4,
    alignItems: 'center',
    backgroundColor: '#e75480',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 12
  },
  favoriteText: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
});
