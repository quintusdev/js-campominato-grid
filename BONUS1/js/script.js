//CREAZIONE GRIGLIA CAMPO MINATO

//CREO LA FUNZIONE CHE CREA UN SINGOLO QUADRATO
function createSquare(){
    let quadrato = document.createElement('div');
    
    return quadrato;
}

//PRENDO I VALORI DAL SELECT
let selectElement = document.getElementById('difficulty');

//RECUPERO L'ELEMENTO IN CUI CREARE LA GRIGLIA
const griglia = document.getElementById('griglia');

//IN BASE ALLA SCELTA DELLA DIFFICOLTA' VISUALIZZO LA GRIGLIA CORRISPONDENTE

btn.addEventListener('click', function(){

    // Ottengo il valore selezionato dall'elemento <select>
    let difscelta = selectElement.value;

    //CREO IF PER DECIDERE IL TIPO DI TABELLA DA MOSTRARE
    if (difscelta === 'Facile') {
        
        //CREO IL CICLO FOR PER CREARE TUTTE LE CASELLE DELLA GRIGLIA
        for (let i = 0; i<100; i++){

        //CREO OGNI SINGOLO QUADRATINO RICHIAMANDO LA FUNZIONE
        let quadrato = createSquare();
        quadrato.classList.add('quadrati');
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

    } else if (difscelta === 'Normale'){

        //CREO IL CICLO FOR PER CREARE TUTTE LE CASELLE DELLA GRIGLIA
        for (let i = 0; i<81; i++){

        //CREO OGNI SINGOLO QUADRATINO RICHIAMANDO LA FUNZIONE
        let quadrato = createSquare();
        quadrato.classList.add('quadrati1');
        quadrato.innerText = i + 1;

        //CREO L'EVENTO AL CLICK DEL BOTTONE CHE CAMBI COLORE
        quadrato.addEventListener('click', function(){
            this.classList.toggle('change');
            console.log(quadrato.innerText);
        });

        //MOSTRO A VIDEO LA GRIGLIA
        griglia.append(quadrato);
        }

    } else if (difscelta === 'Difficile'){

        //CREO IL CICLO FOR PER CREARE TUTTE LE CASELLE DELLA GRIGLIA
        for (let i = 0; i<49; i++){

        //CREO OGNI SINGOLO QUADRATINO RICHIAMANDO LA FUNZIONE
        let quadrato = createSquare();
        quadrato.classList.add('quadrati2');
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
    }
    //FACCIO IN MODO CHE NON SI POSSANO CREARE PIU' TABELLE UNA SOTTO L'ALTRA NASCODENDO IL BOTTONE
    btn.classList.add('btn-none');
});


