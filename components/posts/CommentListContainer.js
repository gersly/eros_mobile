import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import CommentCard from '../cards/CommentCard'
import {useNavigation} from '@react-navigation/native'
import {getAllCommentsByPostId} from '../../api/comments'
import {theme_style} from '../../styles/theme'


export default function CommentListContainer({...props}) {
    const [comments, setComments] = useState({count: 0, rows: []});
    const [isLoading, setIsLoading] = useState(true);
   const navigation = useNavigation()
    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getAllCommentsByPostId(props.postId)
            .then(res => setComments({ count: res.data.count, rows: res.data.rows}))
            .then(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            })
            .catch(error => console.warn(error))
        })
        return unsubscribe
      }, [navigation]);

      if(isLoading){
          return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={"small"} />
          </View>
      )}else{
    return (
        <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#fff'}}>
            <View style={{height: 38, flexDirection: 'row', backgroundColor: '#ededed'}}>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                    <Text style={{paddingHorizontal: 10}}>{comments.count} Answer(s)</Text>
                </View>
                <View style={{flex: 2, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                
                <TouchableOpacity 
                style={styles.commentButton} 
                onPress={() => navigation.navigate("Create comment", {postId: props.postId, userUuid: 'fa6d83bc-7376-4e4c-a9c3-d961997a5e65'})}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Comment</Text>
                </TouchableOpacity>
                </View>
            </View>
            <ScrollView  style={{flex: 1, flexDirection: 'column', backgroundColor: 'rgba(0,0,0,.04)' }}>
                {comments.rows.map(comment => <CommentCard key={comment.uuid} comment={comment} />)}
            </ScrollView>
        </View>
    )
      }
}

const styles = StyleSheet.create({
        commentButton: {
            borderRadius: 6,
            padding: 6,
            marginHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme_style.droidSafeArea.backgroundColor,
           
            borderStyle: "solid",
            width: 'auto'
        }
})