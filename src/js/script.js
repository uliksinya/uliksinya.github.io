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
const buttons = document.querySelectorAll('.button-leng');
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        const activeButton = document.querySelector('.button-leng.active');
        if (activeButton) {
          activeButton.classList.remove('active');
          activeButton.style.backgroundColor = 'rgb(255,255,255)';
        }
        this.classList.add('active');
        this.style.backgroundColor = 'rgba(14, 97, 151, 1)';
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
// Создаем объект, содержащий информацию о кнопках для каждого элемента меню
const buttonsData = {
  'about-filial': 
  [
    { 
      text: 'история развития филиала', 
      id: '1' 
    },
    { 
      text: 'география теплоснабжения Г. гомеля', 
      id: '2' 
    },
    { 
      text: 'руководство филиала', 
      id: '3' 
    },
    { 
      text: 'ветераны труда', 
      id: '4' 
    },
    { 
      text: 'организационная структура', 
      id: '5' 
    },
    { 
      text: 'структурные подразделения, отделы и службы', 
      id: '6' 
    },
    { 
      text: 'профсоюзная организация', 
      id: '7' 
    },
    { 
      text: 'трудовые династии', 
      id: '8' 
    },
    { 
      text: 'доска почета', 
      id: '9' 
    },
    { 
      text: 'значимые награды работников', 
      id: '10' 
    },
    { 
      text: 'самодеятельность', 
      id: '11' 
    },
    { 
      text: 'спортивные движения', 
      id: '12' 
    },
    { 
      text: 'санаторий “василек”', 
      id: '13' 
    },
    { 
      text: 'Детский оздоровительный лагерь “Василек”', 
      id: '14' 
    },    
  ],
  'videogid': [
    { 
      text: 'Кнопочка', 
      id: '15' 
    },
    { 
      text: 'Кнопочка', 
      id: '16' 
    },    
  ],
  'menu-item-room':[
    {
      text: 'Кнопочка', 
      id: '17'
    }
  ],
  'our-site':[
    {
      text: 'Кнопочка', 
      id: '18'
    },
    {
      text: 'Кнопочка', 
      id: '19'
    }
  ],
  'otzyvy-i-predl':[
    {}
  ],
  'tehnika-bezopasnosti':[
    {}
  ],
  'laboratoria':[
    {}
  ]
};
const buttonsContainer = document.querySelector(".buttons-grid");
const menuItems = document.querySelectorAll(".menu-item");
// Выделите первый элемент меню и сохраните его
const firstMenuItem = menuItems[0];

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
    buttonsContainer.innerHTML = '';  
    const menuItemID=menuItem.id;
    console.log(menuItemID);
    for(key in buttonsData){
      if(key===menuItemID){
        const buttonsMas=buttonsData[key];
        buttonsMas.forEach(button => {
          if(button.text!=undefined || button.id!=undefined){
            createNewButton(button.text, button.id);
          }
        });
      }
    }
  });
  if (menuItem === firstMenuItem) {
    // Выполняем обработчик события onClick для первого элемента меню
    menuItem.click();
  }
});

function createNewButton(text, id){
  // const button = `<button id="${id}"><h3>"${text}"</h3></button>`.innerHTML;
  // buttonsContainer.appendChild(button);
  const button = document.createElement('button');
  button.id = id;
  button.innerHTML = `<h3>${text}</h3>`;
  buttonsContainer.appendChild(button);
}