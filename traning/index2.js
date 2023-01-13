import {createInput} from "./createInput.js";
const loader = document.querySelector('#loader')
const USERS_LINK = 'https://jsonplaceholder.typicode.com/users'
const PHOTOS_LINK = 'https://rickandmortyapi.com/api/character'

loader.style.display = 'none'
createInput()

const form = document.querySelector('form')
const input = document.querySelector('input')
const error = document.querySelector('.input-error')

let inputNumber = ''

form.addEventListener('click', (e) => {
    e.preventDefault()
    const {target} = e

    if(target.className.includes('button')) {

        if(input.value.length === 0) {
            error.style.display = 'block'
            error.innerHTML = 'Номер может быть пустым!'
        } else if (input.value <= 0 || input.value > 10 ) {
            error.style.display = 'block'
            error.innerHTML = 'Номер может быть от 1 до 10'
        } else {
            error.style.display = 'none'
        }

        if(input.value.length > 0 && +input.value !== 0 && +input.value <=10) {
            inputNumber = +input.value
            getUsers(inputNumber)
        }
        input.value = ''
    }
})

const getUsers = async (number) => {
    const block = document.querySelector('.block')
    const blockTitle = document.querySelector('.block__title')
    const blockImage = document.querySelector('.block__image')
    try {
        loader.style.display = 'block'
        const users = await fetch(`${USERS_LINK}/${number}`)
        const userResp = await  users.json()

        const photo = await fetch(`${PHOTOS_LINK}/${number}`)
        const photoResp = await photo.json()

        if(users.ok && photo.ok) {
            block.style.display = 'block'
            blockTitle.innerHTML = userResp.name
            blockImage.src = photoResp.image
        } else {
            throw new Error('Ошибка в запросе!')
        }

    } catch (e) {
        console.error(e)

        block.style.display = 'block'
        blockImage.src = 'https://http.cat/400'
        blockTitle.style.color = 'red'
        blockTitle.innerHTML = e

    } finally {
        loader.style.display = 'none'
    }
}
