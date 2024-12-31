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
 * join()
 */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Kết quả: 1 2 3 4 5 6 7 8 9 10

/**
 * method map sẽ xử lý giá trị các phần từ trong array tùy ý theo logic callback truyền vào và trả về 1 array mới
 * Array.map(callbackFn(value, index))
 */
var powerTwoNumbers = numbers.map(function(value, index) {
    // Kết quả value sau mỗi lần duyệt chính là: 1 2 3 4 5 6 7 8 9 10
    // Kết quả index sau mỗi lần duyệt chính là: 0 1 2 3 4 5 6 7 8 9

    // logic tính toán value^2 (value mũ 2)
    return value ** 2;
}); // 1 4 9 16 25 36 49 64 81 100

/**
 * method filter sẽ lọc các phần từ theo điều kiện callback truyền vào và trả về 1 mảng mới. 
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


/**
 * reduce(callbackFn(preValue, currentValue, index), initValue)
 */

var initialValue = 0;
var totalOfNumbers = numbers.reduce(function(preValue, currentValue, index) {
    // console.log({preValue, currentValue});
    /**
     * Logic đằng sau: preValue = (preValue + currentValue)
     * VD: 
     * preValue = 0
     * currentValue = 1
     * -> preValue = 0 + 1 = 1
     * 
     * preValue = 1
     * currentValue = 2
     * -> preValue = 1 + 2 = 3
     * 
     * preValue = 3
     * currentValue = 3
     * -> preValue = 3 + 3 = 6
    
     * 
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
// console.log(totalOfNumbers);

/**
 * some(callbackFn(value, index)) là method tìm kiếm tồn tại phần tử trong mảng nếu trả về true. 
 * Và ngược lại trả về false
 */
var isHas10Value = numbers.some(function(value, index) {
    // [1 2 3 4 5 6 7 8 9 10]
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

// Demo indexOf
function indexOfDemo(value) {
    var indexTemp = -1;
    for (var index in numbers) {
        if (numbers[index] === value) {
            indexTemp = index;
            break;
        }
    }
    return +indexTemp;
    // index: so nguyen --- ko tim tim thay thi tra ve -1
}
// console.log(indexOfDemo(11));


var indexOf10Value = numbers.indexOf(10); // 9 - là index phần từ giá trị là 10 trong mảng numbers
var lastIndexOf10 = numbers.lastIndexOf(10); // 9 - là index phần từ giá trị là 10 trong mảng numbers

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
var arraySlice = numbers.slice(start, end); // [1 2 3]
// console.table(arraySlice);
// console.table(numbers);

// từ các phần tử từ vị trí start tới vị số vị trí deleteCount
// CHÚ Ý: Ảnh hưởng tới array numbers ban đầu - kiến thức tham chiếu
var deleteCount = 5;
// console.table(numbers);
numbers.splice(start, deleteCount); // 6 7 8 9 10 (6 có index là 5)
// console.table(numbers);


// JOIN method chuyển đổi 1 array thành 1 string
// output: 1-2-3-4-5-6-7-8-9-10
var txtOfNumber = numbers.join('-');
// console.log(txtOfNumber);


// CÒN NHIỀU METHODS NỮA TUY NHIÊN LÚC LÀM SẼ TÌM HIỂU SAU.
// BÊN TRÊN LÀ CÁC METHODS HAY SỬ DỤNG, PHỔ BIẾN KHI LẬP TRÌNH JS NÓI CHUNG
