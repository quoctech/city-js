// JSON object
// 1. stringify - chuyển đổi 1 object trong JS thành 1 JSON string
// 2. parse - chuyển đổi 1 JSON string sang 1 object trong JS

var cat = {
    name: 'Tom',
    color: 'Blue'
};

var stringifyCat = JSON.stringify(cat); // 1 string {"name":"Tom","color":"Blue"}
typeof stringifyCat; // string

stringifyCat.name; // undefined 
// vì stringifyCat lúc này là 1 string 
//CHÚ Ý: String trong JS là 1 object nên có thể ',' gọi phuơng thức hoặc thuộc tính bình thường
// String không có thuộc tính name khi stringifyCat.name sẽ là undefined
// 'text demo'.name; -> undefined


// Chuyển đổi stringify sang object
var catParseJSON = JSON.parse(stringifyCat); // 1 object { name: 'Tom', color: 'Blue' }
typeof catParseJSON; // object

catParseJSON.name; // Tom
// Vì catParseJSON lúc này là 1 object
