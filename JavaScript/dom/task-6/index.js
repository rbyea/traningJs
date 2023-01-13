const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' },
    { value: 5, text: 'CSS' }
];

const root = document.querySelector('#container')

const selectContainer = document.createElement('div')
selectContainer.className = 'select-dropdown select-dropdown--123'
root.append(selectContainer)

const selectButton = document.createElement('button')
selectButton.className = 'select-dropdown__button select-dropdown__button--123'
selectContainer.append(selectButton)

const selectSpan = document.createElement('span')
selectSpan.className = 'select-dropdown__text select-dropdown__text--123'
selectSpan.innerHTML = 'Выберите элемент'
selectButton.append(selectSpan)

const selectUl = document.createElement('ul')
selectUl.className = 'select-dropdown__list select-dropdown__list--123'
selectContainer.append(selectUl)

// const createOption = (value, text) => {
//
//     const selectLi = document.createElement('li')
//     selectLi.classList.add('select-dropdown__list-item')
//     selectLi.setAttribute('data-value', value)
//     selectLi.innerHTML = text
//
//     const select = selectUl.append(selectLi)
//
//     return select
// }
//
// options.forEach(el => {
//     const element = createOption(el.value, el.text)
//     return element
// })

class CustomSelect {
    constructor(id, options) {
        this.id = id
        this.options = options
    }

    render() {
        const createOption = (value, text) => {

            const selectLi = document.createElement('li')
            selectLi.classList.add('select-dropdown__list-item')
            selectLi.setAttribute('data-value', value)
            selectLi.innerHTML = text

            const select = selectUl.append(selectLi)

            return select
        }

        options.forEach(el => {
            const element = createOption(el.value, el.text)
            return element
        })
    }
}

selectButton.addEventListener('click', () => {
    selectUl.classList.toggle('active')
})

selectUl.addEventListener('click', (e) => {
    const {target} = e
    const selectListItem = target.className.includes('select-dropdown__list-item')
    console.log(selectListItem)
})


const customSelect = new CustomSelect('123', options);
customSelect.render(root)

console.log(customSelect.id)