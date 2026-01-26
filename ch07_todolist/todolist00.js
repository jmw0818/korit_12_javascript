const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 테마 변경 함수
function changeTheme(themeName) {
  document.body.className = themeName;
  localStorage.setItem('selected-theme', themeName);
}

// 로컬스토리지에서 테마와 목록 불러오기
let todos = JSON.parse(localStorage.getItem('todos')) || [];
const savedTheme = localStorage.getItem('selected-theme') || 'theme-dark';
document.body.className = savedTheme;

function renderTodos() {
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    if (todo.completed) {
      li.classList.add('todo-item--completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-item__checkbox';
    checkbox.checked = todo.completed;

    const span = document.createElement('span');
    span.className = 'todo-item__text';
    span.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'todo-item__delete-btn';
    deleteBtn.innerHTML = '&times;';

    // 이벤트 연결
    checkbox.addEventListener('change', () => {
      todos[index].completed = checkbox.checked;
      li.classList.toggle('todo-item--completed', checkbox.checked);
      saveTodos();
    });

    deleteBtn.addEventListener('click', () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos(); // 리스트 갱신
    });

    li.append(checkbox, span, deleteBtn);
    todoList.appendChild(li);
  });
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === '') {
    alert('내용을 입력하세요');
    return;
  }
  const newTodo = {
    text: todoText,
    completed: false,
  };
  todos.push(newTodo);
  todoInput.value = '';
  saveTodos();
  renderTodos();
}

addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') addTodo();
});

// 초기 실행
window.onload = renderTodos;