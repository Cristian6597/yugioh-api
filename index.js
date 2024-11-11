const baseUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php?staple=yes";
const nomeCarta = document.querySelector('#nome-carta');
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
    img.src = card.card_images[0].image_url_cropped;  // Prendo l'immagine dall api quella più piccola
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
//cards manager, impostare il set così renderizza le carte in pagina, usare closure

const cardsManager = (() => {
    let state = []; // qui ci vanno i dati immagino
    
    return {
        set: function(newState) {
            state = newState;
            this.render(); //ogni volta che c'è un nuovo stato, renderizza la lista
        },
        render: function(filtroTesto = "") {
            sezioneCarte.innerHTML = "";
            state
                .filter(card => card.name.toLowerCase().includes(filtroTesto.toLowerCase())) // Filtro carte
                .forEach(card => {
                    sezioneCarte.appendChild(createCardDiv(card));
                });
        }
    }

});

const firstManager = cardsManager();

//Aggiungo l'event listener per l'input
nomeCarta.addEventListener('input', () => {
    const cercaCarta = nomeCarta.value;
    firstManager.render(cercaCarta);
});




//Fetch dell'api e log dell'errore in caso di errore 
fetch(baseUrl)
.then(response => response.json())
.then(card => {
    firstManager.set(card.data);
})

.catch((err) => {
    console.log('err: ', err);
})



//visualizzare le carte in ordine con i vari dati e l'immagine ( fatto )
//fare in modo che quando si scriva sulla barra le carte vengano aggiornate automaticamente (fatto ma lagga, vedos e si può fixare, 
//fixato aveo usato l api di tutte le carte)
//aggiungere descrizione carta
//Opzionale
//aggiungere il modo di cercare le carte anche per tipo
//aggiungere il modo di cercare le carte per elemento
