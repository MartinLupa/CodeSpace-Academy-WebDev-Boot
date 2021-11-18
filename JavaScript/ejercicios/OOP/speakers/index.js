//9. Crear altavoces 5.0:
//9.1 altavozFrontal: volumen 50, encendido.
//9.2 altavozFrontalDerecho: volumen 30, encendido.
//9.3 altavozFrontalIzquierdo: volumen 20, encendido.
//9.4 altavozTraseroIzquierdo: volumen 20, encendido.
//9.5 altavozTraseroDerecho: volumen 0, apagado.

//10 Una vez hecho esto, subir el volumen de altavozLateralIzquierdo en 5, encender altavozTraseroDerecho y establecer su volumen a 35.
//11 A continuacion apagaremos todos los altavoces.
//12 Crear una clase HomeCinema, tendrá todos los altavoces que hayamos definido anteriormente y será capaz de manipular todos los altavoces,
//tanto apagarlos como cambiarles el volumen.

class Speaker {
  constructor(isOn = false, volume) {
    if (!isOn) {
      volume = 0;
    }
    this.isOn = isOn;
    this.volume = volume;
  }

  turnOn() {
    this.isOn = true;
    this.volume = 20;
  }

  turnOff() {
    this.isOn = false;
    this.volume = 0;
  }

  getVolume() {
    console.log(this.volume);
  }

  volumeUp() {
    this.volume < 100 ? (this.volume += 1) : (this.volume = 100);
  }

  volumeDown() {
    this.volume > 0 ? (this.volume -= 1) : (this.volume = 0);
  }

  setVolume(volume) {
    this.volume = volume;
  }
  mute() {
    this.volume = 0;
  }
  print() {
    this.isOn
      ? console.log(`El altavoz está encendido y su volumen es ${this.volume}`)
      : onsole.log("El altavoz está apagado.");
  }
}

const speaker1 = new Speaker();
console.log("---------------Estado inicial -------------------");
console.log(speaker1);
console.log("--------- Encendido, volumen a 20 ---------------");
speaker1.turnOn();
console.log(speaker1);
console.log("----------------- Vol a 50 ----------------------");
speaker1.setVolume(50);
console.log(speaker1);
console.log("------------------ Muteado ----------------------");
speaker1.mute();
console.log(speaker1);
console.log("-----------------Subir volumen ------------------");
speaker1.volumeUp();
console.log(speaker1);
console.log("------------------- Apagado ---------------------");
speaker1.turnOff();
console.log(speaker1);
