`use strict`;

let name = `Sergio`,
  email = `sortega@google.com`,
  _phone = `+155512348956`; // Elementos privados: el nombre de la variable o atributo empieza con guión bajo

const saludo = () => {
  console.log(`----------------------`);
  console.log(`Hola mi nombre es ${name}, un gusto.\n---------------------`);
};

module.exports.name = name;
module.exports.email = email;
module.exports.saludo = saludo;
