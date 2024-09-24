/* DESAFÍO 2
const NombreProducto = "PS5"
const PrecioUnitario = "1100000"

let CantidadDeseada = prompt("¿Qué cantidad desea comprar?: ")

const CostoTotal = PrecioUnitario * CantidadDeseada

alert("Costo total de la compra: " + CostoTotal)
*/

const nombreProducto = "teclado"
const precioUnitario = "85000"
let cantidadDeseada = parseInt(prompt("¿Que cantidad de teclados ($85000) desea comprar?: "))
const total = cantidadDeseada*precioUnitario
const descuento = cantidadDeseada*precioUnitario*0.10
const totalDesc = total-descuento

if(cantidadDeseada >= 5){
    alert(`Total: $${total}. Por adquirir ${cantidadDeseada} teclado/s, se descuenta el 10%, = $${descuento}. El monto a pagar es de: $${totalDesc}`)
}
else{
    alert(`Su compra de ${cantidadDeseada} teclado/s, cuesta: ${total}`)
}


/*
let edad = prompt( "Ingrese su edad: ")

if(edad >= 18){
    alert("podes ingresar")
}
else{
    alert("No podes entrar")
}
*/