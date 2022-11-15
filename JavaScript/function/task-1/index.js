function getName1(name) {
    return `Имя равно ${name}`
};

const getName2 = function(name) {
    return `Имя равно ${name}`
}

const getName3 = name => {
    return `Имя равно ${name}`
}

console.log(getName1('Егор'));
console.log(getName2('Егор2'));
console.log(getName3('Егор3'));