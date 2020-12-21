console.log("Задание №4");

let matr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

function proiz(a, arr){
    let x = arr.length; 
    let y = arr[0].length; 
    for(let i = 0; i < x; i++){
        for(let j = 0; j < y; j++){
            arr[i][j] *= a
        }
    }
    console.log(arr); 
}

proiz(3, matr);