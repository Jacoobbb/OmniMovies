import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MovieSypnosisProps {
    Plot: string;
};

export default function MovieSypnosis(props: MovieSypnosisProps) {
  const { Plot } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sypnosis</Text>
      <Text style={styles.plot}>{Plot}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  plot: {
    color: '#EDF0FF',
    fontSize: 14,
    fontFamily: 'Poppins',
    lineHeight: 20,
  },
});
