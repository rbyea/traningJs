export const createPost = (post, comments) => {
    const containerPosts = document.querySelector('.container-posts')

    const divPost = document.createElement('div')
    divPost.className = 'post'
    divPost.id = 'post'

    const h1Post = document.createElement('h1')
    h1Post.className = 'post__title'
    h1Post.innerHTML = post.title

    const pPost = document.createElement('p')
    pPost.className = 'post__text'
    pPost.innerHTML = post.body

    const bComments = document.createElement('b')
    bComments.className = 'post__comments-text'
    bComments.innerHTML = 'Комментарии'


    const divCom = document.createElement('div')
    divCom.className = 'post__comments'



    containerPosts.append(divPost)
    divPost.append(h1Post)
    divPost.append(pPost)
    divPost.append(bComments)
    divPost.append(divCom)

    comments.forEach(el => {
        const postComment = `
            <div class="post-comment">
                <span class="post-comment__author">${el.email}</span>
                <span class="post-comment__text">
                    ${el.body}
                </span>
            </div>`

        divCom.innerHTML += postComment
    })
}