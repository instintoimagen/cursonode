/*
Streams
	'Chorros' de información que se transmiten en 'Pedazos' (Chunks)
	3 tipos: Lectura / Escritura / Duplex
	Instancias de EventEmitter
	Acceso asíncrono
	Es raro crear streams directamente
	Pero muchos recursos nos ofrecen este interfaz
	Detrás de muchos mecanismos de Node.JS
		stdin/stdout
		request de HTTP
		Sockets
		Manipulación de ficheros/imágenes
*/

"use strict";

let fs = require(`fs`),
  readStream = fs.createReadStream(`assets/nombres.txt`), //que lea el archivo
  writeStream = fs.createWriteStream(`assets/nombres_copia.txt`); // Parámetros: la ruta donde voy a crearlo, y nombre del archivo

//el método .pipe() me permite la lectura-escritura de archivos en ambos sentidos.
readStream.pipe(writeStream);

readStream.on(`data`, function (chunk) {
  console.log(`Se leyeron:`, chunk.length, `caracteres`);
}); //el método .on() me permite activar eventos. Con el evento "data" digo que mientras haya datos (se esté leyendo el archivo) se ejecute la función

readStream.on(`end`, function () {
  console.log(` - - Archivo leído y copiado - - `);
}); //con el evento "end" digo que al finalizar de leer ejecute la función.
