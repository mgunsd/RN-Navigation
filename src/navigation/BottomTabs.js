import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import OneStack from './OneStack';
import TopTabs from './TopTabs';
import TwoScreen from '../screens/TwoScreen';
import ThreeScreen from '../screens/ThreeScreen';


const Tabs = createMaterialBottomTabNavigator();
export default BottomTabs = () => (
  <Tabs.Navigator
    initialRouteName='One'
    activeColor='white' >
    <Tabs.Screen
      name='One'
      component={OneStack}
      options={{
        tabBarLabel: 'One',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="numeric-1-box-outline" size={24} color={color} />
        ),
      }} />
    <Tabs.Screen
      name='Two'
      component={TwoScreen}
      options={{
        tabBarLabel: 'Two',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="numeric-2-box" size={24} color={color} />
        ),
      }} />
    <Tabs.Screen
      name='Three'
      component={ThreeScreen}
      options={{
        tabBarLabel: 'Three',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="numeric-3-box" size={24} color={color} />
        ),
      }} />
    <Tabs.Screen
      name='Settings'
      component={TopTabs}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="settings-box" size={24} color={color} />
        ),
      }} />
  </Tabs.Navigator>
);
