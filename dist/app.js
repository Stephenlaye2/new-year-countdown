const newYearEve = "1 Jan 2021";
function timeCountdown() {
  const newYearEveDate = new Date(newYearEve);
  const currentDate = new Date();
  const diff = newYearEveDate - currentDate;
  const totalSecs = diff / 1000;
  const seconds = Math.floor(totalSecs) % 60;
  const minutes = Math.floor(totalSecs / 60) % 60;
  const hours = Math.floor(totalSecs / 3600) % 24;
  const days = Math.floor(totalSecs / 3600 / 24);

  document.querySelector('.days-number').textContent = days;
  document.querySelector('.hours-number').textContent =hours;
  document.querySelector('.minutes-number').textContent = minutes;
   document.querySelector('.seconds-number').textContent =seconds;
}

timeCountdown();

setInterval(timeCountdown, 1000);
