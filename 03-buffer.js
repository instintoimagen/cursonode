/*
Buffers
	Una tira de bytes (datos binarios)
	Similar a un array de enteros
	Tamaño fijo
	Manipular datos directamente
		Sockets
		Streams
		Implementar protocolos complejos
		Manipulación de ficheros/imágenes
		Criptografía
*/
"use strict";

let buf = Buffer.alloc(100),
  buf2 = Buffer.alloc(26),
  buf3 = Buffer.alloc(15), // creo tres buffer nuevos, uno de cien posiciones, otro de 26, y de 15
  str = `\u00bd + \u00bc = \u00be`; // un string con los símbolos: ½ + ¼ = ¾

buf.write(`abcde`, 0, 5, `ascii`); // El bufer 1 está vacío, con el método .write() le ingreso datos: `string`, [desde qué psición graba], [cuantas posiciones graba], [codificación]. En corchetes los opcionales.
console.log(`Buffer de datos nº 1:`, buf);
console.log(`Longitud de Buffer 1:`, buf.length, `posiciones`);
console.log(
  `Buffer 1 transformado a string (en código ascii):`,
  buf.toString(`ascii`),
  `(Las demás 95 posiciones están vacías y no se muestran)`,
  `Longitud en bytes:`,
  Buffer.byteLength(buf, `utf8`),
  `Longitud en caracteres:`,
  buf.length
);
console.log(` - - - - - - - - - - - - - - - - - - - - - - - `);
console.log(`String "str":`, str);
console.log(`Longitud String:`, str.length, `caracteres`);
console.log(`Mismo String:`, Buffer.byteLength(str, `utf8`), `bytes`);
console.log(` - - - - - - - - - - - - - - - - - - - - - - -`);
// Tomo el buffer 2 de 26 posiciones, mediante un "for" le voy agregando una letra en cada posición, la primera letra es la "a", (código 97 en ASCII)
for (let i = 0; i < buf2.length; i++) {
  buf2[i] = i + 97; // 97 en ASCII es "a"
}
console.log(`Buffer 2:`, buf2);
console.log(`Longitud de Buffer 2:`, buf2.length, `posiciones`);
console.log(
  `Buffer 2 con las 26 letras agregadas, \nResula el abecedario:`,
  buf2.toString(`ascii`)
);
console.log(` - - - - - - - - - - - - - - - - - - - - - - -`);
//Al Buffer 3 le agrego "s" "e" "r" en las posiciones 4,6y8
buf3[4] = 115;
buf3[6] = 101;
buf3[8] = 114;
console.log(`Buffer 3:`, buf3);
console.log(`Buffer 3 en string:`, buf3.toString(`ascii`));
