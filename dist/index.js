"use strict";
var btn = document.getElementById("btn");
var input = document.getElementById("todoinput");
var form = document.getElementById("todoform");
var list = document.getElementById("todolist");
var todos = [];
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    input.value = "";
});
var createTodo = function (todo) {
    var newLi = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
};
