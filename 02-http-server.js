"use strict";

/*   VERSION 1
let http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World\n");
  })
  .listen(1337, "127.0.0.1");
console.log("Servidor arriba en el puertirilijillo http://127.0.0.1:1337/");
 */

/*    VERSION  2  con el código más semántico */
let http = require("http");

function webServer(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" }).end(`
      <h1>Hola esto es NODEjs</h1>
      <h2>estudiando</h2>
      <img src="https://sergioortega.com.ar/assets/perfil.jpg" alt="sergio" />`);
}

http.createServer(webServer).listen(3000, "127.0.0.1");
console.log("Servidor arriba en el puertirilijillo http://127.0.0.1:3000/");
