import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from '../screens/Feed';
import MainTab from './MainTab'
import CreateQuestion from '../screens/CreateQuestion';

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
       <Stack.Screen
        name="Create Question"
        component={CreateQuestion}
        options={{
          title: 'Create Question',
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