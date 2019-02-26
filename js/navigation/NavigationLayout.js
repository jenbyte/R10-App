import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import AboutScreen from '../screens/About';
import MapScreen from '../screens/Maps';
import FavesScreen from '../screens/Faves';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';

const ScheduleStack = createStackNavigator({
  Schedule: ScheduleScreen,
  Session: SessionScreen
});
const MapStack = createStackNavigator({
  Map: MapScreen
});
const FavesStack = createStackNavigator({
  Faves: FavesScreen,
  Session: SessionScreen
});
const AboutStack = createStackNavigator({
  About: AboutScreen
});

// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator({
  Schedule: ScheduleStack,
  Map: MapStack,
  Faves: FavesStack,
  About: AboutStack
});
