class CarService {
    static #DefaultWorkingHours = {
        from: '9:00',
        till: '20:00',
    }
    constructor(name, workingHours) {
        this.name = name
        this.workingHours = workingHours || CarService.#DefaultWorkingHours
    }

    currentHours(date) {
        let getHoursWorkingFrom = this.workingHours.from.split(':')
        let getHoursWorkingTill = this.workingHours.till.split(':')
        return [+getHoursWorkingFrom[0], +getHoursWorkingTill[0]]
    }

    repairCar(carName) {
        if(!carName) {
             console.error('Вам необходимо указать название машины, чтобы ее отремонтировать');
            return
        } else {
            const date = new Date()
            const dateHours = date.getHours()
            const [HoursWorkingFrom, HoursWorkingTill] = this.currentHours(date)

            dateHours >= HoursWorkingFrom && dateHours <= HoursWorkingTill
                ? console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте пожалуйста`)
                : console.log(`К сожалению, мы сейчас закрыты. Приходите завтра`)
        }
    }
}

const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');