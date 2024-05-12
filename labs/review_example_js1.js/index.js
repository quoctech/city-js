// 1. Viết mã JavaScript để tạo cấu trúc dữ liệu cho nhân viên bao gồm:												
// 	+ id: Mã nhân viên (int)											
// 	+ fullName: Họ tên (string)											
// 	+ position: Chức vụ (string)											
// 	+ department: Phòng ban (string)											
// 	+ salary: Lương (floag)								

const POSITION = {
    STAFF: 1,
    MANAGER: 2
};

const DEPARTMENT = {
    IT: 1,
    SALE: 2
}


const staffs = [
    { id: 1, fullName: 'Tran Kim Quoc', position: POSITION.STAFF, department: DEPARTMENT.IT, salary: 5000000 },
    {id: 2, fullName: 'Le Thi Theu', position: POSITION.STAFF, department: DEPARTMENT.IT, salary: 6000000}
    { id: 3, fullName: 'Vu Thi My Linh', position: POSITION.STAFF, department: DEPARTMENT.SALE, salary: 7000000 },
    
];


/*2. Tạo các hàm để thực hiện các chức năng:												
	+ getAllEmployees(): Lấy danh sách tất cả nhân viên.
    Chỉ cần trả về mảng staffs -> console.log là xong.

	+ getEmployeeById(id): Lấy thông tin nhân viên theo mã nhân viên.		
    - tham số id là 1 số nguyên, id là duy nhất
    - Có 1 danh sách các phần tử là staff. Trong staff thì có thuộc tính id.
    - Danh sách staffs -> lặp, sau đó check id là tham số truyền vào.
    - Nếu tìm staff.id có id trùng với tham số truyền vào thì return staff đó luôn
    - trả về (retturn 1 phần tử -> trả về data bình thường)
    - data bình thường: số, string, bool, .... Ngoại trừ array.

	+ addEmployee(employee): Thêm nhân viên mới.											
    - tham số employee là 1 object, bao gồm các thông tin như: id, fullName....
    - push tham số employee vào mảng staffs là xong. 
    - trả về (return về boolean) -> khi add staff thành công thì tôi return true. 
    - Khi nào return false? -> 1, employee đã tồn tại || 2. employee = null

	+ updateEmployee(employee): Cập nhật thông tin nhân viên.
    - tham số employee là 1 object, bao gồm các thông tin như: id, fullName...
    - Lặp danh sách staffs -> phải check tham số employee.id phải tồn tại trong staffs
    - Nếu tồn tại -> tiến hành update thuộc tính truyền vào.
    - Nếu ko tồn tại -> return null hoặc là thêm mới -> tuỳ bàn toán yêu cầu.
    - trả về boolean -> true khi update thành công
    - false khi? -> ko tìm thấy phàn tử  employee trong staffs ||  employee =

	+ deleteEmployeeById(id): Xóa nhân viên theo mã nhân viên.		
    - Tham số id là số nguyên
    - Lặp staffs theo index -> tìm kiếm item.id = id -> get được index của phần tử
    - delete staffs[index]
    - id ko tồn tại, ko tìm thấy trong staffs -> ko xóa thôi
    - trả về boolean -> true khi delete thành công
    - false khi? -> ko tìm thấy phàn tử  employee trong staffs ||  employee = null



	+ searchEmployeesByName(name): Tìm kiếm nhân viên theo tên. (READ)
    - Tham số name là 1 chuỗi
    - Lặp staff theo index
    - Tìm kiếm item.name.indexOf('Quoc') -> item
    - khởi tạo 1 biến data = [];
    - Sau khi get được item thì minh push vào mảng data
    - và trả về data. 
    - return về 1 danh sách staff. Vì trả về nhiều nhân viên trùng tên.

    [Quoc Quoc2, Quoc3, Theu] => name = Quoc => [Quoc, Quoc2, Quoc3]
*/

