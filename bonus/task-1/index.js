let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';
let lengthString = javaScriptDescription.length - 1;
let centerString = Math.floor(lengthString / 2);

let newJavaScriptDescription = javaScriptDescription.slice(centerString);
let updateTextJavaScriptDescription1 = newJavaScriptDescription.replace('а', 'А');
let updateTextJavaScriptDescription2 = updateTextJavaScriptDescription1.replace('a', 'A');
let deleteSpace = updateTextJavaScriptDescription2.replace(/\s/g, "");

let centerLetter = deleteSpace.charAt(Math.floor((deleteSpace.length - 1) / 2));

console.log(centerLetter);
console.log(deleteSpace.repeat(3));