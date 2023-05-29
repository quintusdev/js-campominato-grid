// Funzione per creare un singolo quadrato
function createSquare(className, text) {
    let quadrato = document.createElement('div');
    quadrato.className = className;
    quadrato.innerText = text;
  
    // indico se il quadrato è una mina
    quadrato.isMine = false; 
    // indico se il quadrato è stato cliccato
    quadrato.isRevealed = false;
  
    // Evento al click del quadrato
    quadrato.addEventListener('click', function() {
      if (!quadrato.isRevealed) {
        quadrato.isRevealed = true;
        quadrato.classList.add('revealed');
  
        if (quadrato.isMine) {
          quadrato.classList.add('mine');
          alert('Hai Perso! Clicca su Nuova Partita per ricominciare!');
        }
      }
    });
  
    return quadrato;
  }
  
// Funzione per creare la griglia di gioco
function createGrid(difficulty) {
    const gridSize = difficultyMap[difficulty];
    //assegno la classe corrispondente ai quadrati in base alla difficoltà selezionata
    const className = 'quadrato' + (gridSize === 100 ? '' : gridSize === 81 ? '1' : '2');
    const griglia = document.getElementById('griglia');
  
    griglia.innerHTML = '';
  
    // Creo la griglia di quadrati
    for (let i = 0; i < gridSize; i++) {
      let quadrato = createSquare(className, i + 1);
      griglia.appendChild(quadrato);
    }
  
    // Imposto le mine in posizioni casuali
    // Calcolo il numero di mine in base alla dimensione della griglia
    const numMines = Math.floor(gridSize / 10);
  
    // Colloco in modo casuale le mine assegnandole ad una casella
    for (let i = 0; i < numMines; i++) {
      let randomMine = Math.floor(Math.random() * gridSize);
      let quadrato = griglia.childNodes[randomMine];
      quadrato.isMine = true;
    }
  }

// assegno le dimensioni della griglia in base alla difficoltà
const difficultyMap = {
    'Facile': 100,
    'Normale': 81,
    'Difficile': 49
};
  
// Recupero gli elementi dalla pagina
const selectElement = document.getElementById('difficulty');
const griglia = document.getElementById('griglia');
const btn = document.getElementById('btn');
  
// Evento click del bottone
btn.addEventListener('click', function() {
    const difficulty = selectElement.value;
    createGrid(difficulty);
});
  
// Evento click del bottone nuova partita
new_game.addEventListener('click', function() {
    griglia.innerHTML = '';
});
