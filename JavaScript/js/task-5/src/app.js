import {Donations} from "./utils/Donations.js";

const initApp = () => {
    const input = document.querySelector('.donate-form__donate-input');
    const button = document.querySelector('.donate-form__submit-button');
    const form = document.querySelector('.donate-form');
    const container = document.querySelector('.donates-container__donates');

    const obj = new Donations(input, button, form, container)
    obj.btnEvent()
}

export default initApp