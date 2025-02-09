import React from 'react';
import { Dimensions, Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Movie } from '../../typings/movie';
import { AnimatedAutoHeightImage } from './AutoHeightImage';

interface MovieCardProps extends Movie {
    isFavorite: boolean
}

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 2 - 50;

export default function MovieCard(props: MovieCardProps) {
const go = useNavigation();
const { imdbID, Poster, Title, isFavorite } = props;

  return (
    <Pressable onPress={
        () => go.navigate('MovieDetails', { 
            imdbID, 
            Poster, 
            Title, 
            isFavorite 
        })} 
        style={styles.imageContainer}>
        <AnimatedAutoHeightImage
            sharedTransitionTag={`movie_card_${imdbID}`}
            width={itemWidth}
            style={styles.image}
            source={{ uri: Poster }}
        />
        <Text numberOfLines={1} style={styles.titleText}>
            {Title}
        </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    margin: 24,
  },
  image: {
    borderRadius: 10,
    resizeMode: 'cover',
  },
  titleText: {
    backgroundColor: '#00000099',
    color: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});
