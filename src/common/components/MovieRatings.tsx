import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Icons from 'react-native-heroicons/solid';

interface Rating {
  Source: string;
  Value: string;
}

interface MovieRatingsProps {
  Ratings: Rating[];
}

export default function MovieRatings(props: MovieRatingsProps) {
    const { Ratings } = props;
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Ratings</Text>
        {Ratings.map((rating, index) => (
            <View style={styles.column} key={index}>
                <Text style={styles.label}>{rating.Source}</Text>
                <View style={styles.row}>
                    <Icons.StarIcon size={24} color="#ffd27d" style={styles.icon} />
                    <Text style={styles.value}>{rating.Value}</Text>
                </View>
            </View>
        ))}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    gap: 20
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  column: {
    flex: 1,
  },
  label: {
    color: '#EDF0FF',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '600',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 8,
  },
  value: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
});
