for (let i = 0; i < 3; i += 1) {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        console.log(`Добро пожаловать, ${newStudent}!`)
    }
}

let k = 0;
while (k < 3) {
    k++;
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        console.log(`Добро пожаловать, ${newStudent}!`)
    }
}

let j = 0;
do {
    j++;
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        console.log(`Добро пожаловать, ${newStudent}!`)
    }
} while (j<3);