console.log(`Hola mundo, desde node.js \n Esto se verá en la consola`);
console.log(2 + 5);
//console.log(global);
console.log(`-----------------------`);
let count = 4;
let bomba = setInterval(() => {
  console.log(`La bomba activada, explota en ${count}`);
  count = count - 1;
}, 1000);
setTimeout(() => {
  clearInterval(bomba);
  console.log(` - - Bomba desactivada - - - \n Have a nice day`);
}, 5000);
