// Syntax: array.sort(sortFn(a, b) {}) -> return về 1 array đã được sắp xếp.

// Trong sort function
// - Nếu trả về giá trị < 0 thì a đứng trước b
// - Nếu trả về giá trị > 0 thì a đứng sau b
// - Nếu trả về giá trị = thi a và b không hoán đổi vị trí cho nhau.

var numbers = [2, 9, 4, 3, 2, 1];

var ascNumbers = numbers.sort(function(a, b) {
    return a - b;
}); // [1, 2, 2, 3, 4, 9] ascending order

var descNumbers = numbers.sort(function(a, b) {
    return b - a;
}) // [9, 4, 3, 2, 2, 1] descending order

var products = [
    {id: 1, name: 'Iphone 8', price: 700},
    {id: 2, name: 'SamSung S9', price: 1200},
    {id: 3, name: 'Xiaomi LTE9', price: 500},
    {id: 4, name: 'Iphone 16', price: 1800}
];

var productsSortedDESCByPrice = products.sort((p1, p2) => {
    return p1.price - p2.price;
});

/*Kết quả của productsSortedDESCByPrice
[
    { id: 3, name: 'Xiaomi LTE9', price: 500 },
    { id: 1, name: 'Iphone 8', price: 700 },
    { id: 2, name: 'SamSung S9', price: 1200 },
    { id: 4, name: 'Iphone 16', price: 1800 }
]*/
