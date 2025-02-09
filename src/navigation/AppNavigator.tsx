import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../typings/navigator';
import { StyleSheet } from 'react-native';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import MovieSearchScreen from '../screens/MovieSearchScreen';
import MovieListScreen from '../screens/MovieListScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator 
        screenOptions={{
          headerShown: false, 
          contentStyle: styles.container,
        }}>
      <Stack.Screen name="Main" component={MovieListScreen} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
      <Stack.Screen name="MovieSearch" component={MovieSearchScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000'
  }
})