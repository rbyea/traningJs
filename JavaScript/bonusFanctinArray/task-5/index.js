let arr = [];

for(let i = 1; i <= 3; i++ ){
    let newArr = [];
    for(let j = 1; j <= 5; j++ ){
        newArr.push(j);
    }
    arr.push(newArr);
}

console.log(arr);