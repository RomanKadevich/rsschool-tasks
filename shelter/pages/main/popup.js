window.addEventListener('DOMContentLoaded', () => {
    let cards = document.querySelectorAll('.card');
    let name = document.getElementById('name');
    let img = document.getElementById('img');
    let type = document.getElementById('type');
    let breed = document.getElementById('breed');
    let description = document.getElementById('description');
    let age = document.getElementById('age');
    let inoculations = document.getElementById('inoculations');
    let diseases = document.getElementById('diseases');
    let parasites = document.getElementById('parasites');
    cards.forEach(card=>{
        let cardBtn = card.querySelector('.card__btn');
        let cardId = card.getAttribute('data-id');
        cardBtn.addEventListener('click',()=>{
            fetch('pets.json')
            .then(response => response.json())
            .then(data => {
              let cardContent = data.cards.find(card => card.id === cardId);
              name.textContent = cardContent.name;
              type.textContent = cardContent.type;
              breed.textContent = cardContent.breed;
              description.textContent = cardContent.description;
              age.textContent = cardContent.age;
              inoculations.textContent = cardContent.inoculations;
              diseases.textContent = cardContent.diseases;
              parasites.textContent = cardContent.parasites;
              })
              document.querySelector('.popup').classList.toggle('popup--active');
              document.querySelector('.popup__card').classList.toggle('popup__card--active');
        })
    })
    document.querySelector('.popup__exit').addEventListener('click',()=>{
        document.querySelector('.popup').classList.toggle('popup--active');
        document.querySelector('.popup__card').classList.toggle('popup__card--active')}
    )
})
