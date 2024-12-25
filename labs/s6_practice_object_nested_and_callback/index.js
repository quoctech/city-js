var numbers = [1, 2, 3];
//      Index   0  1  2

/*for (var i = 1; i < numbers.length; i+= 2) {
    console.log(`Index numbers[${i}] = ${numbers[i]}`);
}*/

/*for (var key in numbers) {
    // key tức là: 0 1 2
    console.log(`Index numbers[${key}] = ${numbers[key]}`); // 1 2 3
}*/

var languages = [
    {id: 1, name: 'JS'},
    {id: 2, name: 'CSS'},
    {id: 3, name: 'PHP'},
];

/*for (var element of languages) {
    console.log(element);
}*/


// =================================== OBJECT NESTED ==============================

var dog = {
    name: 'Tom',
    color: 'Yellow',
    stomach: [
        'Jerry',
        'Chicken'
    ]
};
// dog.name = Tom
// dog.color = Yellow
// dog.stomach = [Jerry, Chicken];

/**
 * Lấy ra (duyệt) trong dạ dày của TOm hôm nay ăn món gì?
 * Jerry
 * Chicken
 */

/*for (var key in dog.stomach) {
    console.log(dog.stomach[key]);
}*/

/*for (var element of dog.stomach) {
    console.log(element);
}*/

// console.log(`Name: ${dog.name} - Color: ${dog.color}`);

var book1 = {
    name: 'Book 1',
    authors: {
        author1: 'Author 1',
        author2: 'Author 2'
    }
};

var person = {
    name: 'JS',
    age: 15
};

var keys = Object.keys(person); // [name, age] => person[name] = JS & person[age] = 15
console.log(keys);

var keys = Object.keys(book1.authors); 
for (var element of keys) {
    console.log(book1.authors[element]);
}
