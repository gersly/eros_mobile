import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { questions } from '../api/dummyquestions'
import CommentListContainer from '../components/posts/CommentListContainer'
import moment from 'moment'

export default function Post({...props}) {
    const [collapseDesription, setCollapseDescription] = useState(false)
    const [collapseQuestion, setCollapseQuestion] = useState(false)
    const {question} = props.route.params

    return (
        <View style={styles.container}>
            <View style={styles.postCardContainer}>
                <View style={{height: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: "flex-start"}}>
                        <Text style={{paddingVertical: 4, fontWeight: 'bold', color: '#333', fontSize: 12}}>{question.user.name}</Text>
                    </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: "flex-end"}}>
                    <Text style={{fontSize: 12, fontWeight: 'bold', color: '#333'}}>{moment(question.createdAt).fromNow()}</Text>
                </View>
            </View>
                <Text numberOfLines={3} style={styles.postCardQuestion}>{question.content}</Text>
                    <Text 
                    numberOfLines={collapseDesription? 10 : 3} 
                    style={styles.postCardDescription}>
                    {question.description}
                    </Text>
                    <TouchableOpacity
                    onPress={() => setCollapseDescription(!collapseDesription)}
                    >
                        <Text>Read More</Text>
                    </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
            <CommentListContainer postId={question.uuid}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ededed',
        flex: 1
    },
    postCardContainer:{
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10
    },
    postCardQuestion:{
        fontWeight: 'bold',
        fontSize: 20,
        width: '100%',
        color: '#333',
    },
    postCardDescription:{
        fontSize: 14,
        paddingVertical: 6,
        color: 'grey'
    }
})