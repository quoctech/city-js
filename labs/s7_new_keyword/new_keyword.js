var mouse1 = {
    name: 'Mouse 1',
    color: 'black',
    weight: 0.2
};

var mouse2 = {
    name: 'Mouse 1',
    color: 'white',
    weight: 0.2
};

var mouse4 = {
    name: 'Mouse 4',
    color: 'white',
    weight: 0.2,
    eat: function(rice) {}
};

// Từ khóa new giúp ta tạo ra 1 đối tượng từ class hoặc Constructor Function

// Constructor Function
// Chú ý: Kí tự đầu tiên tên Function phải viết HOA (RULE CHUNG JS)
function Mouse(name, color, weight = 0.2) {
    // this trong ngữ cảnh (TA: context) chính là Mouse
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.eat = function(rice) {
        console.log(this.name + ' eating... ' + rice);
    }
}

var mouse3 = new Mouse('Mouse 3', 'black');
var mouse5 = new Mouse('Mouse 5', 'black');
var mouse6 = new Mouse('Mouse 6', 'black');

mouse3.eat('Ngô');

console.table([mouse3, mouse5, mouse6]);
