const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //<img> 생성

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // body에 이미지 추가하기
