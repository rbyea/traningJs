const d = new Date();
const monthNames = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря');

//сегодняшняя дата
// d.setDate();
// console.log(d)

const currentHour = d.getHours();

if(currentHour > 1) {
    console.log(true)
    d.setDate(d.getDate() + (6 + 7 - d.getDay()) % 14);
} else {
    console.log(false)
    d.setDate(d.getDate() + (5-d.getDay())%5+1);
}

console.log(d.getDate() + ' - ' + monthNames[d.getMonth()]);