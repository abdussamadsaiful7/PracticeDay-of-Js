const numbers = [99, 33, 44, 55, 77, 88];
const student = {
    name: 'Samad saifullah',
    age: 28,
    book: ['math', 'english', 'Quran', 'hadid'],
}

const about = `My name is ${student.name},
age of ${student.age}, I have ${numbers[4]}, 
and Also liked reading book such as ${student.book[2]} and ${student.book[3]}`;

//console.log(about);

//arrow function

const getFiftyFive = () => 55;
console.log(getFiftyFive());

const isEven = x => x % 2 === 0;
//console.log(isEven(10001));

const addNumbers = (x, y, z) => x+y+z;
const resulT = addNumbers(200, 300, 400);
//console.log(resulT);


// multi arrow function

const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
}
const output = doMath(111, 222);
//console.log(output);

//spread operator,

// const Numbers = [89, 35, 98, 12]
// Numbers.push(9999999)
// const newNumber =[...Numbers, 3333, 4444];
// //console.log(newNumber);
// //console.log(Numbers);

// const newNumber2 =[...Numbers];
// console.log(newNumber2);

numbersList = [89, 35, 98, 12];
const newNumber = numbersList;
numbersList.push(10000000000);

const newNumber2 = [...numbersList];
console.log(newNumber2);