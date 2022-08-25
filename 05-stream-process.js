/*
https://nodejs.org/api/process.html#process_process_stdin
https://nodejs.org/api/process.html#process_process_stdout
*/

"use strict";

let stdin = process.stdin,
  stdout = process.stdout,
  person = {
    name: null,
    age: 0,
  };

function saveAge(age) {
  person.age = age;

  if (person.age >= 18) {
    stdout.write(
      person.name + ` es mayor de edad, tiene ` + person.age + ` años\n`
    );
  } else {
    stdout.write(
      person.name + ` es menor de edad, tiene ` + person.age + ` años\n`
    );
  }

  process.exit();
}

function saveName(name) {
  person.name = name;

  // Vuelvo a preguntar
  var question = `Hola ` + person.name + ` ¿Cuántos años tienes?`;

  quiz(question, saveAge);
}

function quiz(question, callback) {
  stdin.resume();
  stdout.write(question + ": ");

  stdin.once(`data`, function (res) {
    callback(res.toString().trim()); //método .trim() quita comillas a las cadenas de texto.
  }); // el método .once() va a activar el evento, pero ejecutarlo solo una vez, a dif de .on() el cual lo activa, y mientras existan datos seguirá ejecuntándose.
}

stdin.setEncoding(`utf8`);
quiz(`¿Cómo te llamas?`, saveName);
