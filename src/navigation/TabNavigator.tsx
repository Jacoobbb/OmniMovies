import { ElementType, useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabIconProps, TabStackParamList } from '../typings/navigator';
import { StyleSheet, View } from 'react-native';
import * as Icons from 'react-native-heroicons/outline';
import AppNavigator from './AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import FavoritesNavigator from './FavoritesNavigator';

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
    <NavigationContainer>
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
        component={AppNavigator}
        options={{
          tabBarIcon: renderTabIcon(Icons.FilmIcon),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          tabBarIcon: renderTabIcon(Icons.BookmarkSquareIcon),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
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
