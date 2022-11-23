const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const giveJobToStudent = (student, jobName) => {
    let newObj = {
        ...student,
        job: jobName
    }
    alert(`Поздравляем! У студента ${newObj.fullName} появилась новая работа! Теперь он ${newObj.job}`)
    return newObj
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

console.log(updatedStudent)