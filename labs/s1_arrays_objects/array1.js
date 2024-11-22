/**
 * Khái niệm array bên C/C++
 * - array (mảng) là 1 danh sách hoặc tập hợp có các phẩn từ có cùng kiểu dữ liệu, và có chỉ số index tăng dần
 * 
 * VD: 
 * int [1,2,3, 'a', true] => lỗi
 * int [1, 2, 3, 4] => ok
 * 
 * ===========================================

 * Khái niệm array bên JavaScript
 * - array (mảng) là 1 danh sách hoặc tập hợp có các phẩn tử có index tăng dần (index bắt từ 0)
 * 
 * VD:
 * var numbers = [1, 2, 3 'a', true]; => OK
 * 
 * numbers[0] => 1
 * numbers[4] => true
 * 
 * Các thao tác cơ bản của mảng.
 * 1. thêm phẩn tử vào cuối/đầu mảng
 * 2. xóa phần tử cuối/đầu mảng
 * 3. thay thế, update...
 * 4. duyệt mảng
 * ....
 * 
 * =================================
 * Khai báo mảng trong JS
 * var <tên biến> = []; => khai báo mảng rỗng
 * var <tiên biến> = [1, 2] => khai báo mảng có phần tử ban đầu
 */

// task = tác vụ/công việc

var tasks = [
    "Công việc 1",
    "Công việc 2",
    "Công việc 3"
];

console.log("Mảng gốc: ", tasks);

// Thêm phần tử vào cuối mảng
tasks.push("Công việc 4");
console.log("Sau khi push công việc 4", tasks);


// Thêm phần tử vào đầu mảng
tasks.unshift("Công việc 0");
console.log("Sau khi chèn công việc 0", tasks);

// Xóa phần từ cuối mảng
var deletedLastItem = tasks.pop();

console.log("Sau khi xóa công việc 4 ở cuối mảng", tasks);

// Xóa phần từ đầu mảng

var deletedFirstItem = tasks.shift();

console.log("Sau khi xóa công việc 0 ở đầu mảng", tasks, deletedFirstItem);

/**
 * push: thêm phần tử cuối mảng
 * pop: xóa phần tử cuối ở mảng và trả về phần tự bị xóa.
 * unshift: chèn phần tử vào đầu mảng
 * shift: xóa phần tử ở đầu mảng
 */

tasks[2] = "Công việc 4";
console.log(tasks);

