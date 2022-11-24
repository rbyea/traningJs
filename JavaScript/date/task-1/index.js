const getDateFormat = (date, separator) => {
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear();

    console.log(`${('0' + day).slice(-2)}${separator}${('0' + month).slice(-2)}${separator}${year}`)

}

getDateFormat(new Date, '.')