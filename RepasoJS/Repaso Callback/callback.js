//SIN Callback
// En esta función que suma dos números, se toma 500 mili segundos en responder porque lo coloqué
// un setTimeout con ese tiempo. Esto sirve para demostrar cuando una operación se demora, perfectamente una
// consulta demorada podría ser a la base de datos.

function suma(numero_uno, numero_dos) {
    setTimeout(function () {
        return resultado = numero_uno + numero_dos;
    }, 500);
}

var resultado = suma(2, 5)
console.log(resultado);

// El resultado es el siguiente: el problema es que el código no se queda esperando a que la función responda,
// sigue derecho y cuando llega a console.log(resultado) este responde "undefined",
// entonces: ¿ cómo hacemos para que nuestro código espere a que la función responda y no siga derecho ?

// Con CALLBACK:
function suma(numero_uno, numero_dos, callback) {
    setTimeout(function () {
        var resultado = numero_uno + numero_dos;
        callback(resultado);
    }, 500);
}

suma(2, 5, (resultado) => {
    console.log(resultado)
})

// En este ejemplo le agregamos a la función sumar el parámetro callback. Éste nos ayudará a retornar el resultado
//  cuando esté listo. AHORA la función que llama el resultado ya no la igualo a una variable
// como en el anterior, si no que invoco la función que trae el resultado.
// Cuando obtengo el resultado, invoco el console.log(resultado).

// La idea es que usen sus funciones donde quieran y si tienen que hacer algo adicional con el resultado
// lo hagan después de recibir el callback.

// Con CALLBACK:
function multi(numero_uno, numero_dos, callback) {
    setTimeout(function () {
        let resultado = numero_uno * numero_dos;
        callback(resultado);
    }, 500);
}

multi(2, 5, function (resultado) {
    console.log(resultado);
})
