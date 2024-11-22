/**
 * Object là 1 kiểu dữ liệu tham chiếu trong JS
 * Có giá trị là key-value
 * value ở đây là bất kỳ kiểủ dữ liệu nào
 * 
 * Cú pháp:
 * var <tên biến> = {};
 * 
 * VD: Tạo 1 obj (đối tượng) người
 * var person = {name: 'JS', age: 18};
 * 
 * key ở ví dụ trên là: name và age.
 * value ở ví dụ trên là 'JS' và 18
 * 
 * 
 * Để truy cập vào thuộc tính của obj có 2 cách.
 * 
 * Cách 1:
 * person.name => 'JS'
 * person.age => 18
 * 
 * Cách 2: 
 * person['name'] => 'JS'
 * person['age'] => 18
 * 
 * 
 * Update giá trị trong obj
 * 
 * person.name = 'PHP'
 * person['name'] = 'PHP'
 */


var person = {
    name: 'JS',
    age: 18,
    address: 'Ha Noi'
};

person.name = 'PHP';
person['age'] = 20;

// thêm 1 thuộc tính cho obj
person.gender = 1;

// Xóa thuộc tính cho obj
delete person.gender;


// Duyệt obj
var keys = Object.keys(person);
for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    console.log(person[key]);
}


