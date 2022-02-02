const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 반복되는 string은 대문자로 변수 저장(실수x)
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 기본동작 수행 못하게 함
  loginForm.classList.add(HIDDEN_CLASSNAME); // 폼을 사라지게 함
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); // 유저명 기억하기
  paintGreetings(username); // 유저명을 받아서 인사
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; //h1에 텍스트 넣음, 백틱``으로 변수와 문자열 결합.
  greeting.classList.remove(HIDDEN_CLASSNAME); // h1이 화면상에서 사라지지 않게 함
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
