const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;
const createNewPost = async () => {
    try {
        isLoading = true;
        const posts = await fetch(POSTS_URL, {method: "POST"})
        if(!posts.ok) {
            throw new Error('Ошибка в url!')
        }
        return await posts.json()
    } catch (e) {
        console.error(e)
    } finally {
        isLoading = false;
    }
};

createNewPost().then(result => {
    console.log(result)
});