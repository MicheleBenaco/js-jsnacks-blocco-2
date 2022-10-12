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
document.body.append(myElm);
// ---------------------- es3---------------
// creare un array di numeri 
// e sommare tutti i numeri dispari 


let numeri = [ '1','2','3','3','4','5','6','7','8','9','10','11','12',]
const h2 = document.querySelector('.numeri')
let sum = 0;

    for(let i = 0; i < numeri.length;  i++){
        if(numeri[i] %2 !== 0 ){
         sum += numeri[i] 
          h2.innerHTML = sum;
        }
    }