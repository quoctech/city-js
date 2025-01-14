/**
 * Đối tượng Date trong JavaScript
 * 
 * Câu lệnh new Date() thì nó sẽ trả về 1 đối tượng Date đại diện cho thời điểm hiện tại của hệ thống.
 * 
 * VD:  2025-01-14T17:04:45.838Z 
 * Trong đó:
 * - 2025-01-14: Đây là ngày 14 tháng 1 năm 2025.
 * - T17:04:45.838: Đây là thời gian: 17 giờ 4 phút 45 giây và 838 mili giây.
 * - Z: Ký tự "Z" ở cuối cho biết đây là thời gian UTC (Coordinated Universal Time).
 *      Đây là múi giờ chuẩn được sử dụng trên toàn thế giới.
 * 
 * Vì sao lại là giờ UTC?
 * Tiêu chuẩn: UTC là tiêu chuẩn thời gian quốc tế, giúp cho các hệ thống máy tính trên toàn thế giới đồng bộ về thời gian.
 */

var now = new Date();
//console.log(now); // sẽ ra 2025-01-14T17:14:23.512Z là thời điểm soạn bài này. Giờ Việt Nam múi giờ +7
// Thì cách tính sẽ là 17:14 + 7 = 00:14
// VD thêm nếu là giờ Nhật thì là +9 (Cách Việt Nam 2 giờ) thì cách tính sẽ là 17:14 + 9 = 02:14

// Custom hiển thị format thời gian với toLocaleDateString
var options = { 
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
};

// console.log(now.toLocaleDateString('vi-VN', options));

// new Date() là lấy thời gian hiện tại của hệ thống.
// Ta cũng có thể truyền thời gian mong muốn vào constructor Date()

var birthDay = new Date('1997-09-22 12:00');
console.log(birthDay); // Output: 1997-09-22T00:00:00.000Z

birthDay.getDate(); // 22
birthDay.getMonth(); // 8. Tại sao không phải là tháng 9?
// Vì trong JS tháng sẽ bắt đầu từ 0 - 11
birthDay.getFullYear(); // 1997

var formatDate = `${birthDay.getDate()}/${birthDay.getUTCMonth() + 1}/${birthDay.getFullYear()} ${birthDay.getHours()}:${birthDay.getMinutes()}`;
console.log(formatDate); // 22/9/1997 12:0

// Trong thưc tế thì ít sử dụng Date thuần JS. 
// Mà người ta dùng 1 lib có tên là moment.js (Sẽ học sau, sau khi học xong cách install package trong Node)
