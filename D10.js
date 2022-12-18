/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sumEsA = [];
function somma(a, b) {
  return a + b;
}
let esercizioA = somma(10, 20);
sumEsA.push(esercizioA);
console.log("esercizio A =" + sumEsA);
console.log("----------------------------");

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = [];

random.push(Math.floor(Math.random() * 21));

console.log("esercizio B = " + random);
console.log("----------------------------");
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "Samuele",
  surname: "Rusco",
  age: 25,
};
console.log("esercizio C =");
console.log(me);
console.log("----------------------------");
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log("esercizio D =");
console.log(me);
console.log("----------------------------");
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
let skills = { skills: ["html", "css", "javascript"] };
Object.assign(me, skills);
console.log("esercizio E =");
console.log(me);
console.log("----------------------------");
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("c++");
console.log("esercizio F =");
console.log(me);
console.log("----------------------------");

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("esercizio G =");
me.skills.pop();
console.log(me);
console.log("----------------------------");
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("esercizio 1 =");
function dice() {
  return Math.round(Math.random() * 6 + 1);
}
console.log("Esercizio 1");
console.log(dice());
console.log("----------------------------");

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log("esercizio 2 =");
function whoIsBigger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log("Esercizio 2");
console.log(whoIsBigger(29, 24));
console.log("----------------------------");

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
let frase = "i love coding";
function splitMe() {
  var fraseDivisa = frase.split(" ");
  return fraseDivisa;
}
console.log("Esercizio 3");
console.log(splitMe(frase));
console.log("----------------------------");

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
let stringaEs4 = "Samuele";
let booleanEs4 = false;

function deleteOne(string, boolean) {
  if (boolean === true) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }
}
console.log("Esercizio 4");
console.log(deleteOne(stringaEs4, booleanEs4));
console.log("----------------------------");

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
  
