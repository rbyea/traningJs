const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

const container = document.querySelector('#data-container')
const loading = document.querySelector('#loader')
const createList = (name) => {
    const listLi = document.createElement('li')
    const listLink = document.createElement('a')
    listLink.href = '#'
    listLink.innerHTML = name

    listLi.append(listLink)
    container.append(listLi)
    return listLi
}

const getUsersByIds = (ids) => {
    loading.hidden = false

    const request = ids.map((id) => fetch(`${USERS_URL}/${id}`))
    Promise.all(request)
        .then((resp) => {
            const dateResp = resp.map(resp => resp.json())
            return Promise.all(dateResp)
        })
        .then((result) => {
            result.forEach(el => {
                createList(el.name)
            })
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            loading.hidden = true
        })
}

getUsersByIds([5, 6, 2, 1]);