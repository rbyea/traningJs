const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos'
const container = document.querySelector('#data-container')
const loading = document.querySelector('#loader')

const getFastestLoadedPhoto = (ids) => {
    loading.hidden = false
    const urlPhoto = ids.map((id) => fetch(`${PHOTOS_URL}/${id}`))
    Promise.race(urlPhoto)
        .then((resp) => {
            return resp.json()
        })
        .then((photo) => {
            container.innerHTML = `
                <li class="photo-item">
                    <img class="photo-item__image" src="${photo.url}">
                  <h3 class="photo-item__title">
                    ${photo.title}
                  </h3>
                </li>`
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            loading.hidden = true
        })
}

getFastestLoadedPhoto([60, 12, 55]);