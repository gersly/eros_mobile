import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostListContainer from '../components/posts/PostListContainer';

//styling
import {theme_style} from '../styles/theme'

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
  return (
    <Tab.Navigator
    tabBarOptions={{
        pressColor: '#000',
        pressOpacity: 1,
        activeTintColor: 'white',
        // inactiveTintColor: '#333',
       
        labelStyle:{
            fontWeight: 'bold',
            fontSize: 18
        },
        tabStyle: {
            backgroundColor: theme_style.droidSafeArea.backgroundColor,
            height: '100%'
        }
    }}
    >
      <Tab.Screen name="Feed" component={PostListContainer} />
    </Tab.Navigator>
  );
}