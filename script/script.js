/* Crear una funcion que mueva automaticamente un slide

    Existe un componente llamado .inner con 3 componentes hijos los cuales se mueven como si fueran un slide,

    1. Se mueva infinitamente a la derecha con inner.scrollBy({
            top: 0,
            left: 10,
            behavior: 'smooth'
    2. Cuando llegue al final del ultimo componente, el left vuelva a 0 el scrollTo
    2. Solo se mueva si la mediaQuery es mayor de 1000px, de lo contrario no mover el scroll */

const inner = document.querySelector(".inner");
const mediaQuery = window.matchMedia("(min-width: 868px)");

function moveSlide() {
    if (mediaQuery.matches) {
        if ((Math.round(inner.scrollLeft) + 1) >= inner.scrollWidth - inner.clientWidth) {
            inner.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
        /* si no llega al maximo, sumar 1 */
        else {
            inner.scrollBy({
                top: 0,
                left: 10,
                behavior: 'smooth'
            });  /* ScrollBy: desplazamiento relativo */
        }
    }

}

setInterval(moveSlide, 4000);













// Path: script\script.js







//////////
let input_element = document.querySelectorAll("input");

for (let i = 0; i < input_element.length; i++) {
    input_element[i].addEventListener("keyup", () => {
        input_element[i].setAttribute("value", input_element.value);
    });
}

