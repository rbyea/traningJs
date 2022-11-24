const getDaysBeforeBirthday = (nextBirthdayDate, callback) => {
    const birthday = new Date(2023, 7, 27)

    const difference = birthday.getTime() - nextBirthdayDate.getTime()
    callback(difference)
}

const convertMsToDays = (difference) => {
    console.log('diff: ', Math.round(difference / 1000 / 60 / 60 / 24))
}

getDaysBeforeBirthday(new Date(), convertMsToDays)