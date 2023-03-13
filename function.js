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
//console.log(result2);


const add4 =(first, second) => (first * second) + 20;
const result4 = add4(10, 20);
//console.log(result4);


const multiply = (a, b) => a * b;
const multiplyResult = multiply(100, 200);
//console.log(multiplyResult);

function getMultiply(num1, num2){
    const total = num1 * num2;
    return total;
}
const finalResult = getMultiply(100, 300);
//console.log(finalResult);





const numbers= [10, 20, 30, 40, 50];
const Result = numbers.indexOf(30);
//console.log(Result);


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

//console.log(beasts.indexOf('duck'));

//console.log(beasts.length);

beasts.push(5000)
console.log(beasts);

// for loop

// for(let i = 0; i< 20; i++){
    
//     console.log("The number is " + i );

// }

for(let i =20; i>= 0; i--){
    console.log('This number is '+ i);
}

// while loop;

let i =1;

while ( i<20){
    i++;
    console.log(i);
}

console.log('---------------------------')


let d = 21;
while( d>=1){
    console.log(d);
    d--;
}


// object;

const student = {
    name: 'Samad saifullah',
    age: 28,
    book: ['math', 'english', 'Quran', 'hadid'],
};
 console.log(student.age);

 console.log(student['age']);


 const myVar = 'name'
 console.log(student[myVar]);