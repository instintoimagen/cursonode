"use strict";

function singleThread() {
  process.argv[2] = `Aprendiendo nodejs`;
  process.argv[3] = 41;
  process.argv[4] = null;
  process.argv[5] = true;
  process.argv[6] = {
    Nombre: "Sergio",
    Profesion: "Desarrollador",
  };
  process.argv[7] = [4, 8, 15, 16, 23, 42];
  process.argv[8] = Infinity;

  console.log("---------------------------------------------");
  console.log("         EL PROCESO DE NODE.JS         ");
  console.log("Id del proceso ........... " + process.pid);
  console.log("Título.................... " + process.title);
  console.log("Directorio de Node........ " + process.execPath);
  console.log("Directorio Actual......... " + process.cwd());
  console.log("Versión de Node........... " + process.version);
  console.log("Versiones Dependencias.... " + process.versions);
  console.log("Plataforma (S.O.)......... " + process.platform);
  console.log("Arquitectura (S.O.)....... " + process.arch);
  console.log("Tiempo activo de Node..... " + process.uptime());
  console.log("Argumentos del proceso.... " + process.argv);
  console.log("---------------------------------------------");
  console.log("=======   PROCESS.ARGV   =======");

  let key;
  for (key in process.argv) {
    console.log(process.argv[key]);
  }

  console.log("---------------------------------------------");
}

singleThread();
