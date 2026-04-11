const input = document.getElementById("input");
const lists = document.getElementById("lists");
const edit = document.getElementById("edit");
const remove = document.getElementById("remove");

function addEvent() {
  const text = document.getElementById("input").value;
  let myTasks = [{}];

  console.log(text);
  myTasks.push({ Tasks: input.value });
  // console.log(myTasks);
  // input.value = "";
}

// console.log(myTasks);
