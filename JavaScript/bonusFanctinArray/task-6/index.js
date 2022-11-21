const matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
];
let arr = []

for(let i = 0; i<matrix.length; i++) {
    arr.push(...matrix[i])
}

console.log(arr)