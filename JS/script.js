/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// ideazione del programma 

/*

1) chiedere all'utente num km e eta passeggero
2) OBBIETTIVO : calcolare il costo del viaggio
3) COME CALCOLARE IL COSTO: 
    . 0,21 a km
    . - 20% ai < 18anni
    . - 40% a > 65anni

4) dare il risultato in output con due cifre dopo la virgola.

*/

// costanti 

let kilometri = prompt ('quanti km vuoi fare ?');
let age = prompt ('quanti anni hai ?');
let cost = (kilometri * 0.21).toFixed(2);

// formula sconti 

// 18
if (age < 18) {
    let sale = (cost * 0.8).toFixed(2);
    console.log(sale + '€');
} 

// 65

else if (age > 65) {
    let sale = (cost * 0.6).toFixed(2);
    console.log(sale + '€');
} else {
    console.log (cost + '€' );
}

// collegamenti 

window.document.getElementById('km').innerHTML = kilometri + 'km';
window.document.getElementById('eta').innerHTML = age + 'y.o.';
window.document.getElementById('sconto').innerHTML = cost + '€';






