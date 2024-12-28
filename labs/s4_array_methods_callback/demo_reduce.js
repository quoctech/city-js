var products = [
    {id: 1, name: 'Iphone 8', price: 700},
    {id: 2, name: 'SamSung S9', price: 1200},
    {id: 3, name: 'Xiaomi LTE9', price: 500}
];

var numbers = [1, 2, 3, 4, 5];

var totalOfNumber = numbers.reduce(function(preValue, currentVal) {
    return preValue + currentVal;
}, 0);

var totalPriceOfProduct = products.reduce(function(preValue, currentVal) {
    return preValue + currentVal.price;
}, 0);
console.table({totalOfNumber, totalPriceOfProduct});

// Refactor code
/*let total = 0;
const totalPriceOfProduct = products.reduce((preValue, product) => preValue + product.price, total);*/
// console.log(totalPriceOfProduct);