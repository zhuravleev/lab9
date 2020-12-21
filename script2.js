console.log("Задание №2");

let mas = [3, 4, 5, 6, 7, 8, 9, 10]; 

function masDel(arr) {
    let dlin = arr.length; 
    for (let k = 1; k <= dlin; k++){
        if (dlin != 0){
            if ( k != dlin){
                console.log(arr.pop() + " Осталось [" + arr + "]");
            }
            else{
                console.log(arr[0]);
            }
        }
    }
}

masDel(mas); 