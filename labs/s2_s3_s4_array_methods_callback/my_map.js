var products = [
    {id: 1, name: 'Iphone 8', price: 700},
    {id: 2, name: 'SamSung S9', price: 1200},
    {id: 3, name: 'Xiaomi LTE9', price: 500},
    {id: 4, name: 'Iphone 16', price: 1800}
];

// Hãy xây dựng hàm myMap để xử lý data cho products & đưa ra kết quả OUTPUT như mong đợi
/**
 * OUTPUT:
 *  Theo format: id, product.name ($product.price)
 * 
 *  1, Iphone 8 ($700)
 *  2, SamSung S9 ($1200)
 *  3, Xiaomi LTE9 ($900)
 *  4, Iphone 16 ($1800)
 */

var productsFormatted1 = products.map(function(product, index) {
    return `${product.id}, ${product.name} ($${product.price})`;
});

for (var productFormatted of productsFormatted1) {
    console.log(productFormatted);
}


// OK, phía trên là code demo sử dụng method map trong array
// Hãy hoàn thiện logic cho function myMap giống method map

function myMap(callback, array) {
    // Code logic here
}

/*var productsFormatted2 = myMap(function(product, index) {
    return `${product.id}, ${product.name} ($${product.price})`;
}, products);

for (var productFormatted of productsFormatted2) {
    console.log(productFormatted);
}*/
