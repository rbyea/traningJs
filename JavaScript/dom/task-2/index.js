const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];
const tasksList = document.querySelector('.tasks-list')

tasks.forEach((el) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item')
    taskItem.setAttribute('data-task-id', `${el.id}`)
    const taskItemContainer = document.createElement('div')
    taskItemContainer.classList.add('task-item__main-container')
    const taskItemContent = document.createElement('div')
    taskItemContent.classList.add('task-item__main-content')
    const form = document.createElement('form')
    form.classList.add('checkbox-form')
    const input = document.createElement('input')
    input.classList.add('checkbox-form__checkbox')
    input.setAttribute('type', `checkbox`)
    input.setAttribute('id', `${el.id}`)
    input.checked = el.completed
    const label = document.createElement('label')
    label.setAttribute('for', `${el.id}`)
    const  span = document.createElement('span')
    span.classList.add('task-item__text')
    span.innerHTML = `${el.text}`
    const button = document.createElement('button')
    button.classList.add('task-item__delete-button', 'default-button', 'delete-button')
    button.innerHTML = 'Удалить'

    tasksList.append(taskItem)
    taskItem.append(taskItemContainer)
    taskItemContainer.append(taskItemContent)
    taskItemContainer.append(button)
    taskItemContent.append(form)
    form.append(input)
    form.append(label)
    taskItemContent.append(span)
})
