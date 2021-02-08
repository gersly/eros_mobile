import React from 'react'
import { View, Text } from 'react-native'
import QuestionCard from '../cards/QuestionCard'

import {questions} from '../../api/dummyquestions'

export default function PostListContainer({...props}) {
    console.log("props in", props)
    return (
        <View>
            {questions.map(question =>
                <QuestionCard question={question} key={question.id} />
                )}
        </View>
    )
}
