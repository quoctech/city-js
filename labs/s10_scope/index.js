/**
 * Global scope là phạm vi ở trong 1 file js thì ở đâu cũng có thể truy cập, sửa đổi data đươc.
 * Local scope là khi 1 function sinh ra thì sẽ tạo ra 1 Local scope, phạm vi hẹp hơn
 *  Chỉ có thể truy cập, sửa đổi data trong phạm vị đó.
 * Nếu cố tình truy cập các biến khai báo trong Local scope ngoài Global scope thì sẽ báo lỗi.
 */

// Global scope
var x = 10;
var y = 15;

function random() {
    // Local scope
    var x = Math.floor(Math.random() * 9);
    var z = 100; // chỉ sử dụng được y trong scope hàm random.

    y = 20; // sửa đổi data của y từ 15 lên 20.
    console.log('X trong random function (local scope)', x);
}

console.log('Trước khi thay đổi y', y);
random();
console.log('X (global scope)', x);
console.log('Sau khi thay đổi y', y); // 20 vì random đã được gọi và đã thay đổi giá trị của y từ 10 lên 20.
// console.log(z); z is not defined
