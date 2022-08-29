`use strict`;

class Clock {
  constructor() {
    setInterval(() => {
      // console.clear();
      // Habilitamos el clear para que no haga el listado del tiempo, sino un reloj que va cambiando.
      this.theTime();
    }, 1000);
  }
  theTime() {
    let date = new Date(),
      // código ApPm o 24hs. INICIO
      hrsAmPm = date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
      hrs = addZero(hrsAmPm),
      min = addZero(date.getMinutes()),
      sec = addZero(date.getSeconds()),
      ampm = date.getHours() < 12 ? `am` : `pm`,
      msg = `${hrs}:${min}:${sec} ${ampm}`;
    // código ApPm o 24hs. FIN
    function addZero(num) {
      return num < 10 ? `0` + num : num;
    }

    console.log(msg);
  }
}

module.exports = Clock;

/* 
//  - - - RELOJ 24 hs  - - - 

      hrs = addZero(date.getHours()),
      min = addZero(date.getMinutes()),
      sec = addZero(date.getSeconds()),
      msg = `${hrs}:${min}:${sec}`;

*/

/* 
      hrsAmPm = date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
      hrs = addZero(hrsAmPm),
      min = addZero(date.getMinutes()),
      sec = addZero(date.getSeconds()),
      ampm = date.getHours() < 12 ? `am` : `pm`,
      msg = `${hrs}:${min}:${sec} ${ampm}`;
*/
