/**
 * Các methods xử lý array hay dùng trong JavaScript
 * map()
 * filter()
 * reduce()
 * some()
 * find()
 * indexOf()
 * lastIndexOf()
 * slice()
 * splice()
 */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Kết quả: 1 2 3 4 5 6 7 8 9 10

/**
 * method map sẽ xử lý giá trị các phần từ trong array tùy ý theo logic callback truyền vào và trả về 1 array mới
 */
var powerTwoNumbers = numbers.map(function(value, index) {
    // Kết quả value sau mỗi lần duyệt chính là: 1 2 3 4 5 6 7 8 9 10
    // Kết quả index sau mỗi lần duyệt chính là: 0 1 2 3 4 5 6 7 8 9

    // logic tính toán value^2 (value mũ 2)
    return value ** 2;
}); // 1 4 9 16 25 36 49 64 81 100

/**
 * method filter sẽ lọc các phần từ theo điều kiện callback truyền vào. 
 * true thì pass (giữ lại), false thì loại bỏ phần từ khỏi array
 */
var evenNumbers = numbers.filter(function(value, index) {
    // logic tính toán só chẵn
    // chỉ lấy các số chẵn, các số lẻ thì loại bỏ khỏi mảng
    if (value % 2 === 0) {
        // true là giữ lại phần từ
        return true;
    }
    // false là loại bỏ phần từ
    return false;
}); // 2 4 6 8 10


var initialValue = 0;
var totalOfNumbers = numbers.reduce(function(preValue, currentValue, index) {
    /**
     * preValue currentValue
     * 0 1
     * 1 2
     * 3 3
     * 6 4
     * 10 5
     * 15 6
     * 21 7
     * 28 8
     * 36 9
     * 45 10
     * 55
     */
    return preValue + currentValue;
}, initialValue); // 55

/**
 * method some xác định xem callback đã chỉ định có trả về true cho bất kỳ phần tử nào của array hay không.
 */
var isHas10Value = numbers.some(function(value, index) {
    if (value === 10) {
        return true;
    }
    return false;
}); // true

/**
 * Giống như some tuy nhiên sẽ trả về phần từ đầu tiên tìm được là true
 */
var find10Value = numbers.find(function(value, index) {
    if (value === 10) {
        return true;
    }
    return false;
}); // 10

var indexOf10Value = numbers.lastIndexOf(10); // 9 - là index phần từ giá trị là 10 trong mảng numbers
var lastIndexOf10 = numbers.indexOf(1); // 0 - là index phần từ giá trị là 1 trong mảng numbers

/**
 * Sự khác nhau giữ indexOf và lastIndexOf
 * - indexOf tìm phần từ truyền vào từ vị trí đầu mảng tới cuối mảng
 * - lastIndexOf tìm phần từ cuối mảng tới đầu mảng
 * - Nếu indexOf không tìm thấy phần tử trong mảng thì trả về  -1
 * - Nếu lastIndexOf không tìm thấy phần tử trong mảng thì trả về  -1
 */

// cắt mảng numbers ban đầu từ vị trí start tới vị trí end và trả về mảng mới mà numbers không ảnh hưởng
var start = 0;
var end = 3;
var arraySlice = numbers.slice(start, end); // 1 2 3

// từ các phần tử từ vị trí start tới vị số vị trí deleteCount
// CHÚ Ý: Ảnh hưởng tới array numbers ban đầu - kiến thức tham chiếu
var deleteCount = 5;
numbers.splice(start, deleteCount); // 6 7 8 9 10 (6 có index là 5)


// CÒN NHIỀU METHODS NỮA TUY NHIÊN LÚC LÀM SẼ TÌM HIỂU SAU.
// BÊN TRÊN LÀ CÁC METHODS HAY SỬ DỤNG, PHỔ BIẾN KHI LẬP TRÌNH JS NÓI CHUNG
