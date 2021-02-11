import React, {useEffect, useState} from 'react'
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import {theme_style} from '../styles/theme'
import {useNavigation} from '@react-navigation/native'
import {createPost} from '../api/posts'

export default function CreateQuestion() {
    const [question, setQuestion] = useState('')
    const [description, setDescription] = useState('')
    const navigation = useNavigation()

    const handleSubmit = () => {
        if( question.length > 4 ){
            createPost({
                userUuid: 'fa6d83bc-7376-4e4c-a9c3-d961997a5e65',
                content: question,
                description: description,
                categoryId: 1
            })
            .then(res => {
                if(res.status === 201){
                    setDescription(''),
                    setQuestion(''),
                    Alert.alert(res.data.message)
                    setTimeout(() => {
                        navigation.goBack()
                    }, 500);
                }else{
                    Alert.alert(res.data.message)
                }
            })
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Your Question (required)</Text>
                <TextInput
                value={question}
                autoCorrect={false}
                onChangeText={(text) => setQuestion(text)}
                maxLength={80}
                multiline={true}
                style={styles.inputField}/>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.inputLabel}>Explain your question (optional)</Text>
                <TextInput
                autoCorrect={false}
                value={description}
                onChangeText={(text) => setDescription(text)}
                maxLength={750}
                multiline={true}
                style={styles.descriptionField}/>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
            activeOpacity={.7}
            onPress={() => handleSubmit()}
            style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 0,
        flex: 1,
        backgroundColor: '#ebebeb',
    },
    inputContainer:{
        backgroundColor: '#fff',
        marginBottom: 4,
        height: 130,
        padding: 10
    },
    inputLabel:{
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: 6,
        color: '#333'
    },
    inputField:{
        height: 70,
        borderWidth: 1, 
        borderColor: 'lightgrey', 
        borderRadius: 3, 
        paddingVertical: 10,
        paddingHorizontal: 4,
        fontSize: 16
    },
    descriptionContainer:{
        backgroundColor: '#fff',
        marginTop: 6,
        height: 200,
        padding: 10
    },
    descriptionField:{
        height: 140,
        borderWidth: 1, 
        borderColor: 'lightgrey', 
        borderRadius: 3, 
        paddingVertical: 10,
        paddingHorizontal: 4,
        fontSize: 16
    },
    buttonContainer:{
        backgroundColor: 'transparent', 
        flex: 1, 
        justifyContent: 'flex-end', 
        paddingVertical: 60, 
        paddingHorizontal: 12
    },
    submitButton: {
        backgroundColor: theme_style.droidSafeArea.backgroundColor, 
        height: 50, 
        borderRadius:8, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    submitButtonText:{
        color: '#fff', 
        fontSize: 18, 
        fontWeight: 'bold'
    }
})