var tasksContainer = document.getElementById('tasks');
var tasks = ['Task 1', 'Task 2', 'Task 3'];

// Function vẽ tasks ra ngoài màn hình
function renderTasks() {
    var html = '';
    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        html += `<div class="task">
                    <div class="task-name">${task}</div>
                    <div class="btn-container">
                        <button class="btn-edit" onClick="editTask(${i})">E</button>
                        <button class="btn-delete" onClick="deleteTask(${i})">X</button>
                    </div>
                </div>`;
    }

    if (html) {
        tasksContainer.innerHTML = html;
    } else {
        tasksContainer.innerHTML = '<h2>Không còn data, hãy thêm task!</h2>';
    }
}


// function thêm mới task
function addTask(task) {
    if (task === '') {
        alert('Không được để trống tên công việc!');
    } else {
        // T1 T2 T3 - them T4 -> render lai UI
        tasks.push(task);
        renderTasks();
    }
}

var btnAddTask = document.getElementById('btn-add');
btnAddTask.addEventListener('click', function() {
    // this ở trường hợp, scope này chính là btnAddTask
    var txtTask = document.getElementById('txt-task');
    addTask(txtTask.value);

    // reset input về rỗng
    txtTask.value = '';
});


// function xóa task
function deleteTask(indexDel) {
    var temp = [];
    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];

        if (i != indexDel) {
            temp.push(task);
        }
    }

    tasks = temp;
    
    renderTasks();
}

renderTasks();
