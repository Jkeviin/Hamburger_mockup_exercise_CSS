let scrollH = document.querySelector('.inner');

/* Funcion para hacer scroll horizontal */
const scroll2 = async () => {

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

    /* Para que no se laguee */
    await setTimeout(() => {
        scroll2();
    }
        , 5000);
}

scroll2();


//////////
let input_element = document.querySelectorAll("input");

for (let i = 0; i < input_element.length; i++) {
    input_element[i].addEventListener("keyup", () => {
        input_element[i].setAttribute("value", input_element.value);
    });
}

