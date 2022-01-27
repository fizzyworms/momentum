const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //array 를 저장 console.log ['a', 'b', 's'] localStorage a,b,c  -->JSON.stringify적용 후  console.log ['f', 'd', 's'] localStorage["f","d","s"]
}

function deleteToDo(event) {
  const li = event.target.parentElement; // 삭제하고 싶은 li
  li.remove(); // li 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span"); // span을 이용해서 li 만들기
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // li 내부에 span 넣기(html 요소 만들기)
  li.appendChild(button); //append는 맨 마지막에 놓여지므로 button은 span 뒤에 놓인다.
  toDoList.appendChild(li); // ul 내부에 li 넣기 -----> 문제점: 새로고침하면 투두리스트 사라짐, 지우기 버튼 없음
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //인풋의 현재 값을 새로운 변수에 복사하는 것.
  toDoInput.value = ""; // 엔터누를때마다 인풋 비어있게 하기. newTodo 변수와 전혀 상관 없음.
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // 배열에 obj 저장
  paintToDo(newTodoObj); // todo 항목 표시하기,
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //배열 반한
  toDos = parsedToDos; // 이전 입력값 복원
  parsedToDos.forEach(paintToDo); // parsedToDos의 각각의 item에 대하여 한개의 함수 실행(화살표함수),
}
