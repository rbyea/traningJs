const innerDate = document.querySelector('.data');
const resultDay = document.querySelector('.day');
const resultMonth = document.querySelector('.month');

const arrMonth = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
];
const autoDateTest = () => {
    const dataYesterday = new Date
    const date = new Date(dataYesterday.getTime() + 1 * 1000 * 60 * 60 * 24)
    console.log('сегодняшняя дата', date)

    const dataM = new Date();
    const dataNewDay = new Date();

    dataNewDay.setDate(date.getDate() + 1 - date.getDay())
    console.log('пн будущий', dataNewDay)
    const sb = dataM.setDate(date.getDate() + 6 - date.getDay())
    console.log('будущая суббота',dataM)

    if(date.getTime() >= dataNewDay) {

        console.log('сегодняшняя дата больше или равно будущего пн')

        const sbFuture = dataM.setDate(date.getDate() + 6 - date.getDay() + 7)

        // console.log(dataM)

        // dataNewDay.setDate(date.getDate() + 6 - date.getDay() + 7)

        const dateDay = dataM.getDate()
        const dateMonth = dataM.getMonth()
        resultDay.innerHTML = dateDay
        resultMonth.innerHTML = arrMonth[dateMonth]
    } else {
        console.log('сегодняшняя дата меньше или равно будущего пн')

        // dataNewDay.setDate(date.getDate() + 6 - date.getDay())


        const dateDay = dataM.getDate()
        const dateMonth = dataM.getMonth()
        resultDay.innerHTML = dateDay
        resultMonth.innerHTML = arrMonth[dateMonth]
    }
}

autoDateTest()