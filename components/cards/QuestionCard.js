import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import { theme_style } from '../../styles/theme';

export default function QuestionCard({question}) {
    
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
                <View style={{flex: 1}}>
                <Text style={styles.NameUserStyle}>Gerson Lynch</Text>
                <Text style={styles.QuestionCategory}>Sexual Health</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Entypo name="dots-three-horizontal" size={24} color="black" />
                </View>
            </View>
            <View style={styles.cardContent}>
                <Text 
                numberOfLines={2}
                style={{fontSize: 16, color: '#333', fontWeight: 'bold'}}>
                {question.content}
                </Text>
                <Text 
                numberOfLines={4}
                style={{color: 'grey', fontSize: 14}}>
                Mollit fugiat ipsum sit non. Quis voluptate officia ex Lorem ipsum irure. Sint excepteur laborum officia velit mollit qui consectetur ullamco mollit reprehenderit incididunt proident dolore. Tempor voluptate esse incididunt ea minim adipisicing esse non. In aliqua commodo Lorem consequat laboris occaecat incididunt ad. Id do dolore ex consequat quis consequat et.
                </Text>
            </View>
            <View style={styles.cardFooter}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={{fontWeight: 'bold', color: '#333'}}> 3k upvotes</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                <TouchableOpacity 
                style={styles.commentButton}>
                <Text style={styles.commentButtonText}>1.5k answers</Text>
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
        height: 240,
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
        flex: 3,
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