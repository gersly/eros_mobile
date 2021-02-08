import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function TabBarHeader() {
    return (
        <View style={{backgroundColor: '#ff6961', height: 40, flexDirection: 'row'}}>
        <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
        <Text>Left</Text>
        </View>
    </View>
    )
}
