interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.getElementById("todoform");
const list = document.getElementById("todolist")!;

const readTodos = (): Todo[] => {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON) {
    return JSON.parse(todosJSON);
  }
  return [];
};

form?.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);

  saveTodos();

  input.value = "";
});

const createTodo = (todo: Todo) => {
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    saveTodos();
  });
  newLi.append(todo.text);
  newLi.append(checkbox);
  list.append(newLi);
};

const saveTodos = () => localStorage.setItem("todos", JSON.stringify(todos));

const todos: Todo[] = readTodos();
todos.forEach((todo) => createTodo(todo));
