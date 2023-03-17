const products = [
    {name: 'laptop', price: 32000, brand: 'levono', color:'silver'},
    {name: 'phone', price: 22000, brand: 'HTC', color:'white'},
    {name: 'watch', price: 7000, brand: 'Casio', color:'yellow'},
    {name: 'Sunglass', price: 500, brand: 'RoyBand', color:'black'},
    {name: 'camera', price: 9000, brand: 'Canon', color:'gray'}
];

const brands = products.map(product => product.brand);
//console.log(brands);

const names = products.map(product => product.name);
//console.log(names);

const prices =  products.map(x => x.price);
//console.log(prices);

const colors = products.map(samad => samad.color);
//console.log(colors);

//products.forEach(product => console.log(product.name));
//
//products.forEach(saiful => console.log(saiful.price));
//
//products.forEach(samad => console.log(samad.brand));
//
//products.forEach(Esaife => console.log(Esaife.color));


// filter, find, incudes

const cheap = products.filter(product => product.price <= 20000);
//console.log(cheap);

const choose = products.filter(samad => samad.price < 25000);
//console.log(choose);


const specificName = products.filter(product => product.name.includes('n'));
//console.log(specificName);

const specificName2 = products.filter(p=> p.brand.includes('y'))
//console.log(specificName2);

//console.log('-----------------------------------');

const specificProduct = products.find(p => p.name.includes('n'));
//console.log(specificProduct);

//destructure 
//array, object,

const numbers3 = [42, 65];
const [x, y] = numbers3;
//console.log(x, y);

const student = {
    name: 'Samad Saiful',
    Age: 28,
    books: ['quran', 'hadid', 'fiqah', 'Life story of Mohammud'],
}
//const [first, second, third] = student.books;
//console.log(first, second, third);


//Object destructuring
//console.log('-------------------------------');

const employee = {
    id: 'VS Code',
    designation: 'Developer',
    machine: 'Windows server',
    language: ['html', 'css', 'js', 'python'],
    specification: {
        height: 66,
        weight: 67,
    },
    address: 'Kumarkhali, Noakhali',
    drink: 'Water',
};

//const {machine, id} =employee;
//const {height, weight} =employee.specification;
const [first, second] = employee.language;

console.log (first, second);


// const add1 = function add1(first, second){
//     const total =(first, second)
//     return total(10, 20)
// }
// console.log(add1());


