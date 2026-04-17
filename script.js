const addToBtn = document.getElementById("addToBtn");
const inputBtn = document.getElementById("input");
const listContainer = document.getElementById("taskList");

addToBtn.addEventListener("click", extractText);

let tasks = [];

function extractText() {
  let extractedText = document.getElementById("input").value.trim("");
  if (extractedText.length === 0) {
    alert("Task cannot be empty");
    return;
  }
  let task = { id: Date.now(), task: extractedText, isCompleted: false };
  tasks.push(task);
  console.log(tasks);
  displayTasks();
  inputBtn.value = " ";
}
// function deleteTask() {}

function displayTasks() {
  listContainer.innerHTML = "";
  tasks.forEach((task) => {
    const div = document.createElement("div");
    listContainer.appendChild(div);
    const CheckboxIcon = document.createElement("img");
    CheckboxIcon.src = "./images/checked.png";
    div.appendChild(CheckboxIcon);
    div.textContent = task.task;
  });
}
