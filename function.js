//Default function

function add(first, second){
    const total = first + second;
    return total;
}
const result = add(10, 20);
//console.log( result);




function added (arif, sorif){
    const total = arif + sorif;
    return total;
}
const amount = added(10000, 20000);
//console.log(amount);




function getNumber (first, second = 40){
    const total = first+ second;
    return total;
}
const totalNumber = getNumber(33);
//console.log(totalNumber);


// const add1 = function add1(first, second){
//     total(first, second);
//     return total(99, 88);
// }
// add1();
// console.log(first, second);

const add2 = (first, second) => first + second;

const result2 = add2(10, 20)
console.log(result2);