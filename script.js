const addToBtn = document.getElementById("addToBtn");
const inputBtn = document.getElementById("input");
const listContainer = document.getElementById("taskList");

addToBtn.addEventListener("click", extractText);

let tasks = [];
const saved = localStorage.getItem("tasks");

if (saved) {
  tasks = JSON.parse(saved);
  displayTasks();
}

function extractText() {
  let extractedText = document.getElementById("input").value.trim("");
  if (extractedText.length === 0) {
    alert("Task cannot be empty");
    return;
  }
  let task = { id: Date.now(), task: extractedText, isCompleted: false };
  tasks.push(task);
  saveTasks();
  // console.log(tasks);
  displayTasks();
  inputBtn.value = " ";
}
// function deleteTask() {}

function displayTasks() {
  listContainer.innerHTML = "";
  tasks.forEach((task) => {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const icon = document.createElement("i");

    div.classList.add("task-container");
    icon.classList.add("remove-button");
    span.classList.add("task-text");
    if (task.isCompleted === true) {
      const checkboxIcon = document.createElement("img");
      checkboxIcon.src = "./images/checked.png";
      checkboxIcon.classList.add("check-box");
      checkboxIcon.addEventListener("click", function () {
        toggleFn(task);
      });
      div.appendChild(checkboxIcon);
    } else {
      const uncheckBoxIcon = document.createElement("img");
      uncheckBoxIcon.src = "./images/unchecked.png";
      uncheckBoxIcon.classList.add("uncheck-box");
      uncheckBoxIcon.addEventListener("click", function () {
        toggleFn(task);
      });
      div.appendChild(uncheckBoxIcon);
    }
    icon.classList.add("fa-solid", "fa-xmark");
    icon.addEventListener("click", function () {
      deleteTask(task);
    });
    div.appendChild(span);
    span.textContent = task.task;
    if (task.isCompleted === true) {
      span.classList.add("completed");
    }

    span.addEventListener("click", function () {
      toggleFn(task);
    });
    div.appendChild(icon);
    listContainer.appendChild(div);
  });
}

function toggleFn(task) {
  task.isCompleted = !task.isCompleted;
  displayTasks();
  saveTasks();
}

function deleteTask(task) {
  const index = tasks.indexOf(task);
  if (index > -1) {
    tasks.splice(index, 1);
  }

  displayTasks();
  saveTasks();
}

inputBtn.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addToBtn.click();
  }
});

function saveTasks() {
  const data = JSON.stringify(tasks);
  localStorage.setItem("tasks", data);
}
