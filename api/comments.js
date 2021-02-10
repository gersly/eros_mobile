import axios from 'axios'
import {devUrl} from './constants'

export const getAllCommentsByPostId = (postId) => {
   return axios
    .get(`${devUrl}/comments/${postId}`)
}

export const createComment = (data) => {
    console.info("data in action", data)
    return axios.post(`${devUrl}/comments/`, data)
}