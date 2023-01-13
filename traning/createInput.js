
export const createInput = (text) => {
    const body = document.querySelector('body')
    const container = document.createElement('div')
    container.className = 'container-search'
    const input = document.createElement('input')
    input.type = 'number'
    input.placeholder = 'Введите номер пользователя'
    const button = document.createElement('button')
    button.className = 'button'
    button.innerHTML = 'Вывести'
    button.type = 'sumbmit'

    const form = document.createElement('form')

    const spanError = document.createElement('span')
    spanError.className = 'input-error'
    spanError.style.display = 'none'
    spanError.style.color = 'red'
    spanError.innerHTML = 'Поле не должно быть пустым!'

    body.append(container)
    body.append(form)
    form.append(input)
    form.append(button)
    form.append(spanError)

    return container
}