function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Veuillez entrer une tâche.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  li.appendChild(deleteBtn);

  li.onclick = () => {
    li.classList.toggle("completed");
  };

  taskList.appendChild(li);
  taskInput.value = "";
}
