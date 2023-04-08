window.addEventListener('DOMContentLoaded', () => {
    let menu = document.getElementById('menu')
    let burger = document.getElementById('burger')
    let screen = document.getElementById('screen')
    burger.addEventListener('click', function () {
        menu.classList.toggle('nav-mob--active');
        burger.classList.toggle('nav__burger--active')
        screen.classList.toggle('screen-active')
    })
    document.querySelector('#screen').addEventListener('click',function(){
         menu.classList.remove('nav-mob--active');
         screen.classList.remove('screen-active');
       
     })

})


