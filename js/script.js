// | prendo il parent nel DOM
const gridContainer = document.getElementById('grid-container');
const difficultyContainer = document.getElementsByClassName('dropdown-menu');


// | creo una lista vuota, che sarà la lista degli elementi già estratti
const currentBlackList = [];
numberOfSquares = 100;

// Ciclo per il numero di difficoltà che voglio generare
for (let i = 0; i < 3; i++) {
    const newDifficulty = createNewDifficulty(3 - i);
    difficultyContainer.innerHTML += newDifficulty;

}

// | ciclo per il numero di quadrati che voglio generare
for (let i = 0; i < numberOfSquares; i++) {
    // # creo un nuovo quadrato con le classi relative
    const newSquare = createNewSquare();

    // | mi genero un nuovo numero randomico che non sia già stato estratto
    const newUniqueNum = generateUniqueRandomNumber(currentBlackList, 0, numberOfSquares - 1);

    // ? il contenuto del quadrato sarà il numero randomico unico appena generato
    newSquare.innerHTML = newUniqueNum;

    // ! in base al valore di parità del numero randomico unico appena generato assegnerò un toggle con classi diverse
    let className = (newUniqueNum % 2 === 0) ? 'cyaned' : 'redned';
    addEventListenerWithToggle(newSquare, className, newUniqueNum);

    // § aggiungo il nuovo quadrato al parent
    gridContainer.append(newSquare);

    // | e lo aggiungo alla blacklist
    currentBlackList.push(newUniqueNum);
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------FUNCTIONS*/

function createNewDifficulty(difficultyNumber) {
    const currentDifficulty = `<li><a class="dropdown-item" href="#">Difficoltà ${difficultyNumber}</a></li>`;
    return currentDifficulty;
}



function addEventListenerWithToggle(htmlElement, classToToggle, cellNumber) {
    htmlElement.addEventListener('click', function() {
        htmlElement.classList.toggle(classToToggle);
        console.log(`è stata cliccata la cella numero ${cellNumber}`);
    });
}

function createNewSquare() {
    const currentSquare = document.createElement('div');
    currentSquare.classList.add('square');
    return currentSquare;
}

// funzione: prende blacklist, prende il valore minimo, il valore massimo inclusi
function generateUniqueRandomNumber(blackList, min, max) {
    let newRandomNumber;
    let isNumberValid = false;

    // finché il numero trovato non è valido
    while (isNumberValid === false) {
        // genera un nuovo numero randomico nell'intervallo min-max
        newRandomNumber = Math.floor(Math.random() * (max + 1) - min) + min;

        // se non è già presente in blacklist || ovvero che il numero è nuovo e valido
        if (!blackList.includes(newRandomNumber)) {
            // usciamo dal ciclo
            isNumberValid = true;
        }
    }
    return newRandomNumber;
}


// Operatore ternario:
// § condizione ? valoreSeLaCondizioneÈVera : valoreSeLaCondizioneÈFalsa;
// let variabile = (true) ? "valoreDiVero" : "valoreDiFalso";