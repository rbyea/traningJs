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

const createTaskForm = document.querySelector('.create-task-block')
const tasksList = document.querySelector('.tasks-list')
const spanError = document.querySelector('.error-message-block')
createTaskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const {target} = e
    const taskNameInput = target.taskName
    let pushEl = false

    if(taskNameInput.value.length > 0) {
        tasks.forEach(el => {
            if(taskNameInput.value === el.text) {
                pushEl = true
            }
        })

        if(pushEl) {
            spanError.innerHTML = 'Задача с таким названием уже существует.'
            spanError.classList.add('active')
        } else {
            tasks.push({
                id: String(Date.now()),
                completed: false,
                text: taskNameInput.value,
            })
            const task = tasks.map((task) => {
                return (
                    `<div class="task-item" data-task-id="${task.id}">
                <div class="task-item__main-container">
                    <div class="task-item__main-content">
                        <form class="checkbox-form">
                            <input class="checkbox-form__checkbox" type="checkbox" ${task.completed ? checked : ''} id="${task.id}">
                            <label for="${task.id}"></label>
                        </form>
                        <span class="task-item__text">
                            ${task.text}
                        </span>
                    </div>
                    <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${task.id}">
                        Удалить
                    </button>
                </div>
            </div>`
                )
            })
            tasksList.innerHTML = task.join('')
            spanError.classList.remove('active')
        }
    } else {
        spanError.innerHTML = 'Название задачи не должно быть пустым'
        spanError.classList.add('active')
    }

    taskNameInput.value = ''
    taskNameInput.focus()
})

