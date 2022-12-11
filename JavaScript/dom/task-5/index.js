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
]
const modalObj = [
    {
        text: 'Вы действительно хотите удалить эту задачу?',
        buttonCancel: 'Отмена',
        buttonDelete: 'Удалить'
    }
]

const createTaskForm = document.querySelector('.create-task-block')
const tasksList = document.querySelector('.tasks-list')
const spanError = document.querySelector('.error-message-block')
const bodyHtml = document.querySelector('body')

const themeRotate = () => {
    if(bodyHtml.className.includes('theme-dark')) {
        const taskItem = document.querySelectorAll('.task-item')
        const button = document.querySelectorAll('button')

        taskItem?.forEach((el) => {
            el.style.color = '#fff'
        })
        button?.forEach((el) => {
            el.style.border = '1px solid #fff'
        })
    }
}
const createTooltip = (text) => {
    const tooltip = document.createElement('span')
    tooltip.textContent = text
    tooltip.classList.add('tooltip')

    return tooltip
}
const modalDown = () => {
    setTimeout(() => {
        popupMood.classList.add('modal-overlay_hidden')
    }, 300)
}
const modalUp = () => {
    setTimeout(() => {
        popupMood.classList.add('active')
    }, 300)
}
const conclusionTasks = (tasks) => {
    const task = tasks.map((task,index) => {
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
                                    <div>
                                        <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${task.id}">
                                            Удалить
                                        </button>
                                    </div>
                           </div>
                        </div>`
        )
    })
    tasksList.innerHTML = task.join('')
    themeRotate()
}

//modal
const popupMood = document.createElement('div')
popupMood.className = 'modal-overlay modal-overlay_hidden'
bodyHtml.append(popupMood)

const addModalOverlay = modalObj.map((task) => {
    return (
        `<div class="delete-modal">
                <h3 class="delete-modal__question">
                    ${task.text}
                </h3>
                <div class="delete-modal__buttons">
                    <button class="delete-modal__button delete-modal__cancel-button">
                       ${task.buttonCancel}
                    </button>
                    <button class="delete-modal__button delete-modal__confirm-button">
                        ${task.buttonDelete}
                    </button>
                </div>
        </div>`
    )
})
popupMood.innerHTML = addModalOverlay.join(',')

const modalEvents = (id) => {
    popupMood.addEventListener('click', (e) => {
        const {target} = e
        const btnModalCancel = target.className.includes('delete-modal__cancel-button')
        const btnModalConfirm = target.className.includes('delete-modal__confirm-button')
        const closestModalWrap = target.closest('.modal-overlay')
        const regionModalWrap = target.className.includes('modal-overlay ')

        if(btnModalCancel) {
            modalDown()
            closestModalWrap.classList.remove('active')
        } else if(btnModalConfirm) {
            const indexTasks = tasks.findIndex(n => {
                return n.id === id
            })
            if (indexTasks !== -1) {
                tasks.splice(indexTasks, 1);
            }
            conclusionTasks(tasks)
            modalDown()
            closestModalWrap.classList.remove('active')
        } else if (regionModalWrap) {
            modalDown()
            closestModalWrap.classList.remove('active')
        }
    })
}

// tasks
const buttonTask = () => {
    tasksList.addEventListener('click', (e) => {
        const isDelButton = e.target.closest('.task-item__delete-button')
        if(isDelButton) {
            const {target} = e
            const buttonId = target.dataset.deleteTaskId

            const modal = document.querySelector('.modal-overlay')
            modal.classList.remove('modal-overlay_hidden')
            modalUp()
            modalEvents(buttonId)
        }
    })
}
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

            conclusionTasks(tasks)
            spanError.classList.remove('active')
            buttonTask()
            themeRotate()
        }
    } else {
        spanError.innerHTML = 'Название задачи не должно быть пустым'
        spanError.classList.add('active')
    }
    taskNameInput.value = ''
    taskNameInput.focus()
})
document.addEventListener('mouseover', (e) => {
    const {target} = e
    const getButtonClass = target.className.includes('task-item__delete-button')

    if(getButtonClass) {
        const taskItemHtml = target.closest('.task-item')
        const taskId = taskItemHtml?.dataset.taskId
        if(taskId) {
            const tooltipHtml = createTooltip(`Удалить задачу под номером ${taskId}`)
            target.append(tooltipHtml)
        }
    }
})
document.addEventListener('mouseout', (e) => {
    const {target} = e
    const isOutFromDeleteButton = target.className.includes('task-item__delete-button')

    if(isOutFromDeleteButton) {
        const tooltip = document.querySelector('.tooltip')
        if(tooltip) {
            tooltip.remove()
        }
    }
})

// theme
document.addEventListener('keydown', (e) => {
    const {keyCode} = e
    if(keyCode === 9 && !bodyHtml.className.includes('theme-dark')) {
        e.preventDefault()
        bodyHtml.classList.toggle('theme-dark')
        bodyHtml.style.background = '#24292e'
        themeRotate()
    } else if(keyCode === 9 && bodyHtml.className.includes('theme-dark')){
        e.preventDefault()
        bodyHtml.classList.toggle('theme-dark')
        bodyHtml.style.background = 'initial'
        themeRotate()
    }
})