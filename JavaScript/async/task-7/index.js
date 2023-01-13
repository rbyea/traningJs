import { createPost } from "./createElement.js";

const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
const COMMENTS_UTL = 'https://jsonplaceholder.typicode.com/comments'

const renderPost = async (postId) => {
    try {
        const post = await fetch(`${POST_URL}/${postId}`)
        const comments = await fetch(`${COMMENTS_UTL}?postId=${postId}`)

        if(!post.ok || !comments.ok) {
            throw new Error('Ошибка в вызове поста или комментария!!!')
        }

        const postResponses = await post.json()
        const commentsResponses = await comments.json()

        createPost(postResponses, commentsResponses)
    } catch (e) {
        console.error(e)
    }
}

renderPost(1);