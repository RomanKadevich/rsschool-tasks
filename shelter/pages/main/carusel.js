window.addEventListener('DOMContentLoaded', () => {
    const popup =() => {
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
    }
    
    const cards = document.querySelectorAll('.card');
    const leftBlock = document.querySelector('#leftBlock').innerHTML;
    const rightBlock = document.querySelector('#rightBlock').innerHTML;


    const btnLEFT = document.getElementById('btnLEFT');
    const btnRIGHT = document.getElementById('btnRIGHT');
    const btnMobLEFT = document.getElementById('btnMobLEFT');
    const btnMobRIGHT = document.getElementById('btnMobRIGHT');
    const carusel = document.getElementById('carusel');
    const moveLeft = () => {
        carusel.classList.add('transition-left');
        btnLEFT.removeEventListener('click', moveLeft);
    };
    const moveRight = () => {
        carusel.classList.add('transition-right');
        btnRIGHT.removeEventListener('click', moveRight);
    };
    btnLEFT.addEventListener('click', moveLeft);

    btnRIGHT.addEventListener('click', moveRight);

    btnMobLEFT.addEventListener('click', moveLeft);
    btnMobRIGHT.addEventListener('click', moveRight);
    
  
  

    carusel.addEventListener('animationend', (animationEvent) => {
        let animation = animationEvent.animationName;
        if ((animation === 'move-left') || (animation === 'move-left-768px') || (animation === 'move-left-320px')) {
            carusel.classList.remove('transition-left');
            btnLEFT.addEventListener('click', moveLeft);
            document.querySelector('#centerBlock').innerHTML = leftBlock;
            popup();

        } else {
            carusel.classList.remove('transition-right');
            btnRIGHT.addEventListener('click', moveRight);
            document.querySelector('#centerBlock').innerHTML = rightBlock;
            popup();
           }

    })

})

