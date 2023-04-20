const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const STRIKE_CLASSNAME = 'strike-through';
const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
  // update toDos
  toDos = toDos.filter((toDoItem) => toDoItem.id !== parseInt(li.id));
  saveToDos();
}

function checkToDo(event) {
  const span = event.target.parentElement.parentElement.querySelector('span');
  if (!span.classList.contains(STRIKE_CLASSNAME)) {
    span.classList.add(STRIKE_CLASSNAME);
  } else {
    span.classList.remove(STRIKE_CLASSNAME);
  }
}

function paintToDo(toDoObj) {
  const li = document.createElement('li');
  li.id = toDoObj.id;

  const span = document.createElement('span');
  span.innerText = toDoObj.text;

  const checkBtn = document.createElement('button');
  const checkIcon = document.createElement('i');
  checkIcon.classList.add('fa-solid', 'fa-check', 'color-green');
  checkBtn.appendChild(checkIcon);
  checkBtn.addEventListener('click', checkToDo);
  const deleteBtn = document.createElement('button');
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fa-solid', 'fa-xmark', 'color-red');
  deleteBtn.appendChild(deleteIcon);
  deleteBtn.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(checkBtn);
  li.appendChild(deleteBtn);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  toDoInput.value = '';
  paintToDo(newToDoObj);
  saveToDos();
}
toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
