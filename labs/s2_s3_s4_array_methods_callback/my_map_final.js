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

function myMap(callback, array) {
    // Phần xử lý lỗi khi truyền tham số không phải là 1 array hoặc là 1 callback thì bắn ra lỗi (Handle exception)
    if (typeof callback !== 'function') {
        console.log('typeof callback =', typeof callback);
        throw Error('Tham số callback phải là 1 callback function');
    }

    if (!array || !Array.isArray(array)) {
        console.log('typeof array =', typeof array);
        throw Error('Tham số array phải là 1 mảng');
    }
    
    // Xử lý chính (Main process)
    var temp = [];
    for (var index = 0; index < array.length; index++) {
        var value = array[index];
        if (value) {
            var data = callback(value, index);
            temp.push(data);
        }
    }
    return temp;
}

var productsFormatted = myMap(function(product, index) {
    return `${product.id}, ${product.name} ($${product.price})`;
}, products);

for (var productFormatted of productsFormatted) {
    console.log(productFormatted);
}
