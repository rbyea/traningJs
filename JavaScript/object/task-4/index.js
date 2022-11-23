const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const giveJobToStudent = (student, jobName) => {
    let updatedStudent = {
        ...student,
        job: jobName
    }

    console.log(updatedStudent)
    alert(`Поздравляем! У студента ${updatedStudent.fullName} появилась новая работа! Теперь он ${updatedStudent.job}`)
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');