const contenedor = document.querySelector('.cont');

contenedor.addEventListener('wheel', (event) => {
    event.preventDefault(); // Previene el scroll vertical
    contenedor.scrollLeft += event.deltaY; // Desplaza horizontalmente según el scroll vertical
});
