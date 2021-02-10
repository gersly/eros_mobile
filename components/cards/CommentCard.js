import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
export default function CommentCard({...props}) {
    const {comment} = props
    return (
        <View style={styles.container}>
        
        <Text style={styles.commentTextStyle}>{comment.content}</Text>
        <Text style={styles.createdAtText}>{moment(comment.createdAt).fromNow()}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        padding: 10,
        minHeight: 'auto',
        width: '100%',
        margin: 4, 
    },
    commentTextStyle: {
        fontSize: 14, 
        fontWeight: 'normal',
        color: '#000'
    },
    createdAtText: {
        color: '#333',
        fontSize: 10,
        paddingVertical: 4
    }
})