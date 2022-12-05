// Path: script\script.js
let scrollH = document.querySelector('.inner');

/* Funcion para hacer scroll horizontal */
const scroll2 = () => {

    if ((Math.round(scrollH.scrollLeft) + 1) >= scrollH.scrollWidth - scrollH.clientWidth) {
        scrollH.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    /* si no llega al maximo, sumar 1 */
    else {
        scrollH.scrollBy({
            top: 0,
            left: 10,
            behavior: 'smooth'
        });  /* ScrollBy: desplazamiento relativo */
    }

    setTimeout(() => {
        requestAnimationFrame(scroll2);
    }, 5000);



}

scroll2();

/* PAra quitar el lag del setTimeout:

    requestAnimationFrame(scroll2);

    
    requestAnimationFrame: es una funcion que se ejecuta cada vez que el navegador esta listo para pintar un nuevo frame en la pantalla.

    requestAnimationFrame junto con SetTimeout:

    setTimeout(() => {
        requestAnimationFrame(scroll2);
    }, 2000);

*/


//////////
let input_element = document.querySelectorAll("input");

for (let i = 0; i < input_element.length; i++) {
    input_element[i].addEventListener("keyup", () => {
        input_element[i].setAttribute("value", input_element.value);
    });
}

