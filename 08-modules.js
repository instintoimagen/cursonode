`use strict`;

const myData = require(`./my-data`);
const Clock = require(`./clock-es6`);
// const Clock = require(`./clock-es5`);
let time = new Clock();

console.log(myData);
myData.saludo();

console.log(`\n - Iniciando Reloj - \n`);

time.on(`tictac`, function () {
  time.theTime();
});

time.tiempo(); // necesario para la versión ES6
