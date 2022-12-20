const USERS_LIST = 'https://jsonplaceholder.typicode.com/users'

const container = document.querySelector('#data-container')
const loader = document.querySelector('#loader')
loader.hidden = false

const createList = (name) => {
    const listLi = document.createElement('li')
    const listLink = document.createElement('a')
    listLink.href = '#'
    listLink.innerHTML = name

    listLi.append(listLink)
    container.append(listLi)
    return listLi
}

fetch(USERS_LIST)
    .then((resp) => {
        if(!resp.ok) {
            throw new Error('Ошибка запроса')
        }
        return resp.json()
    })
    .then((users) => {
        users.forEach((el) => {
            createList(el.username)
        })
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        loader.hidden = true
    })