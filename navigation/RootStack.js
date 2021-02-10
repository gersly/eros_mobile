import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native'

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//styling
import {theme_style} from '../styles/theme'

//screens
import Feed from '../screens/Feed';
import MainTab from './MainTab'
import CreateQuestion from '../screens/CreateQuestion';
import Post from '../screens/Post';

//icons
import BackButton from '../components/buttons/BackButton'
import CreateComment from '../screens/CreateComment';

const Stack = createStackNavigator()

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
          headerStyle:{
            backgroundColor: theme_style.droidSafeArea.backgroundColor
          },
          headerLeftContainerStyle:{
            width: '25%',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 6
          },
          headerLeft: () => <BackButton />,
          headerBackTitle: "Back",
          title: 'Create Question',
        }}
      />
      <Stack.Screen
      name="Create comment"
      component={CreateComment}
      options={{
        headerStyle:{
          backgroundColor: theme_style.droidSafeArea.backgroundColor
        },
        headerLeftContainerStyle:{
          width: '25%',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 6
        },
        headerLeft: () => <BackButton />,
        headerBackTitle: "Back",
        title: 'Create Comment',
      }}
    />
      <Stack.Screen
        name="Post"
        component={Post}
        options={{
          headerStyle:{
            backgroundColor: theme_style.droidSafeArea.backgroundColor
          },
          headerLeftContainerStyle:{
            width: '25%',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 6
          },
          headerLeft: () => <BackButton />,
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