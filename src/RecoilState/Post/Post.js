import {atom} from 'recoil'

export const Post = atom({
    key : "Post" ,
    default :  []
})

export const Comment = atom({
    key : "Comment" ,
    default : [],
})