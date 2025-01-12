var myMapFinalModule = require('./my_map_final');

var products = [
    {id: 1, name: 'Iphone 8', price: 700},
    {id: 2, name: 'SamSung S9', price: 1200},
    {id: 3, name: 'Xiaomi LTE9', price: 500},
    {id: 4, name: 'Iphone 16', price: 1800}
];

// Hoàn thiện hàm myFilter
/**
 * 1. Lấy ra các sản phẩm có price > $1000
 * 2. Sau khi filter xong thì kết hợp hợp với Array.map để xuất ra format: product.id, product.name ($product.price)
 * OUTPUT:
 * 2, SamSung S9 ($1200)
 * 4, Iphone 16 ($1800)
 */

function myFilter(callback, array) {
    // Phần xử lý lỗi khi truyền tham số không phải là 1 array hoặc là 1 callback thì bắn ra lỗi (Handle exception)
    if (typeof callback !== 'function') {
        console.log('typeof callback =', typeof callback);
        throw Error('Tham số callback phải là 1 callback function');
    }

    if (!array || !Array.isArray(array)) {
        console.log('typeof array =', typeof array);
        throw Error('Tham số array phải là 1 mảng');
    }

    // Main process
    var temp = [];
    for (var index = 0; index < array.length; index++) {
        var value = array[index];
        var data = callback(value, index);
        if (data) {
            temp.push(value);
        }
    }

    return temp;
}

var productListFiltered = myFilter(function(product, index) {
    // 1. Xử lý logic lấy ra các sản phẩm có price > $1000 ở callback này
    if (product.price > 1000) {
        return true; // giống với method filter thì true tức là giữ lại
    }
    return false; // giống với method filter thì false tức là loại bỏ, bỏ qua
}, products);

// Logic show sản phẩm với hàm myMap đã viết trước đó
// Biến productListFiltered là danh sách sản phẩm đã lọc với điều kiện price > $1000
// 2. Sau khi filter xong thì kết hợp hợp với Array.map để xuất ra format: product.id, product.name ($product.price)
var productsFormatted = myMapFinalModule.myMap(function(product, index) {
    return `${product.id}, ${product.name} ($${product.price})`;
}, productListFiltered);

// Biến productsFormatted là danh sách sản phẩm đã đã được format
for (var productFormatted of productsFormatted) {
    console.log(productFormatted);
}
