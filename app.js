const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
let time = 11;
const timeEl = document.querySelector('#time');

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) =>{
  if (event.target.classList.contains('time-btn')) {
    // console.log(event.target);
    // console.log(event.target.getAttribute('data-time'));
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
})

//DEBUG
startGame();

function startGame() {
  setInterval(decreaseTime, 1000);
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

function finishGame() {

}