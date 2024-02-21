//Crea una expresión regular que valide un formato básico de dirección de correo electrónico.

RegExp = /[A-z]\w/

function validarEmail (correo){
    return RegExp.test(correo)
}

let email = prompt("Ingresa tu correo electronico: ");

console.log(validarEmail(email));