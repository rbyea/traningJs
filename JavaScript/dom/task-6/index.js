const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' },
    { value: 5, text: 'CSS' },
    { value: 5, text: 'CSS' }
];

const container = document.querySelector('#container')

const select = (options) => {
    const createWrapperSelect = document.createElement('div')
    createWrapperSelect.className = 'select-dropdown select-dropdown--123'

    const createButtonSelect = document.createElement('button')
    createButtonSelect.className = 'select-dropdown__button select-dropdown__button--123'

    const createSpanSelect = document.createElement('span')
    createSpanSelect.className = 'select-dropdown__text select-dropdown__text--123'
    createSpanSelect.innerHTML = 'Выберите элемент'

    const createUlSelect = document.createElement('ul')
    createUlSelect.className = 'select-dropdown__list select-dropdown__list--123'

    container.append(createWrapperSelect)
    createWrapperSelect.append(createButtonSelect)
    createButtonSelect.append(createSpanSelect)

    createWrapperSelect.append(createUlSelect)

    const createLiSelect = document.createElement('li')
    // options.map((el) => {
    //     createLiSelect.classList.add('select-dropdown__list-item')
    //     createLiSelect.setAttribute('data-value', `${el.value}`)
    //     createLiSelect.innerHTML = el.text
    //
    //     return
    // })
}

select(options)

options.forEach(list => {
    console.log(list)
})

// const customSelect = new CustomSelect('123', options);
// const mainContainer = document.querySelector('#container');
// customSelect.render(mainContainer)