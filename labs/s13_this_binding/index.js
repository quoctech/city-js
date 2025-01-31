/**
 * Con trỏ this trong JavaScript là gì?
 * Trong JavaScript, this là một từ khóa đặc biệt, được gọi là "this binding" (liên kết this).
 * Nó được sử dụng để tham chiếu đến đối tượng mà một hàm hoặc phương thức thuộc về.
 * Giá trị của this không được xác định tại thời điểm khai báo mà được xác định tại thời điểm hàm được gọi (runtime).
 */

/**
 * this trong các ngữ cảnh khác nhau
 * CHÚ Ý: Giá trị của this thay đổi tùy thuộc vào ngữ cảnh mà hàm được gọi
 */

/**
 * 1. Trong hàm thông thường (non-strict mode)
 * - Nếu hàm được gọi như một hàm độc lập (không phải phương thức của đối tượng)
 *  thì this sẽ trỏ đến đối tượng toàn cục (window trong trình duyệt, global trong Node.js).
 *
 * - Nếu hàm được gọi như một phương thức của đối tượng, this sẽ trỏ đến đối tượng đó.
 */

function myFunction() {
  console.log(this);
}

var myObject = {
  text: "đây là object myObject",
  myMethod: myFunction,
};

console.log("=== START RUN myFunction ===");
myFunction(); // this trỏ đến window (hoặc global)
console.log("=== END RUN myFunction ===");

console.log("=== START RUN myMethod ===");
myObject.myMethod(); // this trỏ đến myObject
console.log("=== END RUN myMethod ===");

/**
 * 2. Trong hàm mũi tên (arrow function):
 * Hàm mũi tên không có this riêng. this trong hàm mũi tên được kế thừa từ ngữ cảnh bao quanh nó (lexical this).
 */

var myObject2 = {
  name: "QuocTK",
  greet: () => {
    console.log("Hello, " + this.name);
  },
};

console.log("=== START RUN greet ===");
myObject2.greet(); // this trỏ đến window (hoặc global), do đó this.name là undefined
console.log("=== END RUN greet ===");

/**
 * 3. Trong constructor function:
 * Khi một hàm được gọi với new, nó trở thành constructor function.
 * this trong constructor function sẽ trỏ đến đối tượng mới được tạo ra.
 */
function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log("Hello, " + this.name);
  };
}

var quoc = new Person("QuocTK");
quoc.greet(); // this trỏ đến quoc


/**
 * 4. Trong sự kiện (event handler)
 * Trong trình duyệt, khi một hàm được gán cho một sự kiện (ví dụ: click, mouseover...),
 * this trong hàm đó thường trỏ đến phần tử HTML mà sự kiện xảy ra.
 * 
 */

/*
<button onclick="myFunction()">Click me</button>

<script>
function myFunction() {
  console.log(this); // this trỏ đến button
}
</script> 
*/

// VÍ DỤ THỰC TẾ
// Hãy xem xét một ví dụ về một ứng dụng quản lý sản phẩm:
var productManager = {
  name: 'Sản phẩm',
  products: [
    { name: "Áo thun", price: 200000 },
    { name: "Quần jean", price: 300000 }
  ],
  showProducts: function() {
    this.products.forEach(function(product) {
      console.log(this.name + ": " + product.name + " - " + product.price + " VND");
    });

    // Dùng arrow function để fix lỗi undefined của this.name (Hãy mở comment code để chạy.)
    /*this.products.forEach(product => {
      console.log(this.name + ": " + product.name + " - " + product.price + " VND");
    });*/
  }
};

productManager.showProducts(); // Lỗi: this.name là undefined

/**
 * Trong ví dụ trên, this trong forEach trỏ đến window (hoặc global), không phải productManager. 
 * Để sửa lỗi này, ta có thể sử dụng hàm mũi tên hoặc bind (học bind sau.)
 */
