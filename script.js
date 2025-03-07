document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    todoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = "";
    });

    function addTodoItem(todoText) {
        if (todoText.trim() === "") return;

        const li = document.createElement("li");
        li.textContent = todoText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(deleteButton);
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        todoList.appendChild(li);
    }
});
