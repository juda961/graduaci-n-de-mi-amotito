// Espera a que el HTML esté completamente cargado antes de ejecutar nada
document.addEventListener('DOMContentLoaded', function() {

    // 1. Selecciona todos los elementos con clase "hito"
    const hitos = document.querySelectorAll('.hito');

    // 2. Crea el observador: qué hacer cuando un hito entra en pantalla
    const observador = new IntersectionObserver(function(entradas) {
        entradas.forEach(function(entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2 // se activa cuando el 20% del hito es visible
    });

    // 3. Le dice al observador que vigile cada hito
    hitos.forEach(function(hito) {
        observador.observe(hito);
    });

});
