// Haal de elementen op met behulp van querySelector en querySelectorAll
const items = document.querySelectorAll('.item'); // Haal alle elementen met de class 'item' op
const modal = document.querySelector('.modal'); // Haal het eerste element met de class 'modal' op
const modalImage = document.querySelector('#modalImage'); // Haal het element met het id 'modalImage' op
const modalName = document.querySelector('.modal-name'); // Haal het eerste element met de class 'modal-name' op
const modalLink = document.querySelector('#modalLink'); // Haal het element met het id 'modalLink' op
const modalClose = document.querySelector('.modal-close'); // Haal het eerste element met de class 'modal-close' op
const slider = document.querySelector('.slider'); // Haal het eerste element met de class 'slider' op

// Functie om de animatie van de slider te pauzeren of te hervatten
function toggleSliderAnimation(isPaused) {
    // Stel de animation-play-state in op 'paused' of 'running' op basis van de waarde van isPaused
    slider.style.animationPlayState = isPaused ? 'paused' : 'running';
}

// Voeg een klik-event toe aan elk item
items.forEach(item => {
    item.addEventListener('click', () => {
        // Wanneer een item wordt aangeklikt, stel de modal in met de gegevens van het aangeklikte item
        modalImage.src = item.querySelector('img').src; // Zet de bron van de afbeelding in de modal
        modalName.textContent = item.dataset.name; // Zet de naam in de modal
        modalLink.href = item.dataset.url; // Zet de link in de modal
        modal.classList.add('active'); // Voeg de class 'active' toe aan de modal om deze zichtbaar te maken
        toggleSliderAnimation(true); // Pauzeer de animatie van de slider
    });
});

// Voeg een klik-event toe aan de modal om deze te sluiten
modal.addEventListener('click', (e) => {
    // Controleer of de klik op de modal zelf of de sluitknop was
    if (e.target === modal || e.target === modalClose) {
        modal.classList.remove('active'); // Verwijder de class 'active' om de modal te verbergen
        toggleSliderAnimation(false); // Hervat de animatie van de slider
    }
});

