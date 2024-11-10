const baseUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
const nomeCarta = document.querySelector('#name-carta');
const sezioneCarte = document.querySelector('#sezione-carte');

//creare la fetch dell'api

// Creo il div per le carte
const createCardDiv = (card) => {
    const div = document.createElement('div'); // Div per la carta intera
    div.className = "contenitore"; // Assegno la class name al div

    // Creo lo spazio per la foto
    const photoDiv = document.createElement('div');
    photoDiv.className = "foto-carta"; // Assegno la classname del div della foto
    
    // Aggiungo la foto alla carta (immagine)
    const img = document.createElement('img');
    img.src = card.image; // Assumo che 'card' abbia una proprietà 'image' per l'URL dell'immagine
    photoDiv.appendChild(img); // Aggiungo l'immagine al div della foto
    
    // Creo lo spazio per le informazioni
    const infoCard = document.createElement('div');
    infoCard.className = "info-carta"; // Assegno la classname del div delle info

    // Inserisco singolarmente le informazioni, come nome e tipo
    const nameElement = document.createElement('h3');
    nameElement.textContent = card.name; // Imposto il nome della carta
    infoCard.appendChild(nameElement); // Aggiungo il nome al div delle info

    const typeElement = document.createElement('p');
    typeElement.textContent = `Tipo: ${card.type}`; // Imposto il tipo della carta
    infoCard.appendChild(typeElement); // Aggiungo il tipo al div delle info

    // Aggiungo i div foto e info al contenitore principale
    div.appendChild(photoDiv);
    div.appendChild(infoCard);

    return div; // Ritorno il div creato
};




//visualizzare le carte in ordine con i vari dati e l'immagine
//fare in modo che quando si scriva sulla barra le carte vengano aggiornate automaticamente (forse un loop? probabile )
//Opzionale
//aggiungere il modo di cercare le carte anche per tipo
//aggiungere il modo di cercare le carte per elemento
