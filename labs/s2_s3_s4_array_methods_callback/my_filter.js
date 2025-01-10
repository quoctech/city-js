var products = [
  { id: 1, name: 'Iphone 8', price: 700 },
  { id: 2, name: 'SamSung S9', price: 1200 },
  { id: 3, name: 'Xiaomi LTE9', price: 500 },
  { id: 4, name: 'Iphone 16', price: 1800 }
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
  // code logic here
  if (typeof callback !== 'function') {
    console.log('Tham số callback phải là 1 callback function');
  }

  if (!array || !Array.isArray(array)) {
    console.log('Khong phai là 1 mang');
  }

  var temp = [];
  for (var index = 0; index < array.length; index++) {
    var value = array[index];
    if (value) {
      var data = callback(value, index);
      if (value.price > 1000)
        temp.push(data);
    }
  }
  return temp;
}

// Code logic show data...
var productsFilter = myFilter(function (product, index) {
  return `${product.id}, ${product.name} ($${product.price})`;
}, products);

for (var productFilter of productsFilter) {
  console.log(productFilter);
}