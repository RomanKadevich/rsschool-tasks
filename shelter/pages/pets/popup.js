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
        let cardId = card.getAttribute('data-id');
        card.addEventListener('click',()=>{
            fetch('pets.json')
            .then(response => response.json())
            .then(data => {
              let cardContent = data.cards.find(card => card.id === cardId);
              name.textContent = cardContent.name;
              type.textContent = cardContent.type;
              breed.textContent = cardContent.breed;
              description.textContent = cardContent.description;
              age.innerHTML = '<span>Age: </span>' + cardContent.age;
              inoculations.innerHTML = '<span>Inoculations: </span>' + cardContent.inoculations;
              diseases.innerHTML ='<span>Diseases: </span>' + cardContent.diseases;
              parasites.innerHTML = '<span>Parasites: </span>' + cardContent.parasites;
              img.setAttribute('src', cardContent.img);
              })
              document.querySelector('.screen-popup').classList.add('screen-popup--active');
              document.querySelector('.popup__card').classList.add('popup__card--active');
              document.body.style.overflow = 'hidden';
        })
    })
    document.querySelector('.popup__exit').addEventListener('click',()=>{
        document.querySelector('.screen-popup').classList.remove('screen-popup--active');
        document.querySelector('.popup__card').classList.remove('popup__card--active');
        document.body.style.overflow = '';
    }
    )
    document.querySelector('.screen-popup').addEventListener('click',()=>{
        document.querySelector('.screen-popup').classList.remove('screen-popup--active');
        document.querySelector('.popup__card').classList.remove('popup__card--active')
        document.body.style.overflow = '';}
    )
})
