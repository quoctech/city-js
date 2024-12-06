var tasksContainer = document.getElementById('tasks');
var tasks = ['Task 1', 'Task 2', 'Task 3'];

// Function vẽ tasks ra ngoài màn hình
function renderTasks() {
    var html = '';
    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        html += `<div class="task">
                    <input type="text" class="hide input-${i}" />
                    <div class="task-name task-name-${i}">${task}</div>
                    <div class="btn-container">
                        <button class="btn-edit btn-${i}" onClick="updateTask(${i})">E</button>
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
btnAddTask.addEventListener('click', function () {
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

function updateTask(indexUpdate) {
    var inputElement = document.querySelector(`.input-${indexUpdate}`);
    var taskNameElement = document.querySelector(`.task-name-${indexUpdate}`);
    var btnElement = document.querySelector(`.btn-${indexUpdate}`);

    if (btnElement.textContent === 'E') {
        // Logic update
        inputElement.classList.remove('hide');
        taskNameElement.classList.add('hide');
        btnElement.textContent = 'U';

        //Set value của input = giá trị lable hiện tại
        inputElement.value = taskNameElement.textContent;
    } else if (btnElement.textContent === 'U') {
        // Logic submit
        inputElement.classList.add('hide');
        taskNameElement.classList.remove('hide');
        btnElement.textContent = 'E';

        if (inputElement.value === '') {
            alert('Không được để trống tên công việc -- Update');
        } else {
            taskNameElement.textContent = inputElement.value;
            tasks[indexUpdate] = inputElement.value;

            //update UI xong thì reset input update
            inputElement.value = '';
        }

    }
}

renderTasks();
