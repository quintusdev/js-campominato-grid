PROBLEMA: L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

1- CREO UN BUTTON;
2- CREAO UN CONTENITORE DOVE INSERIRE LA GRIGLIA GENERATA;
3- RICHIAMO IL BOTTONE IN JS;
4- DEFINISCO UNA FUNZIONE CHE CREI UN QUADRATINO SINGOLO;
5- AGGIUNGO UNA FUNZIONE PER CREARE LA GRIGLIA AL CLIC DEL BOTTONE;
    5.1- CREO UN CICLO FOR CHE CREI TANTI QUADRATI SINGOLI FINO A CREARE UNA GRIGLIA DI 10 X 10;
7- CREO UNA FUNZIONE CHE GENERI DEI NUMERI DA ASSOCIARE ALLE SINGOLE CASELLE;
8- QUANDO L'UTENTE CLICCA SULLA CASELLA, LA STESSA CAMBIA COLORE E IN CONSOLE VISUALIZZA IL NUMERO DELLA CASELLA STESSA;


PROBLEMA BONUS 1: Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
                    - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
                    - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
                    - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

1- AGGIUNGO UNA SELECT ACCANTO AL BOTTONE;
2- INSERISCO LE TRE OPZIONI DI SCELTA NELLA SELECT;
3- CREO UN IF PER OGNI CONDIZIONE DI SCELTA;
4- GENERO LA TABELLA CON IL NUMERO DI CASELLE INDICATO IN BASE AL LIVELLO DI DIFFICOLTA';