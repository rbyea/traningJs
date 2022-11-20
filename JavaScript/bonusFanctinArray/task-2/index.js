const text = 'Привет! Как дела! Давно мы с тобой не виделись.'
const showSuccessMessage = (message) => {
    console.log(message)
}
const showErrorMessage = (message) => {
    console.error(message)
}

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
    let letter = text.split('');

    letter.forEach((e,i) => {
        if(e === errorSymbol) {
            errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}`)
        }
    })

    if(text.includes(errorSymbol) === false) {
        successCallback(`В данном тексте нет запрещенных символов`)
    }
}

checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
