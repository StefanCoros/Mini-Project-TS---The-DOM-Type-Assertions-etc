"use strict";
var btn = document.getElementById("btn");
var input = document.getElementById("todoinput");
btn.addEventListener("click", function () {
    alert(input.value);
});
