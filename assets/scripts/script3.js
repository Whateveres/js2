//Creación de Bucle For para crear opciones de 1 al 9
for (let i = 1; i <= 9; i++) {

    let option = document.createElement('option'); //Creación de nuevo elemento option
    option.value = option.innerHTML = i; //Actualización de su valor

    //Usando método .appendChild() para agregar opciones de 1 al 9 a cada select junto con método '.cloneNode()'
    document.getElementById('num1').appendChild(option.cloneNode(true)); 
    document.getElementById('num2').appendChild(option.cloneNode(true));
    document.getElementById('num3').appendChild(option.cloneNode(true));
}

//Creación de la función 'OnclickEvent()' que concatena digitos seleccionados de los 3 'selects' para crear un password
function OnclickEvent() {

    //Creación de variables pwd y result
    let pwd = document.getElementById('num1').value + document.getElementById('num2').value + document.getElementById('num3').value;
    let result = 'Password incorrecto';

    //Instrucción if (condición)
    if (pwd === '911') {       //Bloque de código que se ejecuta si condición es verdadera

        result = 'Password 1 correcto';

    } else if (pwd === '714') {       //Bloque de código que se ejecuta si condición es verdadera

        result = 'Password 2 es correcto';
    }

    document.getElementById('result').innerHTML = result; //Actualizo resultado usando '.innerHTML' en base a resultado de condición
};

