const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}

const handleObject = (obj, key, action) => {
    if(action === 'delete') {
        delete obj[key]
        return obj
    } else if(action === 'get') {
        return obj[key]
    } else if (action === 'add') {
        obj[key] = ''
        return obj
    }
}

const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result); // { name: 'Maxim' }