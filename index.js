//Se importa la función de "calcular.js"
import mostrarCalculos from './calcular.js'

//Operación de suma
console.log(`Resultado de la suma entre 5 y 10: ${mostrarCalculos("sumar", 5, 10)}`)
console.log("-----------------------------------------------------------------")

//Operación de resta
console.log(`Resultado de la resta entre 10 y 50: ${mostrarCalculos("restar", 10, 50)}`)
console.log("-----------------------------------------------------------------")

//Operación de multiplicación
console.log(`Resultado de la multiplicación entre 2 y 18: ${mostrarCalculos("multiplicar", 2, 18)}`)
console.log("-----------------------------------------------------------------")

//Operación de división
console.log(`Resultado de la división entre 17 y 29: ${mostrarCalculos("dividir", 17, 29)}`)
console.log("-----------------------------------------------------------------")

//Operación de división errónea
console.log(`Resultado de la división entre 5 y 0: ${mostrarCalculos("dividir", 5, 0)}`)
console.log("-----------------------------------------------------------------")

//Operación no reconocida
console.log(`Resultado de la operación: ${mostrarCalculos("holaMundo", 5, 10)}`)
console.log("-----------------------------------------------------------------")
