
const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item');

window.addEventListener("click", function(e){
    const elClass = e.target.classList;
    if (container.contains(e.target)){  
        // Cambiar rating
        if (!elClass.contains('active')) {
            items.forEach( // Resetear la clase activa
            item => item.classList.remove('active')
            );
        console.log(e.target.getAttribute("data-rate"));
        elClass.add('active'); // Añadir la clase activa al corazón clicado
        
        }
    } else {
        items.forEach( // Resetear la clase activa
            item => item.classList.remove('active')
            );
        items[0].classList.add('active'); // Añadir la clase activa al elemento de reset
    }
});



