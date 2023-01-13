// https://api.unsplash.com/search/photos?page=1&query=krasnodar&client_id=rWujnf1z02k4UKQzYZqxLD-lBpn5MHof6X8td3U2O-w
const PHOTOS_URL = 'https://api.unsplash.com/search/photos?page=1&query='
const KEY_URL = '&client_id=rWujnf1z02k4UKQzYZqxLD-lBpn5MHof6X8td3U2O-w'

const container = document.createElement('div')
container.className = 'container'
document.querySelector('body').append(container)

const input = document.createElement('input')
input.placeholder = 'Введите номер пользователя'

const button2 = document.createElement('button')
button2.className = 'delete'
button2.innerHTML = 'Удалить'
button2.type = 'submit'

const button = document.createElement('button')
button.className = 'button'
button.innerHTML = 'Вывести'

const form = document.createElement('form')

container.append(form)
form.append(input)
form.append(button)
form.append(button2)
const containerImg = document.createElement('div')
containerImg.className = 'container-img'
let arrPhoto = []


const getPhotos = async (search) => {
    arrPhoto = []
    try {
        const photos = await fetch(`${PHOTOS_URL}${search}${KEY_URL}`)
        const photosResp = await photos.json()
        const photoResult = photosResp.results
        const img = document.createElement('img')

        if(photos.ok) {
            container.append(containerImg)
        }

        photoResult.forEach(el => {
            for (const elKey in el.urls) {
                if(elKey === 'regular') {
                    arrPhoto.push(el.urls[elKey])
                }
            }
        })

        const renderPhoto = arrPhoto.map(el => {
             return (
                 `<img src="${el}" alt=""/>`
             )
        })

        containerImg.innerHTML = renderPhoto.join('')
    } catch (e) {
        console.error(e)
    }
}

form.addEventListener('click', (e) => {
    e.preventDefault()
    const { target } = e

    if(target.className.includes('button')) {
        console.log('button')
        getPhotos(input.value)
    }
    if(target.className.includes('delete')) {
        console.log('button-delete')
        if(document.querySelector('.container-img')) {
            console.log('удалило')
            document.querySelector('.container-img').remove()
        }
    }
    console.log(target)
})
