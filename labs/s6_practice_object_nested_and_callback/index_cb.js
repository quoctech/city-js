function sayHi(name, age, callback, cb2) {
    console.log('Hi', name, age, callback, cb2);
    callback({name: 'JS'}); //  lời gọi hàm
}
// Callback handleXYZ
function handleXYZ(data) { console.log('handle xyz: ', data); }
function sum(a, b) { return a + b; }
sayHi(null, 18, handleXYZ, sum(1, 2));