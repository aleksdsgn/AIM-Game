const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#40E0D0', '#6495ED', '#CCCCFF'];
let time = 0;
let score = 0;

const circle = document.createElement('div');

// слушатель стартовой кнопки
startBtn.addEventListener('click', (event) => {
  // отмена стандартного поведения ссылки
  event.preventDefault();
  // пролистнуть экран вниз
  screens[0].classList.add('up');
});

// слушатель блока с выбором времени
timeList.addEventListener('click', (event) =>{
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    // пролистнуть экран вниз
    screens[1].classList.add('up');
    startGame();
  }
})

// слушатель попадания по цели
board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
})

// начало игры
function startGame() {
  board.style.cursor = 'crosshair';
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

// обратный отсчет времени
function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

// вставка правильного времени в поле
function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

// конец игры
function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.style.cursor = 'default';
  board.innerHTML = `<h2>Ваш счет: <span class="primary">${score}</span></h2>`
}

// создание мишеней
function createRandomCircle() {
  const size = getRandomNumber(10, 60);
  const {width, height} = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  const color = getRandomColor();

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.backgroundColor = color;

  board.append(circle);
}

// задание случайного размера и положения
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// задание случайного цвета из массива цветов
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

// автоматические клики
function winTheGame() {
  function kill() {
    const circle = document.querySelector('.circle');
  
    if (circle) {
      circle.click();
    }
  }
  setInterval(kill, 42);
}