*/
let stringaEs5 = "i have 4 dogs";
function onlyLetters() {
  let letters = stringaEs5.match(/[a-z ` `]/g);
  return letters.join("");
}
console.log("Esercizio 5");
console.log(onlyLetters(stringaEs5));
console.log("----------------------------");
/* ESERCIZIO 6
  Crea una funzione chia mata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = () => {
  const data = new Date();
  const numeroGiornoSettimana = data.getDay();
  const giornoSettimana = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  return giornoSettimana[numeroGiornoSettimana];
};
console.log("Esercizio 7");
console.log(whatDayIsIt());
console.log("----------------------------");

/* ESERCIZIO 8
  Scrivi una funzione chiamat"a "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(num) {
  let dadi = [];
  for (let i = 0; i < num; i++) {
    let diceValue = dice();
    dadi.push(diceValue);
  }
  let sumEs8 = dadi.reduce((a, b) => a + b, 0);
  return {
    sumEs8: sumEs8,
    dadi: dadi,
  };
}
let numeroDadi = 3;
let risultato = rollTheDices(numeroDadi);
console.log("Esercizio 8");
console.log(risultato);
console.log("----------------------------");

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(date) {
  let DataDiOggi = new Date();
  let differenzaInMillisecondi = DataDiOggi - date;
  let differenzaInGiorni = differenzaInMillisecondi / (1000 * 60 * 60 * 24);
  return Math.round(differenzaInGiorni);
}
let inserisciData = new Date("1997-01-04");
let numeroDiGiorni = howManyDays(inserisciData);
console.log("Esercizio 9");
console.log(numeroDiGiorni);
console.log("----------------------------");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday() {
  let dataDiOggi = new Date();
  let compleanno = new Date("1997-04-01");

  if (
    dataDiOggi.getMonth() === compleanno.getMonth() &&
    dataDiOggi.getDate() === compleanno.getDate()
  ) {
    return "AUGURIIIII";
  } else {
    return "passa un altro giorno :(";
  }
}
console.log("Esercizio 10");

console.log(isTodayMyBirthday());
console.log("----------------------------");
// Arrays & Oggetti
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const oggettoEs11 = {
  marca: "Citroen",
  modello: "DS3",
  cilindrata: 1600,
};

function deleteProp(oggetto, proprietà) {
  if (oggetto.hasOwnProperty(proprietà)) {
    delete oggetto[proprietà];
  }
  return oggetto;
}
console.log("Esercizio 11");
console.log(deleteProp(oggettoEs11, "marca"));
console.log("----------------------------");

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = (array) => {
  let filmPiuNuovo = array[0];
  array.forEach((element) => {
    if (parseInt(filmPiuNuovo.Year) > parseInt(element.Year)) {
      filmPiuNuovo = element;
    }
  });
  return filmPiuNuovo;
};
console.log("Esercizio 12");
console.log(newestMovie(movies));
console.log("----------------------------");

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(array) {
  return array.length;
}
console.log("Esercizio 13");
console.log(countMovies(movies));
console.log("----------------------------");

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(array) {
  let arrayAnni = [];
  for (let i = 0; i < array.length; i++) {
    const anni = array[i].Year;
    arrayAnni.push(anni);
  }
  return arrayAnni;
}
console.log("Esercizio 14");
console.log(onlyTheYears(movies));
console.log("----------------------------");

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(array) {
  let arrayFilmVecchi = [];
  let arrayFilmNuovi = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (parseInt(array[i].Year) < 2000) {
      arrayFilmVecchi.push(array[i]);
    }
  }
  return arrayFilmVecchi;
}
console.log("Esercizio 15");
console.log(onlyInLastMillennium(movies));
console.log("----------------------------");
function onlyInLastMillennium2(array) {
  let arrayFilmVecchi = [];
  array.forEach((element) => {
    if (parseInt(element.Year) < 2000) {
      arrayFilmVecchi.push(element);
    }
  });
  return arrayFilmVecchi;
}
console.log("Esercizio 15");
console.log(onlyInLastMillennium2(movies));
console.log("----------------------------");
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function summAllTheYears(array) {
  let sumEs16 = 0;
  array.forEach((film) => {
    sumEs16 = sumEs16 + parseInt(film.Year);
  });

  return sumEs16;
}
console.log("Esercizio 16");
console.log(summAllTheYears(movies));
console.log("----------------------------");
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro  stringa ===> funzione ===> film che contengono stringa
   e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(ricerca, array) {
  let arrayFiltrati = [];

  array.forEach((element) => {
    if (element.Title.toLowerCase().includes(ricerca.toLowerCase())) {
      arrayFiltrati.push(element);
    }
  });

  return arrayFiltrati;
}

console.log("esercizio 17");
console.log(searchByTitle("war", movies));
console.log("----------------------------");
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(ricerca, array) {
  let arrayFiltrati = [];
  let arrayFiltratiNonMatch = [];
  array.forEach((element) => {
    if (element.Title.toLowerCase().includes(ricerca.toLowerCase())) {
      arrayFiltrati.push(element);
    } else {
      arrayFiltratiNonMatch.push(element);
    }
  });

  return { arrayFiltrati, arrayFiltratiNonMatch };
}

console.log(searchAndDivide("war", movies));
console.log("esercizio 18");
console.log("----------------------------");

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex"
   che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(number, array) {
  array.splice(number, 1);
  return array;
}
console.log("esercizio 19");
console.log(removeIndex(0, [...movies])); //con [...movies] sto creando una copia dell'array
console.log("----------------------------");

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function elementById(idString) {
  return document.getElementById(idString);
}
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function elementByTag(tag) {
  return document.getElementsByTagName(tag);
}
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function tagPrint(tagName) {
  let array = document.getElementsByTagName(tagName);
  array.forEach((element) => {
    console.log(element.innerText);
  });
}
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function backgroundColor(tag) {
  document.getElementsByTagName(tag).style.backgroundColor = "red";
}
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addNewElement(event) {
  if (event.key === "Enter") {
    const valoreInputField = document.getElementById("inputText").value;
    {
      const newElement = document.createElement("li");
      newElement.innerText = valoreInputField;
      document.getElementById("myList").append(newElement);
    }
  }
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function rimuoviTestoBottone() {
  const myList = document.getElementById("myList"); //seleziono locazione (padre)
  const elementiSelezionati = document.getElementsByTagName("li"); //seleziono gli item "clickati" dentro al padre
  elementiSelezionati.forEach((element) => myList.removeChild(element)); //per ogni elemento ".selected" nella lista "list-item" ordino la rimozione
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClass(tr) {
  const trTag = document.getElementsByTagName("tr");
  trTag.foreach((element) => trTag.classList("test"));
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
