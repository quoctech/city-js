var products = [
  { id: 1, name: "Iphone 8", price: 700 },
  { id: 2, name: "SamSung S9", price: 1200 },
  { id: 3, name: "Xiaomi LTE9", price: 500 },
  { id: 4, name: "Iphone 16", price: 1800 },
];

/**
 * Dựa vào array.some() Hoàn thiện hàm mySome(callback, array) phía dưới
 * 1. Sản phẩm nào mà có price > $1000 thì trả về true.
 */

function mySome(callback, array) {
  if (typeof callback !== "function") {
    console.log("typeof callback = ", typeof callback);
    throw Error("Tham số callback phải là 1 callback function");
  }

  if (!array || !Array.isArray(array)) {
    console.log("typeof array = ", typeof array);
    throw Error("Tham số array phải là một mảng");
  }

  for (var index = 0; index < array.length; index++) {
    var value = array[index];
    var data = callback(value, index);
    if (data) {
      return true;
    }
  }
  return false;
}

var isExpensiveProduct = mySome(function (product, index) {
  return product.price > 1000;
}, products);

// console.log(isExpensiveProduct);
// Kết quả mong muốn phải là true vì trong mảng products có id = 2 có giá 1200. Tức là có tồn tại sản phẩm giá trên $1000
