// Inserire un nuemro
// SE e pari stampa il nuemro
// SE e dispari numero+1

const bottone = document.getElementById('btn')
const div = document.querySelector('.risultato')

 function calcolo (){
    let datoUtente = document.getElementById('numeroUtente');
    console.log(datoUtente)
    if(datoUtente %2 == 0 ){
        div.innerHTML = "Numero Pari";

    }else{
        div.innerHTML =  "il nuemro non e pari " + datoUtente++ ;
        console.log(datoUtente)
    }

}
bottone.addEventListener('click',calcolo);
