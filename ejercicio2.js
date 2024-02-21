//Crea una expresión regular que valide un código postal con el formato de cinco dígitos.

RegExp = /^\d{5}$/

function validarCod (postal){
    return RegExp.test(postal)
}

let codPost = prompt("Ingresa tu codigo postal: ");

console.log(validarCod(codPost));