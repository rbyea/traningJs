const initApp = () => {
    const body = document.querySelector('body');
    const container = document.querySelector('.cookie-consent')

    body.addEventListener('click', (e) => {
        const {target} = e

        if(target.className.includes('cookie-consent__button')) {
            localStorage.setItem('accept', '1')
            container.classList.add('hide')
        }
    })

    if(localStorage.getItem('accept')) {
        console.log(true)
        container.classList.add('disabled')

    }
}

export default initApp