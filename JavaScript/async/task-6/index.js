const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/albums'
const list = document.querySelector('.data-container')
const loading = document.querySelector('#loading')

const createList = (el) => {
    const createElementLi = document.createElement('li')
    createElementLi.innerHTML = el
    list.append(createElementLi)
    return createElementLi
}

const renderAlbums = async () => {
    try {
        const getPhotos = await fetch(PHOTOS_URL)
        if(!getPhotos.ok) {
            throw new Error('Произошла ошибка в получении данных об альбомах...')
        }
        const result = await getPhotos.json()
        result.forEach(el => {
            createList(el.title)
        })
    } catch (e) {
        list.innerHTML = e
        list.style.color = 'red'
    } finally {
        loading.style.display = 'none'
    }
}

renderAlbums()