import React, {useEffect, useState} from 'react'
import { View, Text,Alert, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import {theme_style} from '../styles/theme'

import {useNavigation} from '@react-navigation/native'
import {createComment} from '../api/comments'

export default function CreateComment({...props}){
    const [comment, setComment] = useState('')
    const {postId, userUuid} = props.route.params
    const navigation = useNavigation()

    const handleSubmit = () => {
       if(comment.length > 1){
           createComment({postId: postId, userId: userUuid, content: comment})
           .then(res => {
            if(res.status === 201){
                setComment(''),
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
            <View style={styles.descriptionContainer}>
                <Text style={styles.inputLabel}>Create a comment for this post</Text>
                <TextInput
                autoCorrect={false}
                value={comment}
                onChangeText={(text) => setComment(text)}
                maxLength={250}
                multiline={true}
                style={styles.descriptionField}/>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
            activeOpacity={.7}
            onPress={() => handleSubmit()}
            style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Comment</Text>
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