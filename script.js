const addToBtn = document.getElementById("addToBtn");
const inputBtn = document.getElementById("input");
const iconBtn = document.getElementById("icons");
const removeBtn = document.getElementById("remove");
const editBtn = document.getElementById("edit");

addToBtn.addEventListener("click", extractText);
removeBtn.addEventListener("click", deleteTask);

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

  inputBtn.value = " ";
}
function deleteTask() {}
