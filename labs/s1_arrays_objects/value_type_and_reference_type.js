
/**
 * Giải thích tham trị
 */

var a = 10;
a = 100;

var b = a;

/**
 * var a = 10
 * Lúc này trình biên dịch (compiler) 
 * Lưu số 10 vào 1 ô nhớ trên RAM (ví dụ: 0X000098)
 * 
 * a -> 0X000098
 * 0X000098 = 10
 * 0X000098 = 100
 * 
 * -> a = 100
 * 
 * b = a
 * b -> 0X000097
 * 0X000097 = 100
 * 
 * -> b = 100
 * 
 * ================================================= * 
 */

// console.log(a, b);

// Giải thích tham chiếu
// array & object -> là kiểu tham chiếu
// Kiểu dl nguyên thủy: lưu trên STACK
// kiểu dl tham chiếu: lưu trên HEAP

var wallet1 = { value: 5 };

var wallet2 = wallet1;
wallet2.value = 10;

console.log(wallet1, wallet2);

/**
 * wallet1 -> 0X000050
 * 0X000050 = {value: 5}
 * 
 * wallet2 trỏ tới địa chỉ ô nhớ của wallet1
 * wallet2 -> 0X000050
 * 0X000050 = {value: 5}
 * 
 * wallet2.value = 10;
 * 
 * Update giá trị của 0X000050 value = 10
 * 
 */

/**
 * Tổng kết
 * Tham trị khi khai báo 1 biến thì sẽ nhận giá trị của biến khác. 
 * VD:
 * var a = 10
 * var b = a -> tức là b được gán giá trị là giá trị của a
 * 
 * Địa chỉ ô nhớ của a & b khác nhau
 * 
 * Tham chiếu khi báo báo 1 biến, được gán địa chỉ ô chớ của biến khác. (chỉ array & object)
 * VD: 
 * var d = {name: 'Test'};
 * var c = d -> tức là c được gán địa chỉ ô nhớ của d | "chứ ko phải giá trị của d"
 * 
 * Lúc này khi viết 
 * c.name = 'Test2'; thì d.name cũng bằng "Test2" do c & d trỏ chung 1 địa chỉ ô nhớ
 */


// Lưu ý quan trọng -- cẩn thận khi truyền obj || array vào tham số của function hoặc method

/**
 * Tạo ra 1 thông tin về Lê Thị Thêu
 * Tuổi: 26
 */

var theu = {
    name: 'Theu',
    age: 26
};

// theu & user đang trỏ chung 1 ô nhớ
function calAge(user) {
    if (user) {
        user.age = 18;
        user.say = function () {
            console.log('Say 1111');
        }
    }
}

//theu.say(); // theu.say is not a function

calAge(theu);

console.log(theu);


// =====================================================================================
var numbers = [1, 2, 3, 4, 5];

// khi truyền obj hoặc array vào method hoặc func thì sẽ hiểu "truyền địa chỉ ô nhớ"
function changeNumber(numbers1) {
    if (numbers1) {
        numbers1.push(10);
    }
}

// changeNumber(numbers);

// console.log(numbers);


// Khi truyền kiểu nguyên thủy vào method hoặc func thì "truyền giá trị"
var x = 10;
function changeX(y) {
    y = 100;
}

changeX(x);

console.log(x);
