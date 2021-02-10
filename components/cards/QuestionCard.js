import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import { theme_style } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';


export default function QuestionCard({question}) {
    const navigation = useNavigation()
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
                <View style={{flex: 1}}>
                <Text style={styles.NameUserStyle}>{question.user.name}</Text>
                </View>
                <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
                <Entypo name="dots-three-horizontal" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
            onPress={() => navigation.navigate("Post", {question: question})}
            style={styles.cardContent}>
                <Text 
                numberOfLines={2}
                style={{fontSize: 16, color: '#333', fontWeight: 'bold', paddingVertical: 2}}>
                {question.content}
                </Text>
                <Text 
                numberOfLines={4}
                style={{color: 'grey', fontSize: 14}}>
                {question.description}
                </Text>
            </TouchableOpacity>
            <View style={styles.cardFooter}>
                {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={{fontWeight: 'bold', color: '#333'}}> 3k upvotes</Text>
                </View> */}
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                <TouchableOpacity 
                onPress={() => navigation.navigate("Post", {question: question})}
                style={styles.commentButton}>
                <Text style={styles.commentButtonText}>{question.comments.length} Answer(s)</Text>
                </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        padding: 14,
        borderRadius: 3,
        height: 'auto',
        marginHorizontal: 0,
        marginVertical: 2,
        backgroundColor: '#fff',
    },
    cardHeader: {
        flex:1,
        flexDirection: 'row',
        marginVertical: 10
    },
    cardContent:{
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginVertical: 10
    },
    cardFooter:{
        marginTop: 10,
        flex: 1,
        // backgroundColor: 'blue',
        flexDirection: 'row',
    },
    NameUserStyle:{
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    QuestionCategory: {
        color: 'grey',
        fontSize: 12,
        fontWeight: 'bold'
    },
    commentButton: {
        borderRadius: 6,
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: theme_style.droidSafeArea.backgroundColor,
        borderWidth: 2,
        borderStyle: "solid",
        width: 'auto'
    },
    commentButtonText: {
        fontWeight: 'bold',
        color: theme_style.droidSafeArea.backgroundColor
    }
})