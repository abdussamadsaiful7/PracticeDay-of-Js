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

products.forEach(product => console.log(product.name));

products.forEach(saiful => console.log(saiful.price));

products.forEach(samad => console.log(samad.brand));

products.forEach(Esaife => console.log(Esaife.color));
