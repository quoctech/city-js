## Đề bài: Xây dựng ứng dụng Quản lý chi tiêu bằng JavaScript

### Yêu cầu chung:
1. Sử dụng JavaScript thuần (không sử dụng thư viện hoặc framework bên ngoài).

2. Chương trình chạy trên môi trường Node.js hoặc trình duyệt (sử dụng **console.log** để hiển thị kết quả).

3. Tập trung vào việc xử lý dữ liệu và logic bằng JavaScript.

### Mô tả bài toán:
Hãy xây dựng một ứng dụng quản lý chi tiêu cá nhân. Ứng dụng cho phép người dùng thực hiện các thao tác sau:
1. **Thêm khoản chi tiêu:** Người dùng có thể thêm một khoản chi tiêu với các thông tin: tên khoản chi, số tiền, danh mục (ví dụ: ăn uống, giải trí, mua sắm, ...), và ngày tháng.

2. **Xem tổng chi tiêu:** Tính và hiển thị tổng số tiền đã chi tiêu.

3. **Xem chi tiêu theo danh mục:** Hiển thị tổng số tiền đã chi tiêu cho từng danh mục.

4. **Xóa khoản chi tiêu:** Cho phép người dùng xóa một khoản chi tiêu dựa trên tên hoặc mã số.

5. **Xem lịch sử chi tiêu:** Hiển thị danh sách tất cả các khoản chi tiêu đã được thêm vào, sắp xếp theo ngày tháng.

### Yêu cầu chi tiết:
#### 1. **Cấu trúc dữ liệu:**
* Mỗi khoản chi tiêu là một đối tượng có cấu trúc như sau:

```javascript
{
  id: number, // Mã số duy nhất cho mỗi khoản chi tiêu
  name: string, // Tên khoản chi tiêu
  amount: number, // Số tiền
  category: string, // Danh mục chi tiêu
  date: string // Ngày tháng (định dạng YYYY-MM-DD)
}
```
* Sử dụng một array để lưu trữ tất cả các khoản chi tiêu.

#### 2. Các hàm cần triển khai:
* **addExpense(name, amount, category, date):** Thêm một khoản chi tiêu vào mảng.

* **getTotalExpense():** Trả về tổng số tiền đã chi tiêu.

* **getExpensesByCategory(category):** Trả về tổng số tiền đã chi tiêu cho một danh mục cụ thể.

* **deleteExpense(id):** Xóa một khoản chi tiêu dựa trên **id**.

* **viewExpenseHistory():** Hiển thị danh sách tất cả các khoản chi tiêu, sắp xếp theo ngày tháng.

#### 3. Xử lý lỗi:
* Kiểm tra dữ liệu đầu vào (ví dụ: số tiền phải là số dương, ngày tháng phải đúng định dạng).

* Thông báo lỗi nếu người dùng nhập sai dữ liệu.

### Ví dụ minh họa:
```javascript
// Thêm các khoản chi tiêu
addExpense("Mua sách", 200000, "Giáo dục", "2023-10-01");
addExpense("Ăn tối", 150000, "Ăn uống", "2023-10-02"); // Lỗi: "addExpense" viết sai
addExpense("Xem phim", 100000, "Giải trí", "2023-10-02");

// Xem tổng chi tiêu
console.log(getTotalExpense()); // Kết quả: 450000

// Xem chi tiêu theo danh mục
console.log(getExpensesByCategory("Giải trí")); // Kết quả: 100000

// Xóa khoản chi tiêu
deleteExpense(1); // Xóa khoản chi tiêu có id = 1

// Xem lịch sử chi tiêu
console.log(viewExpenseHistory());
/*
Kết quả:
[
  { id: 2, name: "Ăn tối", amount: 150000, category: "Ăn uống", date: "2023-10-02" },
  { id: 3, name: "Xem phim", amount: 100000, category: "Giải trí", date: "2023-10-02" }
]
*/
```

### Gợi ý:
1. Sử dụng **Date** để xử lý ngày tháng.

2. Sử dụng các phương thức của mảng như **push, filter, reduce, sort** để thao tác với dữ liệu.

3. Sử dụng **console.table** để hiển thị dữ liệu dạng bảng (nếu chạy trên trình duyệt).

### Tiêu chí đánh giá:
1. **Hoàn thành chức năng:** Ứng dụng thực hiện đầy đủ các yêu cầu.

2. **Code sạch và dễ đọc:** Code được tổ chức rõ ràng, có comment giải thích khi cần thiết.

3. **Xử lý lỗi:** Ứng dụng xử lý các trường hợp nhập liệu sai một cách hợp lý.

4. **Tối ưu hóa:** Code chạy hiệu quả, không có lỗi hoặc cảnh báo.

### Nâng cao (nếu có thời gian):
1. Thêm chức năng chỉnh sửa thông tin một khoản chi tiêu.

2. Thêm chức năng lọc chi tiêu theo khoảng thời gian (ví dụ: từ ngày A đến ngày B).

3. Lưu dữ liệu vào file JSON (nếu sử dụng Node.js) hoặc **localStorage** (nếu chạy trên trình duyệt).
