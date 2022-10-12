// Inserire un nuemro
// SE e pari stampa il nuemro
// SE e dispari numero+1

const bottone = document.getElementById('btn')
const div = document.querySelector('.risultato')

 function calcolo (){
    let datoUtente = document.getElementById('numeroUtente').value;
    console.log(datoUtente)
    if(datoUtente %2 == 0 ){
        div.innerHTML = "Numero Pari";

    }else{
        div.innerHTML =  "il nuemro non e pari " + datoUtente++ ;
        console.log(datoUtente)
    }

}
bottone.addEventListener('click',calcolo);
// ---------------------- es2---------------
// lista con nomi e di  cognomi
// generare una falsa lista 


let listaNome = ['Luca', 'Mario', 'Giuseppe', 'Martina'];
let listaCognome = [ 'Rossi', 'Bianchi','Verdi','Napoli'];
const listFalsa = document.querySelector('.listafalsa');

let myRandomListaNomi = listaNome[Math.floor(Math.random() * listaNome.length)]
let myRandomListaCognomi = listaCognome[Math.floor(Math.random() * listaCognome.length)]
console.log(myRandomListaNomi,myRandomListaCognomi)
let myElm = document.createElement("h2");
myElm.innerText = myRandomListaNomi + " " + myRandomListaCognomi;
document.body.appendChild(myElm);
// ---------------------- es3---------------
