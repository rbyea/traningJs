const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;
const createNewPost = async () => {
    try {
        isLoading = true;
        const posts = await fetch(POSTS_URL, {method: "POST"})
        if(!posts.ok) {
            throw new Error('Ошибка в url!')
        }
        const result = await posts.json()
        console.log(result)
    } catch (e) {
        console.error(e)
    } finally {
        isLoading = false;
    }
};

createNewPost()