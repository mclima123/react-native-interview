import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import CoursesScreen from '../screens/CoursesScreen';
import CourseDetailsScreen from '../screens/CourseDetailsScreen';
import Colors from '../constants/Colors';

const defaultNavigationOptions = {};

const Stack = createStackNavigator();

const CoursesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultNavigationOptions,
        headerTransparent: true,
        headerTintColor: Colors.primaryText,
      }}>
      <Stack.Screen
        name="Courses"
        component={CoursesScreen}
        options={{title: ''}}
      />
      <Stack.Screen
        name="CourseDetails"
        component={CourseDetailsScreen}
        options={{title: 'e-learn'}}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <CoursesStackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
