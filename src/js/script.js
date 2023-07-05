/*
  Реализация слайдера
*/
const sliderImages = document.querySelectorAll('.slider img');
let currentImageIndex = 0;

// Функция для отображения следующего изображения слайдера
function showNextImage() {
  
  sliderImages[currentImageIndex].classList.remove('active'); 
  currentImageIndex = (currentImageIndex + 1) % sliderImages.length;  
  sliderImages[currentImageIndex].classList.add('active');
}
sliderImages[currentImageIndex].classList.add('active');
setInterval(showNextImage, 4000);

/*
  Получение времени и даты
*/
const leftContainer = document.querySelector(".continer-left-background-overlay");
const time = document.getElementById("time");
const date = document.getElementById("date");
const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря"
];
function generateDate(){
  const date = new Date();    
  const day = date.getDate(); 
  const month = months[date.getMonth()]; 
  const year = date.getFullYear();  
  let beautifulDate;
  beautifulDate = `${day} ${month} ${year}`;
  return beautifulDate;
}
function generateTime() {
  const date = new Date();
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  const timeString = `${hours.padStart(2,"0")}:${minutes.padStart(2,"0")}`;
  return timeString;
}

function generateDateTime(){
  return `<div class="container-left-datetime">
            <div class="time" id ="time"><h2>${generateTime()}</h2></div>
            <div class="date" id="date"><h2>${generateDate()}</h2></div>
            <div class="weather" id="weather"><h2>16°C</h2></div>
          </div>`
}

if (leftContainer) {
  leftContainer.insertAdjacentHTML('afterbegin', generateDateTime());
}

/*
  Реализация кнопок смены языка
*/
const buttons = document.querySelectorAll(".button-leng");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const activeButtonId = document.getElementById("active").id;
    const activeButton = document.getElementById(activeButtonId);

    // Перемещаем текущую активную кнопку перед нажатой кнопкой
    button.parentNode.insertBefore(activeButton, button);

    // Устанавливаем активной кнопку, на которую нажали
    activeButton.id = button.id;
    button.id = "active";
  });
});

/*
  Кнопка-глазик
*/
const eyeButton = document.getElementById("icon-eye");
eyeButton.addEventListener("click", () => {
  const computedStyle = getComputedStyle(eyeButton);
  if (computedStyle.backgroundColor === "rgb(14, 97, 151)") {
    eyeButton.style.backgroundColor = "white";
  } else {
    eyeButton.style.backgroundColor = "rgb(14, 97, 151)";

  }
});

/*
  Пункты меню
*/
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach(menuItem => {
  menuItem.addEventListener("click", function onClick(event) {
    const h1Element = menuItem.querySelector('h1');
    
    // Сбрасываем цвет всех элементов меню
    menuItems.forEach(item => {
      const h1Element = item.querySelector('h1');
      item.style.backgroundColor = "";
      h1Element.style.color = "rgba(14, 97, 151, 1)";
    });

    // Устанавливаем цвет нажатого элемента
    menuItem.style.backgroundColor = "rgba(14, 97, 151, 1)";
    h1Element.style.color = "white";
  });
});
