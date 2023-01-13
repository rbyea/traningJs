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
const autoDateTest = (date) => {
    date = new Date(date.getTime() + 1 * 1000 * 60 * 60 * 24)
    console.log('data + 1', date)

    const dataM = new Date();
    const dataNewDay = new Date();

    dataNewDay.setDate(date.getDate() + 8 - date.getDay())
    console.log('пн будущий', dataNewDay)

    if(date.getDay()){
        const sb = date.setDate(date.getDate() + 6 - date.getDay())
        console.log('будущая суббота',date)
        if(sb >= date.getTime()) {

            // console.log(dataM)
            // m.setDate(date.getDate() + 6 - date.getDay() + 14)
            dataNewDay.setDate(date.getDate() + 6 - date.getDay() + 7)
            innerDate.innerHTML = dataNewDay

            const dateDay = dataNewDay.getDate()
            const dateMonth = dataNewDay.getMonth()
            resultDay.innerHTML = dateDay
            resultMonth.innerHTML = arrMonth[dateMonth]
        }
    } else {
        m.setDate(date.getDate() + 1)
    }
}

autoDateTest(new Date, 12)