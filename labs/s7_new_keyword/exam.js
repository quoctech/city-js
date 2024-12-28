/**
 * Bài tập:
 * Tạo ra 3 con chuột gồm thuộc tính:
 *  name, color, weight
 * 
 * Tạo ra 1 con mèo tên Tom gồm thuộc tính
 *  name, color, weight, stomach
 * 
 * Nhiệm vụ:
 *  Hãy convert từ object thường sang Constructor Function
 */
var m1 = {
    name: 'M 1',
    color: 'black',
    weight: 0.2
};

var m2 = {
    name: 'M 2',
    color: 'white',
    weight: 0.3
};

var m3 = {
    name: 'M 3',
    color: 'black',
    weight: 0.5
};

var tom = {
    name: 'Tom',
    color: 'blue',
    weight: 4,
    stomach: [],
    eat: function(mouse) {
        this.stomach.push(mouse);
        return this; // method chaining
    }
};

// method chaining
/*tom.eat(m1);
tom.eat(m2);
tom.eat(m3);*/
tom.eat(m1).eat(m2).eat(m3);
console.log(tom);
