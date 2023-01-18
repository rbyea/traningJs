export class Donations {
    #input = document.querySelector('.donate-form__donate-input');
    #button = document.querySelector('.donate-form__submit-button');
    #form = document.querySelector('.donate-form');
    #container = document.querySelector('.donates-container__donates');
    #totalPrice = document.querySelector('#total-amount');
    #donatError = document.querySelector('.donate-error');
    #balance = 0;
    #monthNames = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

    btnEvent() {
        this.#form.addEventListener('click', (e) => {
            e.preventDefault();
            const {target} = e
            const inputValue = +this.#input.value

            if(target.className.includes(this.#button.className)) {
                if(inputValue >= 1 && inputValue <= 100) {
                    this.#balance += inputValue
                    this.#donatError.classList.remove('active')
                    this.#input.value = ''
                    this.renderList(inputValue, new Date())
                } else {
                    this.#donatError.classList.add('active')
                }
            }
            this.#totalPrice.innerHTML = `${this.#balance}$`
        })
    }

    renderList(donat, time) {
        const getMonth = time.getMonth()
        const getDate = time.getDate()
        const getYear = time.getFullYear()
        const getTime = time.toLocaleTimeString()

        const div = document.createElement('div')
        div.className = 'donate-item'
        div.innerHTML = `${this.#monthNames[getMonth]}, ${getDate}th, ${getYear}, ${getTime} - <b>${donat}$</b>`

        this.#container.append(div)
    }
}

console.log('develope branch 11')