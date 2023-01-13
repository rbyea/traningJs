import './index.css'
import JS_IMG from './assets/47bf752c2f13d3f13363ea5b624bd2db.png'

console.log('Hello World! !')

const body = document.querySelector('body')
const title = document.createElement('h1')
const title2 = document.createElement('h2')

const image = document.createElement('img')
title.innerHTML = 'I love JavaScript'
title2.innerHTML = 'Galochka'
body.append(title)
body.append(title2)
body.append(image)
image.src = JS_IMG