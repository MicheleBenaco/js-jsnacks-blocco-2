// Inserire un nuemro
// SE e pari stampa il nuemro
// SE e dispari numero+1

const bottone = document.getElementById('btn')
const div = document.querySelector('.risultato')

calcolo =  function(){
    let datoUtente = document.getElementById('numeroUtente');
    if(parseInt(datoUtente) / 2 ){
        div.innerHTML = "Numero Pari";

    }else{
        div.innerHTML = datoUtente++ ;
    }

}
bottone.addEventListener('click',calcolo);