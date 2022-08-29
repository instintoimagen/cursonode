`use estrict`;

const EventEmitter = require(`events`);

class Clock extends EventEmitter {
  tiempo(hora) {
    setInterval(() => {
      this.emit(`tictac`, hora);
    }, 1000);
  }
  theTime() {
    let date = new Date(),
      hrsAmPm = date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
      hrs = addZero(hrsAmPm),
      min = addZero(date.getMinutes()),
      sec = addZero(date.getSeconds()),
      ampm = date.getHours() < 12 ? `am` : `pm`,
      msg = `${hrs}:${min}:${sec} ${ampm}`;

    function addZero(num) {
      return num < 10 ? `0` + num : num;
    }

    console.log(msg);
  }
}

const cucu = new Clock();

cucu.on(`tictac`, function () {
  cucu.theTime();
});

cucu.tiempo();

/*
// Reloj 24hs

  theTime() {
    let date = new Date(),
      hrs = addZero(date.getHours()),
      min = addZero(date.getMinutes()),
      sec = addZero(date.getSeconds()),
      msg = hrs + ":" + min + ":" + sec;

    function addZero(num) {
      return num < 10 ? `0` + num : num;
    }

    console.log(msg);
  } */
