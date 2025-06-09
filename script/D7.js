/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

const concatStringhe = function (string1, string2) {
  const s1Char = string1.slice(0, 2);
  const s2Char = string2.slice(-3);
  const result = (s1Char + s2Char).toUpperCase();
  console.log(result);
};

concatStringhe("zorro", "luna");

/* 
1) Dichiaro una funzione con due parametri. 
2) Dichiaro due variabili const all'interno della funzione ovvero s1Char, s2Char. 
Queste sono il risultato di un operazione che applica il metodo slice per ottenere i due valori che voglio.
3) Dichiaro una nuova variabile const ovvero result che sarà il risultato della somma delle due variabili s1Char e s2Char
alla quali applico il metodo toUpperCase per renderle maiuscole. 
4) Richiamo la funzione concatStringhe assegnando due stringhe casuali
per verificare il risultato. 
*/

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

const arrayOf10 = function () {
  let a1 = [];
  for (let i = 0; i < 10; i++) {
    let casualNumber = Math.floor(Math.random() * 101);
    a1.push(casualNumber);
  }
  return a1;
};

console.log(arrayOf10());

/*
1) Dichiaro una funzione arrayOf10.
2) Dichiaro un array vuoto a1.
3) Eseguo un for in modo che coprendo gli indici da 0 a 9 mi restituisca un valore randomico da 0 a 100 che faccio salvare in una variabile.
4) A questo punto utilizzo il metodo push per mettere il valore dentro l'array a1 precedentemente dichiarato.
5) Ritorno a1.
6) Evoco la funzione al di fuori di se stessa dentro il console.log in modo da utilizzarla.
 */

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

const valoriPari = function (ar2) {
  return ar2.filter(function (valore) {
    return valore % 2 === 0;
  });
};

console.log(valoriPari([1, 2, 3, 4, 5, 6]));

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const sommaNumeri = function (ar1) {
  let somma = 0;
  ar1.forEach(function (numero) {
    somma += numero;
  });
  return somma;
};

console.log(sommaNumeri([1, 2, 3]));

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const sommaNum1 = function (arr1) {
  return arr1.reduce(function (acc, numero) {
    return acc + numero;
  }, 0);
};

console.log(sommaNum1([1, 2, 3]));

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const incrementaArray = function (array, n) {
  return array.map(function (numero) {
    return numero + n;
  });
};

console.log(incrementaArray([1, 2, 3], 1));

/* 
Si può fare anche così

const incrementNumbers = function(numbers, inc) {
numbers.map ((element) => {
  return element + inc}
})
  return incrementedNumbers
}

*/

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

const lunghezzaArrStringhe = function (array) {
  return array.map(function (stringhe) {
    return stringhe.length;
  });
};

console.log(lunghezzaArrStringhe(["EPICODE", "is", "great"]));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

const arrayOfDispari = function () {
  const a1 = [];
  for (let i = 1; i < 100; i += 2) {
    a1.push(i);
  }
  return a1;
};

console.log(arrayOfDispari());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
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

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

const findTheOldest = function () {
  let oldest = movies[0];
  movies.forEach((film) => {
    if (parseInt(film.Year) < parseInt(oldest.Year)) {
      oldest = film;
    }
  });
  return oldest;
};

console.log(findTheOldest());

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

const findTheFilmNumber = function () {
  let filmNumber = movies.length;
  return filmNumber;
};

console.log(findTheFilmNumber());

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

const titleOfFilms = function () {
  return movies.map((film) => film.Title);
};

console.log(titleOfFilms());

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const millenioCorrente = function () {
  return movies.filter((film) => parseInt(film.Year) > 1999);
};

console.log(millenioCorrente());

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const sommaAnniFilm = function () {
  return movies.reduce((acc, film) => acc + parseInt(film.Year), 0);
};

console.log(sommaAnniFilm());

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

const specificoFilm = function (imdbID) {
  return movies.find((film) => film.imdbID === imdbID);
};

console.log(specificoFilm("tt0167261"));

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

const specificoIndexFilm = function (Year) {
  return movies.findIndex((film) => film.Year === Year.toString());
};

console.log(specificoIndexFilm(2001));
