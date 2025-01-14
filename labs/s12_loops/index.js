// Vòng lặp trong JavaScript

var numbers = [1, 2, 3, 4, 5];

// vòng lặp for áp dụng duyệt mảng
for (var i = 0; i < numbers.length; i++) {
    // i: 1 2 3 4 5
}

// for in
for (var index in numbers) {
    // index: 0 1 2 3 4 - Tức là chỉ số index của numbers sau mỗi lần lặp
}

// for of
for (var element of numbers) {
    // element: 1 2 3 4 5 - Tức là các phần tử của numbers sau mỗi lần lặp
}

// while
// CHÚ Ý: chú ý điều kiện và bước nhảy, không tạo ra vòng lặp vô tận, rất nguy hiểm.
var j = 0;
while (j < numbers.length) {
    // j: 0 1 2 3 4 - Trùng với index của numbers sau mỗi lần lặp
    // numbers[j]: 1 2 3 4 5 là các phần tử của numbers sau mỗi lần lặp
    j++; // Bước nhảy, chú ý cái này. 
}

// CHÚ Ý: chú ý điều kiện và bước nhảy, không tạo ra vòng lặp vô tận, rất nguy hiểm.
var index = 0;
do {
    // index: 0 1 2 3 4 - Trùng với index của numbers sau mỗi lần lặp
    index++;
} while (index < numbers.length);

// Khác với vòng lặp while. Vòng lặp do while sẽ chạy trước 1 lần rồi mới kiểm tra điều kiện.

// Trên đây là các vòng lặp trong JS. Dùng tùy trường hợp, mục đích bài toán.
