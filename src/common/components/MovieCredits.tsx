import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type MovieCreditsProps = {
  Director: string;
  Writer: string;
  Actors: string;
};

export default function MovieCredits(props: MovieCreditsProps) {
  const { Director, Writer, Actors } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Credits</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Director:</Text>
        <Text style={styles.value}>{Director}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Writer:</Text>
        <Text style={styles.value}>{Writer}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Actors:</Text>
        <Text style={styles.value}>{Actors}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#2C2F38',
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
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    color: '#EDF0FF',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '600',
    width: 80,
  },
  value: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Poppins',
    flex: 1,
  },
});
