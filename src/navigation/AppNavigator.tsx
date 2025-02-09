import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../typings/navigator';
import { StyleSheet } from 'react-native';
import TabNavigator from './TabNavigator';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import MovieSearchScreen from '../screens/MovieSearchScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, contentStyle: styles.background}}>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        <Stack.Screen name="MovieSearch" component={MovieSearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000'
  }
})