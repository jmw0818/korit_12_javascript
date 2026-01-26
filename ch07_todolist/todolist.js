const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
// 메서드의 결과값을 변수에 대입
// document가 html 문서의 영역들을 나타낸다.
// .getElementById(argument); 태그들 중 특정 argument를 가지는 html 요소를 
// JavaScript의 객체명으로 불러낼 수 있다는 것을 의미한다.

// 처음 페이지에 들어갔을 때 localStorage에 저장된 기존의 todo가 있는지 확인하겠다.
let todos = JSON.parse(localStorage.getItem('todos')) || [];
// 맨처음에 아무것도 없다면 오류가 발생할것임. -> 그래서 || 연산자를 통해 빈 배열을 todos 변수에 넣겠다고 했음.
// 배열로 작성한 것은 일단 todo들이 여러개 있고, 내부 element의 자료형은 JS 객체가 될것이다.
// 그 안에 boolean과 string 등이 들어갈 것이기 때문에

function renderTodos() {
  // 기존 todo list를 초기화 -> 추가했을 때 누적 안되게 할것임.
  todoList.innerHTML = '';  // todos가 아닌 todoList이다. 차이 확인 -> todos는 localStorage 내부의 value에 해당하고, todoList는 ul 태그가 포함된 HTML element에 해당한다.

  // todos를 반복으로 돌려서 html 요소로 만들어 줄 것임.
  todos.forEach((todo, index) => {
    /*
      todos의 반복을 돌면 내부 todo가 존재할 것이다.
    */
    // li 태그를 만들겠다.
    const li = document.createElement('li');
    // css를 적용시키기위해 클래스 이름을 정한다.
    li.className = 'todo-item';   // field값 대입하는 방식.
    if(todo.completed) {
      /* 
        localStorage의 todos key의 내부를 확인하면 배열로 저장되어있다.
        거기의 element는 개체인데, 내부에 completed key를 가지는
        boolean 자료형이 있을 것이다.(체크박스),
        true일때와 false일때의 css를 별개로 나누기 위해
        true라면 이하처럼 completed라는 class를 추가한다.
      */
      li.classList.add('completed');
    }
    // li태그 내부에도 특정 html 요소를 집어넣기로 했다.
    const checkbox = document.createElement('input');
    // 그냥 생성하면 type=text이니
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    // 텍스트 생성부분, checkbox랑 같은 줄에 있어야 하니 span사용
    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todo.text;
    
    // 삭제 버튼
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    // todo 하나마다 있어야하기 때문에 반복문 내에 있다. add-btn과의 차이점을 꼭 확인
    deleteBtn.innerHTML = '&times'; // x 기호에 해당

    // 위에서 만든 변수들을 li 변수에 추가
    li.append(checkbox);
    li.append(span);
    li.append(deleteBtn);

    todoList.appendChild(li);

    // 체크박스 버튼을 누럴ㅆ을 때 todo.completed의 값이 변경되는 부분
    checkbox.addEventListener('change', () => {
      todos[index].completed = checkbox.checked;
      // 완료 상태가 됐을 때 CSS를 서로 다르게 적용
      li.classList.toggle('completed', checkbox.checked);
      saveTodos();
    })
    // 삭제버튼 클릭 이벤트
    deleteBtn.addEventListener('click', () => {
      const itemText = span.textContent;
  
      const itemIndex = todos.findIndex(todo => todo.text === itemText);
      // 인덱스가 일치하는 것을 삭제
      if (itemIndex !== -1) { // 일치하는 인덱스가 없으면 -1이라서
        todos.splice(itemIndex, 1)
        // 삭제하는데, li 태그랑은 상관이 없기 때문에 추가로 삭제해야한다.
        li.remove();
        saveTodos();
      }
    })
  });
}

function saveTodos() {
  // 체크박스 변동이 일어났을 때 상태를 저장하는 함수 -> localStorage에
  localStorage.setItem('todos', JSON.stringify(todos));
  // 1번 매개변수 - key 이름 / 2번 매개변수 - value를 집어넣는다.
}

function addTodo() {
  const todoText = todoInput.value.trim();
  if(todoText ==='') {
    alert('내용을 입력하세요');
    return;
  }
  const newTodo = {
    text: todoText,
    completed: false,   // 초기 생성시에 false로 고정한다는 의미
  }

  // 위에서 생성된 newTodo 객체는 todos의 element가 되어야 한다.
  todos.push(newTodo);
  // 추가한 이후에 input 태그 내에 작성된 text를 날려야한다.(주석처리)
  todoInput.value ='';
  renderTodos();  // 추가 버튼 누르고 나면 localStorage에 추가된 배열을 가지고 와야 한다.
  saveTodos();  // 저장도 해야한다.
}
// 이상의 부분이 todo list에 사용되는 함수들을 정의한 것이다.
// 하지만 특정 행위가 일어났을 때 이 함수들이 호출되어야 한다.

// 추가 버튼을 눌렀을 때 addTodo()를 호출할 예정
// 버튼 태그에 딸려있는 메서드를 사용해야 한다. (사실상 매번 이루어지는 방식)
addBtn.addEventListener('click', addTodo);
// 하지만 addTodo()가 아니라, addTodo이다. addTodo()는 함수의 결과값이 들어간 것이고,
// addTodo는 함수 자체를 넣은것이다.

todoInput.addEventListener('keydown', event =>{
  if(event.key === 'Enter') {
    addTodo();
  }
})



// 새로고침 했을 떄, 혹은 페이지 들어갔을 때 renderTodos()가 일단 한번 호출이 되어야한다.
window.onload = renderTodos();