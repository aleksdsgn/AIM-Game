const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
let time = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) =>{
  if (event.target.classList.contains('time-btn')) {
    // console.log(event.target);
    // console.log(event.target.getAttribute('data-time'));
    time = parseInt(event.target.getAttribute('data-time'));
    startGame();
  }
})

function startGame() {
  screens[1].classList.add('up');
}