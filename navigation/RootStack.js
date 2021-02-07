import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from '../screens/Feed';
import MainTab from './MainTab'

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
    <Stack.Screen
        name="Feed"
        component={MainTab}
        options={{
          headerShown: false,
          title: 'Eros',
        }}
      />
      {/*  <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'My profile',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          gestureEnabled: false,
        }}
    /> */}
    </Stack.Navigator>
  );
}