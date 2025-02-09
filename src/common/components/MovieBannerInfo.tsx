import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { toSentenceCase } from '../utils';
import { AnimatedAutoHeightImage } from './AutoHeightImage';

interface MovieBannerInfoProps {
    Poster: string;
    Title: string;
    Genre: string;
    Rated: string;
    Runtime: string;
    Type: string;
    imdbID: string
}

export default function MovieBannerInfo(props: MovieBannerInfoProps) {
    const { Poster, Title, Genre, Rated, Runtime, Type, imdbID } = props;
    const genres = Genre.split(', ');

    return (
        <View style={styles.container}>
            <AnimatedAutoHeightImage
                sharedTransitionTag={`movie_card_${imdbID}`}
                width={120}
                source={{ uri: Poster }}
                style={styles.poster}
            />
            <View style={styles.infoContainer}>
                <Text numberOfLines={2} style={styles.title}>
                    {Title}
                </Text>
                <Text style={styles.subtitle}>
                    {toSentenceCase(Type)} • {Rated} • {Runtime}
                </Text>
                <View style={styles.genreContainer}>
                {genres.map((genre, index) => (
                    <View key={index} style={styles.genreBadge}>
                        <Text style={styles.genreText}>{genre}</Text>
                    </View>
                ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  poster: {
    marginTop: -100,
    marginLeft: 20,
    borderRadius: 10,
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 15,
    marginTop: -50,
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 15,
  },
  subtitle: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontWeight: '500',
    marginTop: 5,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  genreBadge: {
    backgroundColor: '#303549',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  genreText: {
    color: '#EDF0FF',
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
  },
});
