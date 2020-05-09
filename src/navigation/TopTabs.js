import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ThemesScreen from '../screens/ThemesScreen';

const Tab = createMaterialTopTabNavigator();

export default TopTabs = () => (
  <Tab.Navigator
    initialRouteName="Settings"
    tabBarOptions={{
      activeTintColor: '#e91e63',
      labelStyle: { fontSize: 12 },
      style: { backgroundColor: 'powderblue', marginTop: '15%' },
    }}
  >
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ tabBarLabel: 'Settings' }}
    />
    <Tab.Screen
      name="Themes"
      component={ThemesScreen}
      options={{ tabBarLabel: 'themes' }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ tabBarLabel: 'Profile' }}
    />
  </Tab.Navigator>
)