import React from 'react'
import { View, Text, TextInput, SafeAreaView, StyleSheet} from 'react-native'
import {theme_style} from '../styles/theme'

export default function Feed() {
    return (
        <SafeAreaView style={theme_style.droidSafeArea}>
        <View style={styles.container}>
        <View style={{backgroundColor: '#ff6961', height: 40, flexDirection: 'row'}}>
            <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
            <Text>Left</Text>
            </View>
        </View>
        <Text>feded</Text>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        </View>
          
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 10, 
        backgroundColor: '#fff',
        flex: 1
    }
})