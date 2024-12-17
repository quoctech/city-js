// Khai báo DOM (Document Object Model)
var tasksContainer = document.getElementById('tasks');
var btnAddTask = document.getElementById('btn-add');
var btnLangVi = document.getElementById('lang-vi');
var btnLangEn = document.getElementById('lang-en');


// Khai báo các data
var tasks = ['Task 1', 'Task 2', 'Task 3'];
var defaultLang = "vi";

// Khai báo dữ liệu đa ngôn ngữ (Giả sữ dữ liệu language lấy từ database)
var language = {
  vi: {
    app_name: "Quản lý công việc",
    enter_task: "Nhập công việc",
    add_task: "Thêm công việc",
    content_alert: "Tồn tại task!!!",
    empty_alert: "Không được để trống tên công việc!",
    update_alert: "Không được để trống tên công việc -- Update",
    add_data: "Không còn data, hãy thêm task!",
  },

  en: {
    app_name: "Todo App",
    enter_task: "Enter task",
    add_task: "Add task",
    content_alert: "Exist task!!!",
    empty_alert: "Task name cannot be empty!",
    update_alert: "Task name cannot be empty -- Update",
    add_data: "No data, please add tasks!",
  },
};

// Function này FAKE render template language
function renderTemplate(lang = "vi") {
  defaultLang = lang;
  var appName = document.getElementById("appname");
  var enterTask = document.getElementById("txt-task"); // INPUT TAG

  appName.textContent = language[lang].app_name;
  enterTask.placeholder = language[lang].enter_task;
  btnAddTask.textContent = language[lang].add_task;
  renderTasks();
}

// Function vẽ tasks ra ngoài màn hình
function renderTasks() {
  var html = "";
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
    tasksContainer.innerHTML = `<h2>${language[defaultLang].add_data}</h2>`;
  }
}

// function thêm mới task
function addTask(task) {
  if (task === "") {
    alert(language[defaultLang].empty_alert);
  } else {
    // T1 T2 T3 - them T4 -> render lai UI
    tasks.push(task);
    renderTasks();
  }
}

// function kiểm tra tồn tại task trong mảng tasks
function checkExistTask(value) {
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    if (value == task) {
      // tồn tại task
      return true;
    }
  }

  return false;
}

btnAddTask.addEventListener("click", function () {
  // this ở trường hợp, scope này chính là btnAddTask
  var txtTask = document.getElementById("txt-task");

  /**
   * Đoạn code check tồn tại task
   * Có 2 kiểu, tùy ý
   *
   * 1. tách function rồi call ở đây
   * 2. xử lý ngay tại đây
   *
   * Nếu mà trùng lặp task thì show alert.
   * Nếu không trùng lặp thì add task bình thường
   */

  if (checkExistTask(txtTask.value)) {
    return alert(language[defaultLang].content_alert);
  }

  addTask(txtTask.value);

  // reset input về rỗng
  txtTask.value = "";
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

  if (btnElement.textContent === "E") {
    // Logic update
    inputElement.classList.remove("hide");
    taskNameElement.classList.add("hide");
    btnElement.textContent = "U";

    //Set value của input = giá trị lable hiện tại
    inputElement.value = taskNameElement.textContent;
  } else if (btnElement.textContent === "U") {
    // Logic submit
    inputElement.classList.add("hide");
    taskNameElement.classList.remove("hide");
    btnElement.textContent = "E";

    // check tồn tại task
    if (checkExistTask(inputElement.value)) {
      alert(language[defaultLang].content_alert);
    } else if (inputElement.value === "") {
      alert(language[defaultLang].update_alert);
    } else {
      taskNameElement.textContent = inputElement.value;
      tasks[indexUpdate] = inputElement.value;

      //update UI xong thì reset input update
      inputElement.value = "";
    }
  }
}

btnLangVi.addEventListener('click', function() {
    renderTemplate('vi');
    btnLangEn.classList.remove('language-selected');
    btnLangVi.classList.add('language-selected');
});

btnLangEn.addEventListener('click', function() {
    renderTemplate('en');
    btnLangEn.classList.add('language-selected');
    btnLangVi.classList.remove('language-selected');
});

renderTasks();
renderTemplate();
