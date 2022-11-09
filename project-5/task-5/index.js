let userString = prompt('Введите текст для обрезки');
let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки');
let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки');

let getString = userString.trim();
let getStartSliceIndex = Number(startSliceIndex);
let getEndSliceIndex = Number(endSliceIndex);

let refreshString =  getString.slice(getStartSliceIndex, getEndSliceIndex)

let resultTxt = refreshString

alert(`Результат: ${resultTxt}`)