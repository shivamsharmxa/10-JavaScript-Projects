const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

// Retrieve todos from local storage when the page loads
const todos = JSON.parse(localStorage.getItem("todos"));

// If there are todos, add each one to the list
if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

// Add a submit event listener to the form
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Add a new todo
    addTodo();
});

// Function to add a todo to the list
function addTodo(todo) {
    let todoText = input.value;

    // If a todo object is provided, use its text value
    if (todo) {
        todoText = todo.text;
    }

    // Check if the todoText is not empty
    if (todoText) {
        // Create a new list item element
        const todoEl = document.createElement("li");

        // Add "completed" class if the todo is completed
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        // Set the inner text of the list item to the todoText
        todoEl.innerText = todoText;

        // Add click event listener to toggle "completed" class
        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");

            // Update local storage after a todo is toggled
            updateLS();
        });

        // Add contextmenu event listener to remove a todo on right-click
        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            // Remove the todo element
            todoEl.remove();

            // Update local storage after a todo is removed
            updateLS();
        });

        // Append the todo element to the todos unordered list
        todosUL.appendChild(todoEl);

        // Clear the input field
        input.value = "";

        // Update local storage after a new todo is added
        updateLS();
    }
}

// Function to update local storage with the current state of todos
function updateLS() {
    // Select all list items within the todos unordered list
    const todosEl = document.querySelectorAll("li");

    // Create an array to store todo objects
    const todos = [];

    // Iterate over each todo element
    todosEl.forEach((todoEl) => {
        // Add a todo object to the array with text and completion status
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    // Convert the array of todos to a JSON string and store it in local storage
    localStorage.setItem("todos", JSON.stringify(todos));
}
