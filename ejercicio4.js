//Crea una expresión regular que valide un número de teléfono con el formato (XXX) XXX-XXXX.


RegExp = /^\d{3}-\d{3}-\d{4}$/

function validarTelefono (numero){
    return RegExp.test(numero)
}

let phone = prompt("Ingresa tu numero de telefono: ");

console.log(validarTelefono(phone));