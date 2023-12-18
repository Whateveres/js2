function ToggleEvent() { //Creación de función

    const image = document.getElementById('border'); //Creación de variable

    //Instrucción if (condición)
    if (image.style.border) { //En caso de tener borde la imágen,

        image.style.border = ''; //se lo quita

    } else {
        image.style.border = '2px solid red'; //En caso contrario, se lo agrega
    }
};


