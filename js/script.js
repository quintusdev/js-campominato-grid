//CREAZIONE GRIGLIA CAMPO MINATO

//CREO LA FUNZIONE CHE CREA UN SINGOLO QUADRATO
function createSquare(){
    let quadrato = document.createElement('div');
    quadrato.classList.add('quadrati');
    return quadrato;
}

btn.addEventListener('click', function(){

    //RECUPERO L'ELEMENTO IN CUI CREARE LA GRIGLIA
    const griglia = document.getElementById('griglia');

    //CREO IL CICLO FOR PER CREARE TUTTE LE CASELLE DELLA GRIGLIA
    for (let i = 0; i<100; i++){

    //CREO OGNI SINGOLO QUADRATINO RICHIAMANDO LA FUNZIONE
    let quadrato = createSquare();
    quadrato.innerText = i + 1;

    //VISUALIZZO IL NUMERO DI OGN QUADRATO IN CONSOLE
    //console.log(counter);

    //CREO L'EVENTO AL CLICK DEL BOTTONE CHE CAMBI COLORE
    quadrato.addEventListener('click', function(){
        this.classList.toggle('change');
        console.log(quadrato.innerText);
    });

    //MOSTRO A VIDEO LA GRIGLIA
    griglia.append(quadrato);
    }

    //FACCIO IN MODO CHE NON SI POSSANO CREARE PIU' TABELLE UNA SOTTO L'ALTRA NASCODENDO IL BOTTONE
    btn.classList.add('btn-none');
});


