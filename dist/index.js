"use strict";
var btn = document.getElementById("btn");
var input = document.getElementById("todoinput");
var form = document.getElementById("todoform");
var list = document.getElementById("todolist");
var readTodos = function () {
    var todosJSON = localStorage.getItem("todos");
    if (todosJSON) {
        return JSON.parse(todosJSON);
    }
    return [];
};
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
});
var createTodo = function (todo) {
    var newLi = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
};
var saveTodos = function () { return localStorage.setItem("todos", JSON.stringify(todos)); };
var todos = readTodos();
todos.forEach(function (todo) { return createTodo(todo); });
