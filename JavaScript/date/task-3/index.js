const addDays = (date, days) => {
    return new Date(date.getTime() + days * 1000 * 60 * 60 * 24);
}

console.log(addDays(new Date, 3))