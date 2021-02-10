import axios from 'axios'
import {devUrl} from './constants'

export const getAllPosts = () => {
   return axios
    .get(`${devUrl}/posts`)
}

export const createPost = (data) => {
    return axios.post(`${devUrl}/posts`, data)
}