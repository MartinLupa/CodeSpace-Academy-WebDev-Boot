/*
Crea un objeto que se llame Song que contenga título, grupo, duración y valoración (0-5 estrellas), y a continuación:

   1. Crea un método en el objeto que sea print() que imprima lo siguiente: "La canción <nombre> me encanta y en Apple 
   sólo le dan <valoracion> estrellas."
   2. Crea un objeto Playlist que contendrá un array de objetos song, este objeto Playlist tendrá un método addSong() 
   que recibirá un objeto Song y lo añadirá al array de canciones que almacena.
   3. En el objeto Playlist crea un método que se llame getDuration() que devolverá la duración total del disco, que 
   tendrá que calcular como la suma de la duración de todas las canciones.
   4. En el objeto Playlist crea un método que se llame removeSong() que permita eliminar un objeto Song del array.
   5. En el objeto Playlist crea un método shuffle() que devuelva una lista de las canciones desordenadamente con 
   respecto al orden original según el que se fueron insertando las canciones. Debe ser diferente cada vez.
    7. En el objeto Playlist crea un método nextSong() que devuelva la siguiente canción que se va a reproducir, en 
   función de si ha sido invocado el método shuffle() o no se devolverá la siguiente canción en el array o una canción 
   aleatoria.
   8. En el objeto Playlist crea un método top() que devuelva una array ordenado de los 5 grupos que más canciones 
   están almacenadas en la Playlist.
   8.1 En el objeto playlist crea un metodo topRating() que devuelva un array ordenado de las 5 cancioens mas valoradas 
   que están almacenadas en la Playlist.
   9. En el objeto Playlist crea un método orderByDuration() que devuelva una array ordenado con todas las canciones 
   que tiene almacenadas de mayor a menor duración.
*/

class Song {
  constructor(title, group, duration, rating) {
    this.title = title;
    this.group = group;
    this.duration = duration;
    this.rating = rating;
  }
  print(title) {
    console.log(
      `La canción ${this.title} me encanta y en Apple sólo le dan ${this.rating} estrellas.`
    );
  }
}

class Playlist {
  constructor(playlist = []) {
    this.playlist = playlist;
  }

  printPlaylist() {
    console.log(this.playlist);
  }

  addSong(...songs) {
    this.playlist.push(...songs);
  }

  getDuration() {
    let totalDuration = 0;
    this.playlist.forEach((song) => (totalDuration += song.duration));
    console.log(totalDuration);
  }

  removeSong(song) {
    const songIndex = this.playlist.indexOf(song);
    this.playlist.splice(songIndex, 1);
    console.log(`${this.playlist[songIndex].title} eliminada de la playlist`);
  }
}

const playlist = new Playlist();
const song1 = new Song("title1", "group1", 4, 4);
const song2 = new Song("title2", "group2", 4, 4);
const song3 = new Song("title3", "group3", 4, 4);
const song4 = new Song("title4", "group4", 4, 4);
const song5 = new Song("title5", "group5", 4, 4);
const song6 = new Song("title6", "group6", 4, 4);
const song7 = new Song("title7", "group7", 4, 4);
const song8 = new Song("title8", "group8", 4, 4);

playlist.addSong(song1, song2, song3, song4, song5, song6, song7, song8);
playlist.printPlaylist();
