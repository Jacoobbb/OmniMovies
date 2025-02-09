import { ElementType, useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../typings/navigator';
import MovieListScreen from '../screens/MovieListScreen';
import FavoriteScreen from '../screens/FavoriteMoviesScreen';
import { StyleSheet, View } from 'react-native';
import * as Icons from 'react-native-heroicons/outline';

interface TabIconProps {
    color: string; 
    size: number; 
    focused: boolean;
}

const Tab = createBottomTabNavigator<TabStackParamList>();

export default function TabNavigator() {
    
  const renderTabIcon = useCallback(
    (IconComponent: ElementType) =>
      ({ color, size, focused }: TabIconProps) => (
        <View style={styles.iconWrapper}>
          <IconComponent size={size} color={color} />
          {focused && <View style={[styles.activeIndicator, { backgroundColor: color }]} />}
        </View>
      ),
    []
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        lazy: true,
        tabBarStyle: styles.tabBar,
        sceneStyle: styles.tabScene,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#52555C',
      }}
    >
      <Tab.Screen
        name="MovieList"
        component={MovieListScreen}
        options={{
          tabBarIcon: renderTabIcon(Icons.FilmIcon),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          tabBarIcon: renderTabIcon(Icons.BookmarkSquareIcon),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#13151D',
    borderTopWidth: 0,
    paddingTop: 15,
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabScene: {
    backgroundColor: '#000000'
},
  iconWrapper: {
    alignItems: 'center',
  },
  activeIndicator: {
    width: 5,
    height: 5,
    borderRadius: 50,
    marginTop: 5,
  },
});
