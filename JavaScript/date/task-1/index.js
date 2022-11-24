const getDateFormat = (date, separator) => {
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear();


    if(3 >= 9) {
        console.log(true)
    }

    console.log(`${day}${separator}${month}${separator}${year}`)

}

getDateFormat(new Date, '.')