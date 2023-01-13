import {getRandomColor} from "./utils/utils";

export default function initApp() {

    const body = document.querySelector('body')
    const btn = document.createElement('button')
    btn.className = 'button'
    btn.innerHTML = 'Изменить цвет страницы'
    body.append(btn)

    btn.addEventListener('click', (e) => {
        const {target} = e
        target.style.backgroundColor = getRandomColor()
    })
}



