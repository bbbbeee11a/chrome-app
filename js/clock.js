const calendar = document.querySelector('#calendar');
const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  //const seconds = ('00' + date.getSeconds().toString()).slice(-2);
  //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${seconds}`;
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  //const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}`;

  // clock.innerText = new Date().toLocaleTimeString();
}

function convertDay(day) {
  switch (day) {
    case 0:
      return 'SUN';
    case 1:
      return 'MON';
    case 2:
      return 'TUE';
    case 3:
      return 'WED';
    case 4:
      return 'THU';
    case 5:
      return 'FRI';
    case 6:
      return 'SAT';
  }
}

function getCalendar() {
  const date = new Date();
  const today = date.toLocaleDateString();
  const day = convertDay(date.getDay());
  calendar.innerText = `${today} ${day}`;
}

getClock();
setInterval(getClock, 1000);

// TODO: 몇 번 불러와야 하나?
getCalendar();
