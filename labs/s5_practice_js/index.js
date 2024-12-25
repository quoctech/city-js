var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// INPUT: numbers <array>
// OUTPUT: 55
function getTotal(numbers) {
  var total = 0;
  // code logic here...
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(getTotal(numbers));

// INPUT: numbers
// OUTPUT: 30
function getTotalEvenNumber(numbers) {
  var total = 0;
  // Code logic here...
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      total += numbers[i];
    }
  }
  return total;
}
console.log(getTotalEvenNumber(numbers));

// Khởi tạo list user ở đây

var users = [
  // khởi tạo các object user... thông tin user xem file exam.txt bài 3
  { name: "Theu", age: 26, gender: "Nu", birthday: 1998, point: 8 },
  { name: "Ha", age: 26, gender: "Nu", birthday: 1999, point: 9 },
  { name: "Phong", age: 26, gender: "Nam", birthday: 1997, point: 10 },
  { name: "Thanh", age: 26, gender: "Nu", birthday: 1998, point: 0 },
  { name: "Trang", age: 22, gender: "Nu", birthday: 2002, point: 7 },
];

// INPUT: users<array>, birthday<int>
// OUTPUT: 1 mảng users tìm được bởi birthday truyền vào
function getUsersByBirthDay(users, birthday) {
  var usersFound = []; // 1 mảng người dùng khi tìm thấy bởi birthday
  if (!users) {
    return false;
  }
  for (var i in users) {
    if (users[i].birthday == birthday) {
      usersFound.push(users[i]);
    }
  }

  return usersFound;
}
var result = getUsersByBirthDay(users, 1998);
console.log(result);

// INPUT: users<array>, gender<string>
// OUTPUT: 1 mảng users tìm được bởi gender truyền vào
function getUsersByGender(users, gender) {
  var usersFound = []; // 1 mảng người dùng khi tìm thấy bởi gender
  if (!users) {
    return false;
  }
  for (var j in users) {
    if (users[j].gender == gender) {
      usersFound.push(users[j]);
    }
  }

  return usersFound;
}
var resultByGender = getUsersByGender(users, "nu");
console.log(resultByGender);

// INPUT: users<array>, point<int>
// OUTPUT: void - không xác định. - tham chiếu, loại bỏ user có point < pointDelete
function deleteUserByPoint(users, pointDelete = 1) {
    // code logic here
}
