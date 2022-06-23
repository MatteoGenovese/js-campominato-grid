// | prendo il parent nel DOM
const gridContainer = document.getElementById('grid-container');

// | creo una lista vuota, che sarà la lista degli elementi già estratti
const currentBlackList = [];

// | ciclo per il numero di quadrati che voglio generare
for (let i = 0; i < 64; i++) {
    // # creo un nuovo quadrato con le classi relative
    const newSquare = createNewSquare();

    // | mi genero un nuovo numero randomico che non sia già stato estratto
    const newUniqueNum = generateUniqueRandomNumber(currentBlackList, 0, 63);

    // ? il contenuto del quadrato sarà il numero randomico unico appena generato
    newSquare.innerHTML = newUniqueNum;

    // ! in base al valore di parità del numero randomico unico appena generato assegnerò un toggle con classi diverse
    let className = (newUniqueNum % 2 === 0) ? 'cyaned' : 'redned';
    addEventListenerWithToggle(newSquare, className);

    // § aggiungo il nuovo quadrato al parent
    gridContainer.append(newSquare);

    // | e lo aggiungo alla blacklist
    currentBlackList.push(newUniqueNum);
}

function addEventListenerWithToggle(htmlElement, classToToggle) {
    htmlElement.addEventListener('click', function() {
        htmlElement.classList.toggle(classToToggle);
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


// ! Se il numero interno è dispari voglio che il colore di background diventi rosso quando clicco
// § Se il numero interno è pari voglio che il colore di background diventi ciano quando clicco

// siamo nel for => (per ogni singolo quadratino) => se è dispari faccio qualcosa, se è pari faccio qualcos'altro

// ? L'operatore ternario è un modo rapido di assegnare un valore in base a una (o più) condizioni
// # a = 10 se c'è una data condizione, 11 in tutti gli altri casi.

// Operatore ternario:
// § condizione ? valoreSeLaCondizioneÈVera : valoreSeLaCondizioneÈFalsa;
// let variabile = (true) ? "valoreDiVero" : "valoreDiFalso";