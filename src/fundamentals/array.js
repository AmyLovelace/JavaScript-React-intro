//array 

const array = [];
//array.push(1)
//array.push(2)
//array.push(3)
//array.push(4)

let array2 = [...array,5];

const array3 = array2.map(function(numero){
    return numero * 2;
});

console.log(array);
console.log(array2);


