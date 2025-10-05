// const button = document.querySelector('button');

// const onClick = () => {
//   const timerId = setTimeout(() => {
//     console.log('nnnnnnnnnnnnnnnnnn');
//   }, 2000);

//   console.log(timerId);
// };

// button.addEventListener('click', onClick);

// const container = document.querySelector('.container');
// const onClick = () => {
//   const timerId = setTimeout(() => {
//     console.log('якшо клфкшиш нак контейнер');
//   }, 1000);
// };
const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
const restBtn = document.querySelector('.js-rest');
const timerDisplay = document.querySelector('.js-timer');

let intervalId = null;
let seconds = 0;

startBtn.addEventListener('click', () => {
  // якщо інтервал уже працює — не запускаємо новий
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    seconds += 1;
    timerDisplay.textContent = `${seconds} s`;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null; // обнуляємо, щоб можна було знову стартувати
  console.log(`Секундомір зупинено на ${seconds} секундах.`);
});

restBtn.addEventListener('click', () => {
  clearInterval(intervalId); // зупиняємо таймер, якщо він працює
  intervalId = null; // обнуляємо ID, щоб потім можна було знову натиснути Start
  seconds = 0; // скидаємо лічильник секунд
  timerDisplay.textContent = '0 second'; // оновлюємо текст у DOM
});
