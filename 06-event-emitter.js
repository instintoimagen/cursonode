`use strict`;

const EventEmitter = require(`events`).EventEmitter;

let pub = new EventEmitter();

pub
  .on(`myevent`, function (message) {
    console.log(message);
  }) // Con .on() asocio un "evento" a una función, o sea: cada vez que se llame el evento, se ejecuta la función.
  .once(`myevent`, function (message) {
    console.log(`- Se emite la primera vez - ` + message);
  })
  .emit(`myevent`, `☺Soy un emisor de eventos☻`);
pub.emit(`myevent`, ` - - - - - - - - - - - `);
pub.emit(`myevent`, `Otro mensaje`);

pub.removeAllListeners(`myevent`);

pub.emit(`myevent`, `Volver a emitir`); // No funciona porque se removió el evento en la línea 18
