const CATS_URL = 'https://cataas.com/api/cats'
const TAGS_URL = 'https://cataas.com/api/tags'

const img = document.querySelector('#image')

const getRandomArrayElement = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const catsPhoto = async () => {
    try {
        const tagsResponse = await fetch(`${TAGS_URL}`);
        const tags = await tagsResponse.json();
        const randomTag = getRandomArrayElement(tags);

        const responseCats = await fetch(`${CATS_URL}?tags=${randomTag}`)
        const cats = await responseCats.json()
        const randomCat = getRandomArrayElement(cats);

        return {
            tag: randomTag,
            url: `https://cataas.com/api/cat/${randomCat._id}`
        }
    } catch (e) {
        console.log(e)
    } finally {
        document.querySelector('#loader').style.display = 'none'
    }
}

catsPhoto().then((result) => {
    console.log(result)
    img.src = result.url
})