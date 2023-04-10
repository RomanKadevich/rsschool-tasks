window.addEventListener('DOMContentLoaded', () => {
    const btnLEFT = document.getElementById('btnLEFT');
    const btnRIGHT = document.getElementById('btnRIGHT');
    const btnMobLEFT = document.getElementById('btnMobLEFT');
    const btnMobRIGHT= document.getElementById('btnMobRIGHT');
    const carusel = document.getElementById('carusel');
    btnLEFT.addEventListener('click',()=>{ 
        carusel.classList.add('transition-left');
    });
    btnRIGHT.addEventListener('click',()=>{ 
        carusel.classList.add('transition-right');
    });
    btnMobLEFT.addEventListener('click',()=>{ 
        carusel.classList.add('transition-left');
    });
    btnMobRIGHT.addEventListener('click',()=>{ 
        carusel.classList.add('transition-right');
    });
   
   
   
})
