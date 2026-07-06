// Aplicación principal - Proyecto Git
console.log('Proyecto Git cargado correctamente');

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header h1');
    if (header) {
        header.style.cursor = 'pointer';
        header.addEventListener('click', function () {
            alert('¡Bienvenido al proyecto de práctica Git!');
        });
    }
});
