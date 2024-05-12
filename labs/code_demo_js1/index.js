// thêm mới, update, tìm kiếm theo tên.

const POSITION = {
    STAFF: 1,
    MANAGER: 2
};

const DEPARTMENT = {
    IT: 1,
    SALE: 2
};

const staffs = [
    { id: 1, fullName: 'Tran Kim Quoc', position: POSITION.STAFF, department: DEPARTMENT.IT, salary: 5000000 },
    { id: 2, fullName: 'Le Thi Theu', position: POSITION.STAFF, department: DEPARTMENT.IT, salary: 6000000 },
    { id: 3, fullName: 'Vu Thi My Linh', position: POSITION.STAFF, department: DEPARTMENT.SALE, salary: 7000000 }
];

function addEmployee(employee) {
    if (!employee) {
        return false;
    }

    for (const staff of staffs) {
        if (employee.id === staff.id) {
            return false;
        }
    }

    staffs.push(employee);
    return true;
}


console.log(`Trước khi thêm staff `, staffs);

const newStaff = { id: 4, fullName: 'Vu Anh Tuan', position: POSITION.STAFF, department: DEPARTMENT.SALE, salary: 10000000 };

const resultAddStaff = addEmployee(newStaff);

console.log(`Sau khi thêm staff `, staffs);

if (resultAddStaff) {
    console.log('Thêm nhân viên ' + newStaff.fullName + ' thành công');
} else {
    console.log('Thêm nhân viên thất bại');
}

// 1 2 3 4 -> 4 nhân viên: Quoc, Theu, Linh, Tuan -> done addEmployee


function updateEmployee(employee) {
    let isExistEmployess = false;
    for (const staff of staffs) {
        if (employee.id === staff.id) {
            isExistEmployess = true;
            break;
        }
    }
    
    if (!employee || !isExistEmployess) {
        return false;
    }

    let index = null; // index của phần tử cần update
    for (let i = 0; i < staffs.length; i++) {
        if (employee.id === staffs[i].id) {
            index = i;
            break;
        }
    }

    // xử lý update
    if (index !== null) {
        staffs[index].fullName = employee.fullName;
        staffs[index].position = employee.position;
        staffs[index].department = employee.department;
        staffs[index].salary = employee.salary;
        return true;
    }
}

const vuAnhTuan = { id: 4, fullName: 'Vu Anh Tuan', position: POSITION.MANAGER, department: DEPARTMENT.SALE, salary: 12000000 };


console.log('Trước khi cập nhật staff ', staffs);

const resultUpdateStaff = updateEmployee(vuAnhTuan);

console.log('Sau khi cập nhật staff ', staffs);

if (resultUpdateStaff) {
    console.log('Update nhân viên ' + vuAnhTuan.fullName + ' thành công');
} else {
    console.log('Cập nhật nhân viên thất bại!');
}

// 1 2 3 4 -> Quoc Theu, Linh. Tuan (updated - STAFF -> MANAGER, salary = 12k)

const nguyenTuanAnh = { id: 5, fullName: 'Nguyen Tuan Anh', position: POSITION.STAFF, department: DEPARTMENT.IT, salary: 10000000 };

addEmployee(nguyenTuanAnh);

/*
1 2 3 4 5 -> 
Quoc
Theu
Linh
Vu Tuan Anh (updated - STAFF -> MANAGER, salary = 12k)
Nguyen Tuan Anh 
*/

function searchEmployeesByName(name) {
    const data = [];

    if (!name) {
        return data;
    }

    for (let i = 0; i < staffs.length; i++) {
        if (staffs[i].fullName.indexOf(name) !== -1) {
            data.push(staffs[i]);
        }
    }

    return data;
}


let keyWord = 'Tuan Anh';
const resultSearchWithName = searchEmployeesByName(keyWord);

console.log('Danh sách nhân viên có từ khóa là ' + keyWord + ': ', resultSearchWithName);


