const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${min}:${sec}`;
}
getClock(); // 웹 로드되자 마자 실행
setInterval(getClock, 1000); // 매초마다 getClock 실행
