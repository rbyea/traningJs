export class Donations {
    constructor(inputName, buttonName,form, container) {
        this.valueInput = inputName;
        this.button = buttonName;
        this.form = form;
        this.container = container;
    }
    btnEvent() {
        const totalPrice = document.querySelector('#total-amount')

        this.form.addEventListener('click', (e) => {
            e.preventDefault();
            const {target} = e

            if(target.className.includes(this.button.className)) {
                console.log(this.valueInput.value)
            }
        })
    }
}