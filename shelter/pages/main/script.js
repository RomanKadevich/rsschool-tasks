window.addEventListener('DOMContentLoaded', () => {
    let menu = document.getElementById('menu');
    let burger = document.getElementById('burger');
    let screen = document.getElementById('screen');
    let linkMob = document.querySelectorAll('.nav-mob__link');
    burger.addEventListener('click',  () =>{
        menu.classList.toggle('nav-mob--active');
        burger.classList.toggle('nav__burger--active');
        screen.classList.toggle('screen-active');
        document.body.classList.toggle('scroll-hidden');
    })
    screen.addEventListener('click', () =>{
        menu.classList.remove('nav-mob--active');
        screen.classList.remove('screen-active');
        burger.classList.remove('nav__burger--active');
        document.body.classList.remove('scroll-hidden');

    })
    for (let item of linkMob) {
        item.addEventListener('click', () =>{
            menu.classList.remove('nav-mob--active');
            screen.classList.remove('screen-active');
            burger.classList.remove('nav__burger--active');
            document.body.classList.remove('scroll-hidden');
        })
    }
})


