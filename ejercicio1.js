//Construya una expresión regular que permita validar en Nit de una empresa en Colombia.

RegExp = /^\d{8}-\d$/

function validarNit (nit) {
    return RegExp.test(nit)
}

let nit1 = prompt("Ingrese su NIT: ")

console.log(validarNit(nit1));