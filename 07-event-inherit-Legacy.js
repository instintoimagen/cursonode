"use estrict";

// Usando util.inherit
const EventEmitter = require("events");

const util = require("util");

// Constructor
let Clock = function () {
  let self = this;
  setInterval(() => {
    // console.log(`Hola`);
    self.emit("tictac");
  }, 1000);
};

util.inherits(Clock, EventEmitter);

Clock.prototype.theTime = function () {
  let date = new Date(),
    hrsAmPm = date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
    hrs = addZero(hrsAmPm),
    min = addZero(date.getMinutes()),
    sec = addZero(date.getSeconds()),
    ampm = date.getHours() < 12 ? ` am` : ` pm`,
    msg = hrs + ":" + min + ":" + sec + ampm;

  function addZero(num) {
    return num < 10 ? "0" + num : num;
  }

  console.log(msg);
};

let cucu = new Clock();

cucu.on("tictac", function () {
  cucu.theTime();
});

/* 
// Reloj 24hs

Clock.prototype.theTime = function () {
  let date = new Date(),
    hrs = addZero(date.getHours()),
    min = addZero(date.getMinutes()),
    sec = addZero(date.getSeconds()),
    msg = hrs + ":" + min + ":" + sec;

  function addZero(num) {
    return num < 10 ? "0" + num : num;
  }

  console.log(msg);
};
*/
