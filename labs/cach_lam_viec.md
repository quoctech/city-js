# Phân Tích Nghiệp Vụ Phần Mềm

## 1. Giới Thiệu
Bài toán yêu cầu xử lý danh sách theo thứ tự ưu tiên, trong đó thứ tự ưu tiên nhỏ hơn được xếp trước.

### 1.1. Yêu cầu
**Thứ tự ưu tiên của các task:**

| Tên | Thứ tự ưu tiên |
|------|-----------------|
| a    | 3               |
| b    | 1               |
| c    | 2               |

### 1.2. Dữ liệu input (Sai)
| ^  | v  | Priority |
|----|----|----------|
| a  | c  | 2        |
| b  | b  | 1        |
| c  | a  | 3        |

### 1.3. Dữ liệu output mong muốn (Correct)
| ^  | v  |
|----|----|
| b  | a  |
| c  | c  |
| a  | b  |

## 2. Quy Trình Phát Triển

### 2.1. Nhận Yêu Cầu
- Phải hiểu rõ yêu cầu từ khách hàng/quản lý.
- Nếu chưa hiểu rõ, cần đặt câu hỏi.
- KHÔNG làm theo ý hiểu cá nhân.

### 2.2. Phân Tích
- Xem xét nghiệp vụ, kiểm tra các luồng tồn tại.
- Kiểm tra giao diện (nếu áp dụng), tìm đoạn code cần chỉnh sửa.

#### 2.2.1. Phân tích các vấn đề
- Hiện tại danh sách task chưa có "priority".
- Giải pháp: Biến mảng string thành mảng object.

#### 2.2.2. Chuyển đổ dữ liệu
Trồng dữ liệu hiện tại:
```json
["a", "b", "c"]
```
Sửa thành:
```json
[
  {"name": "a", "priority": 3},
  {"name": "b", "priority": 1},
  {"name": "c", "priority": 2}
]
```

### 2.3. Khoanh Vùng Ảnh Hưởng
- Các chức năng bị ảnh hưởng:
  - Render danh sách task.
  - Cập nhật task.
  - Thêm task mới.

## 3. Triển Khai

### 3.1. Cài Đặt
- Viết lại hạm sắp xếp task theo priority.
- Cập nhật giao diện nếu có.

### 3.2. Kiểm Thử
- Tự test sau khi code xong.
- Kiểm tra xem các chức năng bị ảnh hưởng có hoạt động đúng không.

## 4. Kết Luận
### 4.1. Quy Trình Chuẩn
1. **Nhận yêu cầu** (O)
2. **Phân tích** (O)
3. **Đề xuất giải pháp** (X)
4. **Code + Self Test** (X)
5. **Test hoàn chỉnh** (X)

### 4.2. Bài Học Rút Ra
- Cần tuân thủ quy trình nghiêm ngặt.
- Hiểu rõ nghiệp vụ trước khi code.
- Luôn xác định các tác động liên quan khi thay đổi code.

## 5. Tài Liệu Liên Quan
- [Best Practices for Software Development](https://example.com/best-practices)
- [Agile Development Guide](https://example.com/agile-guide)

