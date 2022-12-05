const newForm = document.createElement('form')
newForm.className = 'create-user-form'

const newLabelUser = document.createElement('label')

const newInputUser = document.createElement('input')
newInputUser.setAttribute('type', 'text')
newInputUser.setAttribute('name', 'userName')
newInputUser.setAttribute('placeholder', 'Введите ваше имя')

const newLabelPasswrod = document.createElement('label')
const name = 'Имя'

const newInputPassword = document.createElement('input')
newInputPassword.setAttribute('type', 'password')
newInputPassword.setAttribute('name', 'password')
newInputPassword.setAttribute('placeholder', 'Придумайте Пароль')

const button = document.createElement('button')
button.setAttribute('type', 'submit')
button.innerHTML = 'Подтвердить'

const body = document.querySelector('body')
body.append(newForm)
newForm.prepend(newLabelUser)
newLabelUser.prepend(newInputUser)
newLabelUser.prepend('Имя')
newForm.append(newLabelPasswrod)
newLabelPasswrod.append(newInputPassword)
newLabelPasswrod.prepend('Пароль')
newForm.append(button)


