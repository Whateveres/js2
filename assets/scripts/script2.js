function OnclickEvent() { //Creación de la función

    //Creando variables para los 3 stickers
    const quantity1 = parseInt(document.getElementById('quantity1').value); //Variables creadas toman el valor que ingresa el usuario con '.value'
    const quantity2 = parseInt(document.getElementById('quantity2').value);
    const quantity3 = parseInt(document.getElementById('quantity3').value);

    const total = quantity1 + quantity2 + quantity3; //Creando variable de cantidades de los 3 stickers
    const result = document.getElementById('result'); //Creando variable con resultado para actualizar el texto de HTMl

    //Instrucción if (condición)
    if (total <= 10) { //Si el valor de la variable total es menor o igual a 10 entonces:
        result.innerHTML = "Llevas " + total + " stickers"; //El valor del resultado se actualiza de esta forma usando '.innerHTML'
    } else {
        result.innerHTML = "Llevas demasiados stickers"; //Si es sobre 10, se actualiza a esta otra
    }
};
