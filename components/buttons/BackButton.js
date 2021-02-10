import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

//icons
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function BackButton() {
    const navigation = useNavigation()

    return (
       <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={22} color="#ffffff" />
          </TouchableOpacity>
    )
}
