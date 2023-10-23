document.addEventListener("DOMContentLoaded", function() {
    var taskInput = document.getElementById("task");
    var addTaskButton = document.getElementById("addTask");
    var taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        var taskText = taskInput.value.trim();

        if (taskText !== "") {
            var listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(listItem);

            taskInput.value = "";

            var deleteButton = listItem.querySelector(".delete");
            deleteButton.addEventListener("click", function() {
                taskList.removeChild(listItem);
            });
        }
    });
    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});