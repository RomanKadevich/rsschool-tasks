window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const leftBlock = document.querySelector('#leftBlock').innerHTML;
    let firstCard = document.getElementById('firstCard').innerHTML
    const rightBlock = document.querySelector('#leftBlock').append(firstCard)


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

        } else {
            carusel.classList.remove('transition-right');
            btnRIGHT.addEventListener('click', moveRight);
            document.querySelector('#centerBlock').innerHTML = rightBlock;
           }

    })

})
